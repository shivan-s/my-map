<script lang="ts">
	const popoverId = 'info';
</script>

<button popovertargetaction="toggle" popovertarget={popoverId} title="About" aria-label="About">
	ℹ️
</button>
<dialog id={popoverId} popover="auto">
	<header>
		<h2>ℹ️ About</h2>
		<button popovertargetaction="hide" popovertarget={popoverId}>Close</button>
	</header>
	<div>
		<p>👋 Welcome!</p>
		<p>
			This map contains locations I want to visit (<strong style="color: hsl(1 50% 50% / 1)"
				>red</strong
			>) as well as places I have visited (<strong style="color: hsl(120 50% 50% / 1)">green</strong
			>).
		</p>
		<p><a href="https://shivan.xyz" target="_blank">Who am I?</a></p>
		<p>
			<a href="https://github.com/shivan-s/my-map" target="_blank">Where is the code for this?</a>
		</p>
	</div>
</dialog>

<style>
	button[popovertargetaction='toggle'] {
		background-color: transparent;
		border: none;
		opacity: 0.6;
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		transition:
			font-size 0.3s,
			opacity 0.2s;
		transition-timing-function: ease-in-out;
		&:hover {
			font-size: 2rem;
			opacity: 95;
		}
	}
	dialog {
		max-width: 95dvw;
		box-shadow: 0.5rem 0.5rem 5px 0.25rem hsl(1 0% 0% / 0.3);
		color: darkslategrey;
		background-color: snow;
		border: 3px solid darkslategray;
		border-radius: 1rem;
		& > header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			& > button {
				background-color: transparent;
				border: none;
				text-decoration: underline;
				cursor: pointer;
				transition: color 0.3s ease-in-out;
				&:hover,
				&:active {
					color: red;
				}
			}
		}
		& > div {
			padding: 1rem;
		}
		&::backdrop {
			backdrop-filter: blur(3px);
		}
	}
</style>
