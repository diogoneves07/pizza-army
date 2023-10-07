<template>
  <v-card class="pa-4 container" outlined>
    <div class="title-container">
      <h2>{{ selectedTaste }}</h2>
      <v-rating
        v-model="rating"
        background-color="transparent"
        color="yellow"
        size="24"
      ></v-rating
      ><span>42 AVALIAÇÕES</span>
    </div>
    <p class="mb-4">{{ description }}</p>
    <div class="flex items-center justify-between mb-4">
      <v-select
        v-model="selectedTaste"
        :items="pizzaTastes"
        label="Escolha o sabor da pizza"
        outlined
        dense
        class="white-bg"
      ></v-select>
      <div class="flex items-center add-pizzas">
        <v-btn icon @click="decrementQuantity" rounded color="grey">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <div class="mx-2">{{ quantity }}</div>
        <v-btn icon @click="incrementQuantity" rounded color="success">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <div class="subtotal ml-4">
          Subtotal: R$ {{ calculateSubtotal().toFixed(2) }}
        </div>
      </div>
    </div>
    <div class="orange-button">
      <v-btn color="orange" dark block> ADICIONAR AO CARRINHO </v-btn>
    </div>
    <div class="pizza-items">
      <ul>
        <li><v-icon color="green">mdi-check</v-icon> Molho de Tomate</li>
        <li><v-icon color="green">mdi-check</v-icon> Queijo Mussarela</li>
        <li><v-icon color="green">mdi-check</v-icon> Manjericão Fresco</li>
        <li><v-icon color="green">mdi-check</v-icon> Azeite de Oliva</li>
      </ul>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedTaste = ref("Margherita");
const rating = ref(4);
const description = ref(
  "Uma pizza clássica italiana com molho de tomate, queijo mussarela, manjericão fresco e azeite de oliva."
);
const pizzaTastes = ref([
  "Margherita",
  "Pepperoni",
  "Havaiana",
  "Quatro Queijos",
  "Calabresa",
]);
const quantity = ref(1);

const calculateSubtotal = () => {
  return quantity.value * 89.9; // Custo de cada pizza
};

const incrementQuantity = () => {
  quantity.value += 1;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  gap: 25px;
  padding: 20px !important;
  max-width: 500px;
}
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.star-rating {
  display: flex;
  gap: 4px;
}

.star {
  font-size: 20px;
  color: #f8d100;
}

.star.filled {
  color: #ffcc00;
}

.white-bg {
  background-color: #fff;
  border: 1px solid #fff;
}

/* Removendo borda e sombra padrão do v-card */
.v-card {
  border: none;
  box-shadow: none;
}

.add-pizzas {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;
  button {
    border-radius: 50% !important;
    height: 43px;
    width: 45px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0;
    margin: 0;
  }
  .subtotal {
    margin-left: auto !important;
  }
}
.pizza-items {
  padding: 10px 20px;

  li {
    list-style: none;
    margin: 20px 0;
  }
}
.orange-button {
  button {
    border-radius: 20px;
    padding: 20px;
    height: 40px;
  }
}
.subtotal {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
</style>
