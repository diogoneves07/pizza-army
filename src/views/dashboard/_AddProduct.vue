<template>
  <v-form @submit.prevent="addProduct" class="form">
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
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Product } from "@/types/product";

const props = defineProps<{ onProductAdded: (p: Product) => void }>();

const newProduct = ref<Product>({
  id: "",
  name: "",
  price: "",
  description: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function addProduct() {
  if (
    !newProduct.value.name ||
    !newProduct.value.price ||
    !newProduct.value.description
  ) {
    isSubmitting.value = false;
    successMessage.value = "";
    errorMessage.value = "Por favor, preencha os campos.";
    return;
  }

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
      props.onProductAdded(newProduct.value);

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
}
</script>

<style scoped lang="scss">
.form {
  display: grid;
  padding: 10px 30px 10px 30px;
  gap: 25px;
  text-align: center;
}
</style>
