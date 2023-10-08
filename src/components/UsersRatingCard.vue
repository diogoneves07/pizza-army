<template>
  <v-row justify="center" class="container-flex">
    <v-col
      v-for="(review, index) in reviews"
      :key="index"
      cols="4"
      class="container-flex-child"
    >
      <v-card class="pa-0" elevation="0">
        <v-card-text class="text-center">
          <v-rating
            v-model="review.rating"
            dense
            half-increments
            color="#FFB521"
            background-color="transparent"
            disabled
          ></v-rating>
          <div class="caption">{{ review.comment }}</div>
          <div
            class="subheading font-weight-bold"
            style="
              display: flex;
              gap: 30px 10px;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
            "
          >
            <v-icon color="red">mdi-checkbox-marked-circle</v-icon>
            {{ review.customerName }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const reviews = ref([
  {
    rating: 4,
    comment:
      "Pizza incrível. Queijo de qualidade, bem recheada e crocante. Vou pedir mais e indicar pra todo mundo, com certeza!",
    customerName: "João Silva",
  },
  {
    rating: 5,
    comment:
      "Pizza incrível. Queijo de qualidade, bem recheada e crocante. Vou pedir mais e indicar pra todo mundo, com certeza!",
    customerName: "Maria Santos",
  },
  {
    rating: 3,
    comment:
      "Pizza incrível. Queijo de qualidade, bem recheada e crocante. Vou pedir mais e indicar pra todo mundo, com certeza!",
    customerName: "Pedro Almeida",
  },
]); // Dados das avaliações dos clientes.
</script>

<style scoped lang="scss">
.container-flex {
  padding: 30px 5vw;
  @media only screen and (max-width: 900px) {
    display: block;
    white-space: nowrap !important;
    overflow-x: scroll;
    padding: 10px;
    margin: 0 5vw;
    max-width: 90vw;
    padding: 10px 30px;
  }
  .container-flex-child {
    display: inline-block;
    min-width: 300px;
    overflow: auto;
    margin: 0;
    padding: 0;
  }
}
.caption {
  font-size: 14px;
  margin-top: 10px;
  word-wrap: break-word;
  white-space: initial;
}

.subheading {
  font-size: 16px;
  font-weight: bold; /* Adicionando negrito */
}
</style>
