<script>
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';

	const style = 'https://tiles.openfreemap.org/styles/liberty';

	async function loadMap() {
		const maplibregl = await import('maplibre-gl');
		const map = new maplibregl.Map({
			container: 'map',
			style,
			center: [0, 0],
			zoom: 1
		});
		new maplibregl.Marker().setLngLat([30.5, 50.5]).addTo(map);
	}

	onMount(() => {
		loadMap();
	});
</script>

<svelte:head>
	<script src="https://unpkg.com/maplibre-gl@^5.13.0/dist/maplibre-gl.js"></script>
	<link href="https://unpkg.com/maplibre-gl@^5.13.0/dist/maplibre-gl.css" rel="stylesheet" />
</svelte:head>

<div id="map"></div>

<style>
	div {
		position: absolute;
		height: 100dvh;
		width: 100dvw;
	}
</style>
