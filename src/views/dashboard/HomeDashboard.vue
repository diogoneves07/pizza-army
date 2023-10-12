<template>
  <div class="container">
    <p style="text-align: center">
      <img src="@/assets/imagens/pizza army.png" style="max-height: 100px" />
    </p>

    <v-tabs
      v-model="tab"
      color="#1F6D29"
      slider-color="#1F6D29"
      align-tabs="center"
      style="
        background-color: rgba(254, 254, 254, 0.6);
        border-radius: 10px 10px 0px 0px;
      "
    >
      <v-tab :value="1">Lista de produtos</v-tab>
      <v-tab :value="2">Adicionar novo produto</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        :value="1"
        style="max-width: 700px; width: 90vw; background-color: white"
      >
        <v-table fixed-header height="500px">
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">Preço</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <v-btn icon class="btn" @click="() => removeProduct(item.id)">
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item
        :value="2"
        style="
          max-width: 700px;
          width: 90vw;
          background-color: white;
          height: 500px;
        "
      >
        <AddProduct :on-product-added="handleOnProductAdded"></AddProduct>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import AddProduct from "./_AddProduct.vue";
import { Product } from "@/types/product";

const products = ref<Product[]>([]);
const tab = ref(1);

function handleOnProductAdded(p: Product) {
  products.value.push(p);
}

async function loadProducts() {
  try {
    const response = await fetch("/api/produtos");
    if (response.ok) {
      const data = await response.json();
      products.value = data;
    } else {
      console.error("Erro ao buscar produtos:", response.statusText);
    }
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

async function removeProduct(productId: string) {
  try {
    const response = await fetch(`/api/produtos/${productId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      products.value = products.value.filter(
        (product) => product.id !== productId
      );
    } else {
      console.error("Erro ao remover o produto:", response.statusText);
    }
  } catch (error) {
    console.error("Erro ao remover o produto:", error);
  }
}

onMounted(() => {
  loadProducts();
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100vw;
  background-image: url("@/assets/imagens/pexels-narda-yescas-1566837.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}
th,
td {
  padding: 20px !important;
}
</style>
