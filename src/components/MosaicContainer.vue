<template>
  <div style="flex: 1">
    <v-container fluid>
      <v-row>
        <v-col
          v-for="image in images"
          :key="image.id"
          cols="12"
          sm="4"
          md="4"
          lg="6"
        >
          <v-img
            src="@/assets/imagens/pexels-brett-jordan-842519.jpg"
            :alt="image.tags"
            class="image-card"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const images = ref([]);

// Exemplo de dados simulados para as imagens
const sampleImages = [
  {
    id: 1,
    largeImageURL: "https://via.placeholder.com/1000x800", // Tamanho maior
    tags: "Nature",
  },
  {
    id: 2,
    largeImageURL: "@/assets/imagens/pexels-brett-jordan-842519.jpg", // Tamanho maior
    tags: "City",
  },
  {
    id: 3,
    largeImageURL: "https://via.placeholder.com/1000x800", // Tamanho maior
    tags: "Travel",
  },
  {
    id: 3,
    largeImageURL: "https://via.placeholder.com/1000x800", // Tamanho maior
    tags: "Travel",
  },

  // Adicione mais imagens conforme necessário
];

onMounted(() => {
  // Simular o carregamento de imagens (substitua isso por uma chamada à API real)
  setTimeout(() => {
    images.value = sampleImages;
  }, 1000);
});
</script>

<style scoped>
.image-card {
  object-fit: cover;
  object-position: top;
  border-radius: 10px; /* Borda arredondada */
}
</style>
