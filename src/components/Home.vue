<script setup lang="ts">
import {
	Shader,
	Ascii,
	Blob,
	Bulge,
	CRTScreen,
	Checkerboard,
	ChromaFlow,
	CursorTrail,
	Group,
	Ripples,
	SolidColor,
	TiltShift
} from 'shaders/vue';

import { characterCursor, ghostCursor } from 'cursor-effects';
</script>

<template>
	<Shader class="fullscreen-shader">
		<SolidColor color="#17171a" mask-type="alpha" />
		<Group>
			<Checkerboard
				:cells="8"
				color-a="#cccccc"
				color-b="#383e42"
				mask-type="alpha"
			/>
			<Ripples
				:phase="0"
				:speed="1.9"
				:center="{ x: 0.5, y: 0.5 }"
				color-a="#ffffff"
				color-b="#000000"
				:opacity="0.32"
				mask-type="alpha"
				:softness="0"
				blend-mode="overlay"
				:frequency="17.3"
				:thickness="0.3"
			/>
			<Blob
				id="idmh47oyx205ue8s7u1"
				:seed="1"
				:size="0.5"
				:speed="2"
				:center="{ x: 0.5, y: 0.5 }"
				color-a="#ff6b35"
				color-b="#e91e63"
				:visible="true"
				mask-type="alpha"
				:softness="0.63"
				:highlight-x="0.06"
				:highlight-y="-0.1"
				:highlight-z="0.4"
				:deformation="0.15"
				highlight-color="#fff71a"
				:highlight-intensity="0.45"
			/>
			<Ripples
				:phase="0"
				:speed="-0.5"
				:center="{ x: 0.5, y: 0.5 }"
				color-a="#ffffff"
				color-b="#000000"
				:opacity="0.4"
				mask-type="alpha"
				:softness="0.57"
				blend-mode="overlay"
				:frequency="6.2"
				:thickness="0.39"
				mask-source="idmh47oyx205ue8s7u1"
			/>
			<ChromaFlow
				:radius="3"
				up-color="#c1e0c1"
				mask-type="alpha"
				:momentum="10"
				base-color="#eef21d"
				down-color="#f0e1e1"
				:intensity="1.5"
				left-color="#e1e1f0"
				mask-source="idmh47oyx205ue8s7u1"
				right-color="#ededd5"
			/>
			<CursorTrail
				color-a="#00aaff"
				color-b="#ff00aa"
				:length="0.5"
				:radius="0.5"
				:shrink="1"
			/>
			<Ascii
				:spacing="1"
				:cell-size="30"
				mask-type="alpha"
				characters="⦉⦊"
				font-family="JetBrains Mono"
			/>
			<Bulge
				edges="mirror"
				:center="{ x: 0.5, y: 0.5 }"
				:radius="1.36"
				:falloff="0.21"
				mask-type="alpha"
				:strength="0.5"
			/>
		</Group>
		<TiltShift
			:angle="90"
			:width="0.29"
			:center="{ x: 0.5, y: 0.5 }"
			:falloff="0.26"
			mask-type="alpha"
			:intensity="10"
		/>
		<CRTScreen
			:contrast="1.01"
			mask-type="alpha"
			:pixel-size="60"
			:brightness="2"
			:color-shift="0.8"
			:scanline-frequency="210"
			:scanline-intensity="0.91"
		/>
	</Shader>
	<img src="/src/assets/images/404.avif" alt="404" class="centered-404" />
	<a
		href="https://github.com/Bergbok/Neocity"
		target="_blank"
		rel="noopener noreferrer"
		class="github-link"
	>
		<img
			src="/src/assets/images/github.svg"
			alt="GitHub"
			class="github-svg"
		/>
	</a>
</template>

<script lang="ts">
characterCursor({ characters: ['b', 'e', 'r', 'g', 'b', 'o', 'k'] });
ghostCursor({
	image: 'https://raw.githubusercontent.com/Bergbok/HypnOS-Linux-Cursor/refs/heads/main/src/assets/default.png'
});
</script>

<style scoped>
.centered-404 {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 40vw;
	max-height: 40vh;
	z-index: 1;
	pointer-events: none;
}

.fullscreen-shader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100dvw;
	height: 100dvh;
	z-index: -1;
}

.github-link {
	position: absolute;
	top: 2rem;
	right: 2rem;
}

.github-svg {
	width: 2.5rem;
	height: 2.5rem;
	display: block;
}
</style>
