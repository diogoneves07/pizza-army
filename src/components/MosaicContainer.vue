<template>
  <div class="image-mosaic">
    <div v-for="(image, index) in images" :key="index" class="image-item">
      <v-img :src="image.src" :alt="image.alt" class="image-card"></v-img>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    id: 1,
    src: "pexels-narda-yescas-1566837.png",
    alt: "Nature",
  },
  {
    id: 2,
    src: "pexels-brett-jordan-842519.png",
    alt: "City",
  },
  {
    id: 3,
    src: "pexels-kristina-paukshtite-1146760.png",
    alt: "Travel",
  },
  {
    id: 3,
    src: "pexels-vincent-rivaud-2233348.png",
    alt: "Travel",
  },
].map((o) => {
  return {
    ...o,
    src: new URL(`/src/assets/imagens/${o.src}`, import.meta.url).toString(),
  };
});
</script>

<style scoped lang="scss">
.image-mosaic {
  display: grid;
  align-content: start;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  flex: 1;
  @media only screen and (max-width: 900px) {
    display: block;
    white-space: nowrap !important;
    overflow-x: scroll;
    padding: 10px;
    flex: 1;
    max-width: 90vw;

    .image-item {
      display: inline-block;
      width: 200px;
      margin: 10px;
    }
  }
}

.image-item {
  flex: 1;
}

.image-card {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
