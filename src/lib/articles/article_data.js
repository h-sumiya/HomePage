/** @type {{ title: string; href: string; summary: string; category: string; tags: string[] }[]} */
export const articles = [
	{
		title: 'Ubuntuでターミナルを一定時間で消灯する',
		href: '/articles/ubuntu/display',
		summary: 'consoleblank の秒数を指定して反映する。',
		category: 'Ubuntu',
		tags: ['Terminal', 'Display']
	},
	{
		title: 'パスワードなしでsudo可能なユーザーを作成する',
		href: '/articles/ubuntu/user',
		summary: 'ユーザー名を入力してそのままコピー。',
		category: 'Ubuntu',
		tags: ['User', 'Sudoers']
	},
	{
		title: 'Tailscale',
		href: '/articles/software/tailscale',
		summary: 'セットアップと Exit Node / UFW の基本手順。',
		category: 'Software',
		tags: ['Tailscale', 'Exit Node', 'UFW']
	}
];
