import { env as privateEnv } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 1800;

const sanitize = (value) => value.replace(/@/g, '@\u200b');

const getWebhookUrl = (platformEnv) =>
	platformEnv?.DISCORD_WEBHOOK_URL ?? privateEnv.DISCORD_WEBHOOK_URL ?? '';

const toText = (value) => (typeof value === 'string' ? value.trim() : '');

export async function POST({ request, platform, getClientAddress }) {
	const webhookUrl = getWebhookUrl(platform?.env);
	if (!webhookUrl) {
		return json({ error: 'HOOK / HOOK_URL が未設定です。' }, { status: 500 });
	}

	let payload;
	try {
		payload = await request.json();
	} catch {
		return json({ error: '無効なリクエストです。' }, { status: 400 });
	}

	const replyTo = toText(payload?.replyTo);
	const message = toText(payload?.message);

	if (!EMAIL_PATTERN.test(replyTo)) {
		return json({ error: '返信先メールアドレスの形式が正しくありません。' }, { status: 400 });
	}
	if (!message) {
		return json({ error: '本文を入力してください。' }, { status: 400 });
	}
	if (message.length > MAX_MESSAGE_LENGTH) {
		return json(
			{ error: `本文は ${MAX_MESSAGE_LENGTH} 文字以内で入力してください。` },
			{ status: 400 }
		);
	}

	const clientIp = getClientAddress?.() ?? 'unknown';
	const userAgent = request.headers.get('user-agent') ?? 'unknown';
	const sentAt = new Date().toISOString();

	const webhookPayload = {
		content: [
			'[HomePage Contact]',
			`Reply-To: ${sanitize(replyTo)}`,
			`Sent-At: ${sentAt}`,
			`Client-IP: ${sanitize(clientIp)}`,
			`User-Agent: ${sanitize(userAgent)}`,
			'Message:',
			sanitize(message)
		].join('\n'),
		allowed_mentions: { parse: [] },
		replyTo,
		message,
		sentAt,
		source: 'home-page-contact-form'
	};

	try {
		const response = await fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(webhookPayload)
		});

		if (!response.ok) {
			console.error('Failed to send webhook:', {
				status: response.status,
				statusText: response.statusText,
				responseBody: await response.text()
			});
			return json({ error: '送信に失敗しました。' }, { status: 502 });
		}

		return json({ ok: true });
	} catch {
		return json({ error: '送信に失敗しました。' }, { status: 502 });
	}
}
