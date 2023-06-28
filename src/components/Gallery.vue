<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10"
  >
    {{ selectedPhoto }}
    <div
      v-for="photo in optImages"
      class="overflow-hidden rounded-lg cursor-pointer"
      @click="selectedPhoto = photo"
    >
      <img
        class="w-full h-full hover:scale-110 transition-all"
        :src="photo"
        alt="Zdjęcie galerii"
      />
    </div>
    <div
      class="absolute right-0 top-0 z-[100] w-full h-full flex items-center justify-center bg-neutral-900/40"
      @click="selectedPhoto = ''"
      v-if="selectedPhoto"
    >
      <div class="max-w-4xl bg-white w-full">{{ selectedPhoto }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(["photos", "test"]);

import { getImage } from "@astrojs/image";

const selectedPhoto = ref("");

const images = [
  "gal1.jpg",
  "gal2.jpg",
  "gal3.jpg",
  "gal4.jpg",
  "gal5.jpg",
  "gal6.jpg",
];

const optImages = [];

images.forEach(async (image) => {
  const { src } = await getImage({
    src: import("../images/gallery/" + image),
    alt: "My hero image",
  });
  optImages.push(src);
});

const { src } = await getImage({
  src: import("../images/natalia1.jpg"),
  alt: "My hero image",
});

// console.log(optImages);
</script>
