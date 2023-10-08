<template>
  <v-card class="pa-4 container" outlined>
    <div class="title-container">
      <h2 style="font: normal normal normal 32px/40px Bebas Neue">
        {{ selectedTaste }}
      </h2>
      <div style="display: flex; align-items: center; gap: 20px">
        <v-rating
          v-model="rating"
          background-color="transparent"
          color="#ffb521"
          size="24"
          disabled
        ></v-rating>
        <span style="color: #ffb521; font-family: 'Bebas Neue'"
          >42 AVALIAÇÕES</span
        >
      </div>
    </div>
    <p class="mb-1">{{ description }}</p>
    <div class="flex items-center justify-between mb-4">
      Sabor
      <v-select
        v-model="selectedTaste"
        :items="pizzaTastes"
        outlined
        dense
        class="dropdown-tastes"
        base-color="#ccc"
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
          <span>Subtotal:&nbsp;</span
          ><b>R$ {{ calculateSubtotal().toFixed(2) }}</b>
        </div>
      </div>
    </div>
    <div class="orange-button">
      <v-btn color="#ffb521" dark block> ADICIONAR AO CARRINHO </v-btn>
    </div>
    <div class="pizza-items">
      <ul>
        <li><v-icon color="green">mdi-check</v-icon> Queijos importados</li>
        <li>
          <v-icon color="green">mdi-check</v-icon> Catupiry de primeira
          qualidade
        </li>
        <li><v-icon color="green">mdi-check</v-icon> Bastante recheio</li>
        <li><v-icon color="green">mdi-check</v-icon> Forno à lenha</li>
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
  gap: 30px 20px;
  padding: 20px !important;
  flex: 0.5;
  align-content: start;
  min-width: 500px;
  @media only screen and (max-width: 900px) {
    max-width: 500px;
    min-width: 0px;
    align-self: center;
    gap: 10px;
    padding: 5px !important;
  }
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

/* Removendo borda e sombra padrão do v-card */
.v-card {
  border: none;
  box-shadow: none;
}
.add-pizzas {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 30px;
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
  padding: 0px 20px;

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
  display: flex;
  align-items: center;
}
</style>
