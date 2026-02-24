<script>
	import score from './score.png';
</script>

<div class="padding">
	<h5>紹介</h5>
	<p>
		このAIは、<a href="https://www.codingame.com/multiplayer/bot-programming/othello-1" class="link"
			>CodinGame</a
		>
		のオセロコンテストに挑戦するために1か月ほどの期間をかけ作成したものをWebに移植したものです。
	</p>
	<p>主にRust,WASM,Svelteで作成しています。</p>
	<p>
		ソースコードは<a href="https://github.com/h-sumiya/OthelloArchive" class="link">GitHub</a
		>で公開しています。
	</p>
	<p>最終的にCodingame上のスコアで学生4位の成績を収めることができました。</p>
	<img src={score} alt="score" class="score" />
</div>

<style>
	img {
		max-width: 600px;
	}
</style>
