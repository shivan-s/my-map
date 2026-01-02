<script lang="ts">
	import Info from './Info.svelte';
	import { places } from './places';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';

	const containerId = 'map';
	const style = 'https://tiles.openfreemap.org/styles/liberty';
	async function loadMap() {
		const m = await import('maplibre-gl');
		const map = new m.Map({
			container: containerId,
			style,
			center: [0, 0],
			zoom: 1
		});
		places.forEach((p) => {
			const h2 = `<h2>${p.title}</h2>`;
			const html: string[] = [h2];
			if (p.body) html.push(`<p>${p.body}</p>`);
			const color = p.visited ? 'hsl(120 50% 50% / 1)' : 'hsl(1 50% 50% / 1)';
			const popup = new m.Popup().setHTML(html.join(''));
			const marker = new m.Marker({ color }).setLngLat(p.lngLat).setPopup(popup);
			marker.addTo(map);
		});
	}

	onMount(() => {
		loadMap();
	});
</script>

<svelte:head>
	<title>Shivan's Map</title>
</svelte:head>

<div id={containerId}></div>
<Info />

<style>
	div {
		position: absolute;
		height: 100dvh;
		width: 100dvw;
	}
</style>
