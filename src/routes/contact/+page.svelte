<script>
	const contactMail = 'sumiya@hiro.red';

	let method = 'email';
	let replyTo = '';
	let body = '';
	let isSending = false;
	let notice = '';
	let noticeType = 'info';

	const selectMethod = (nextMethod) => {
		method = nextMethod;
		notice = '';
	};

	const setNotice = (type, message) => {
		noticeType = type;
		notice = message;
	};

	const submitForm = async () => {
		if (isSending) return;

		const payload = {
			replyTo: replyTo.trim(),
			message: body.trim()
		};

		if (!payload.replyTo || !payload.message) {
			setNotice('error', '返信先と本文は必須です。');
			return;
		}

		isSending = true;
		setNotice('info', '');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			const result = await response.json().catch(() => ({}));
			if (!response.ok) {
				setNotice(
					'error',
					typeof result?.error === 'string'
						? result.error
						: '送信に失敗しました。時間を空けて再試行してください。'
				);
				return;
			}

			replyTo = '';
			body = '';
			setNotice('success', '送信しました。内容を確認し、順次返信します。');
		} catch {
			setNotice('error', '送信に失敗しました。時間を空けて再試行してください。');
		} finally {
			isSending = false;
		}
	};
</script>

<svelte:head>
	<title>Contact | h-sumiya</title>
	<meta name="description" content="h-sumiyaへのお問い合わせページです。" />
</svelte:head>

<div class="page limit">
	<section class="panel">
		<div class="panel-head">
			<h2>Contact</h2>
			<p>連絡手段を選択してください。</p>
		</div>

		<div class="method-switch" role="tablist" aria-label="連絡方法の選択">
			<button
				type="button"
				role="tab"
				aria-selected={method === 'email'}
				class:active={method === 'email'}
				on:click={() => selectMethod('email')}
			>
				メール
			</button>
			<button
				type="button"
				role="tab"
				aria-selected={method === 'form'}
				class:active={method === 'form'}
				on:click={() => selectMethod('form')}
			>
				フォーム
			</button>
		</div>

		{#if method === 'email'}
			<div class="content email-card">
				<h3>Email</h3>
				<a href={`mailto:${contactMail}`} class="mail-link">{contactMail}</a>
				<p>上記アドレスに直接メールしてください。</p>
			</div>
		{:else}
			<form class="content form-card" on:submit|preventDefault={submitForm}>
				<label>
					<span>返信先</span>
					<input
						type="email"
						bind:value={replyTo}
						placeholder="you@example.com"
						autocomplete="email"
						required
					/>
				</label>
				<label>
					<span>本文</span>
					<textarea
						bind:value={body}
						rows="7"
						placeholder="お問い合わせ内容を入力してください。"
						required
					></textarea>
				</label>

				<div class="form-footer">
					<button type="submit" disabled={isSending}>
						{isSending ? '送信中...' : '送信'}
					</button>
				</div>
			</form>
		{/if}

		{#if notice}
			<p class="notice {noticeType}">{notice}</p>
		{/if}
	</section>
</div>

<style>
	.page {
		padding-block: 1.4rem 2.2rem;
	}

	.limit {
		max-width: var(--app-max-width);
		width: 100%;
		margin: 0 auto;
	}

	.panel {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.15rem;
		border: 1px solid var(--outline-variant);
		border-radius: 1rem;
		background-color: var(--surface-container-low);
	}

	.panel-head {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.panel-head h2 {
		margin: 0;
		line-height: 1.2;
	}

	.panel-head p {
		color: var(--on-surface-variant);
	}

	.method-switch {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
	}

	.method-switch button {
		min-height: 2.2rem;
		padding: 0.36rem 0.8rem;
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		background-color: var(--surface-container);
		color: var(--on-surface);
		font-size: 0.86rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			background-color 0.18s ease,
			border-color 0.18s ease,
			color 0.18s ease;
	}

	.method-switch button:hover {
		background-color: var(--surface-container-high);
		border-color: var(--outline);
	}

	.method-switch button.active {
		color: var(--on-primary-container);
		background-color: var(--primary-container);
		border-color: var(--primary-container);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		padding: 0.95rem 1rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.9rem;
		background-color: var(--surface-container);
	}

	.email-card h3 {
		margin: 0;
		line-height: 1.2;
	}

	.email-card p {
		color: var(--on-surface-variant);
	}

	.mail-link {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		justify-content: center;
		padding: 0.3rem 0.62rem;
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		background-color: var(--surface-container-high);
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
	}

	.form-card label {
		display: flex;
		flex-direction: column;
		gap: 0.32rem;
	}

	.form-card span {
		font-size: 0.84rem;
		font-weight: 600;
		color: var(--on-surface-variant);
	}

	input,
	textarea {
		width: 100%;
		border: 1px solid var(--outline-variant);
		border-radius: 0.74rem;
		background-color: var(--surface-container-low);
		color: var(--on-surface);
		padding: 0.58rem 0.72rem;
		transition:
			border-color 0.18s ease,
			background-color 0.18s ease;
	}

	textarea {
		resize: vertical;
		min-height: 8rem;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--primary);
	}

	.form-footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.form-footer button {
		min-height: 2.3rem;
		padding: 0.45rem 0.94rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--outline-variant);
		border-radius: 0.7rem;
		background-color: var(--surface-container-high);
		color: var(--on-surface);
		cursor: pointer;
		transition:
			background-color 0.18s ease,
			border-color 0.18s ease;
	}

	.form-footer button:hover:enabled {
		background-color: var(--primary-container);
		border-color: var(--primary-container);
		color: var(--on-primary-container);
	}

	.form-footer button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	.notice {
		margin: 0;
		padding: 0.6rem 0.72rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.74rem;
		font-size: 0.9rem;
	}

	.notice.success {
		background-color: color-mix(
			in oklab,
			var(--primary-container) 65%,
			var(--surface-container-low)
		);
		color: var(--on-primary-container);
		border-color: var(--primary-container);
	}

	.notice.error {
		background-color: color-mix(in oklab, #f7d5d5 62%, var(--surface-container-low));
		color: color-mix(in oklab, #7d1010 78%, var(--on-surface));
		border-color: color-mix(in oklab, #d78686 58%, var(--outline-variant));
	}

	@media (max-width: 620px) {
		.panel {
			padding: 1rem;
		}

		.content {
			padding: 0.86rem;
		}

		.form-footer button {
			width: 100%;
		}
	}
</style>
