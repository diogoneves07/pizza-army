<template>
  <div class="container">
    <p style="text-align: center">
      <img src="@/assets/imagens/pizza army.png" style="max-height: 100px" />
    </p>

    <v-tabs
      v-model="tab"
      color="#1F6D29"
      slider-color="#1F6D29"
      align-tabs="start"
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
        <v-form
          @submit.prevent="addProduct"
          style="
            display: grid;
            padding: 10px 30px 10px 30px;
            gap: 25px;
            text-align: center;
          "
        >
          <v-text-field
            v-model="newProduct.name"
            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            v-model="newProduct.price"
            label="Preço"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="newProduct.description"
            label="Descrição"
            required
          ></v-text-field>

          <div style="text-align: center" v-if="isSubmitting">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>

          <div v-if="successMessage" style="color: #1f6d29">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" style="color: rgb(205, 1, 1)">
            {{ errorMessage }}
          </div>

          <v-btn :disabled="isSubmitting" type="submit" color="primary"
            >Adicionar Produto</v-btn
          >
        </v-form>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

const products = ref<Product[]>([]);
const tab = ref(1);
const loadProducts = async () => {
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
};

const removeProduct = async (productId: string) => {
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
};

const newProduct = ref<Product>({
  id: "",
  name: "",
  price: "",
  description: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const addProduct = async () => {
  if (newProduct.value.name && newProduct.value.price) {
    isSubmitting.value = true;

    try {
      const response = await fetch("/api/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct.value),
      });
      if (response.ok) {
        const data = await response.json();
        products.value.push(data);
        newProduct.value = {
          id: "",
          name: "",
          price: "",
          description: "",
        };
        isSubmitting.value = false;
        successMessage.value = "Produto adicionado com sucesso!";
        errorMessage.value = "";
      } else {
        isSubmitting.value = false;
        successMessage.value = "";
        errorMessage.value = "Erro ao adicionar o produto.";
      }
    } catch (error) {
      isSubmitting.value = false;
      successMessage.value = "";
      errorMessage.value = "Erro ao adicionar o produto.";
    }
  } else {
    isSubmitting.value = false;
    successMessage.value = "";
    errorMessage.value = "Por favor, preencha o nome e o preço do produto.";
  }
};

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
