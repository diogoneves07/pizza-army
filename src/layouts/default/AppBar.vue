<template>
  <v-app>
    <v-app-bar app class="v-app-bar--shadow" style="padding: 10px 25px">
      <v-btn
        icon
        @click="toggleDrawer"
        style="border-radius: 5px; width: 150px"
      >
        <span class="mr-2">Comprar</span>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-toolbar-title class="text-center flex-grow-1">
        Nome da Empresa
      </v-toolbar-title>
      <div class="d-flex align-center">
        <span class="mr-7" style="position: relative; left: -40px"
          >A segunda pizza com 20% OFF</span
        >
        <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <div style="display: flex; gap: 30px; padding: 10px">
        <MosaicContainer></MosaicContainer>
        <PizzaContainer></PizzaContainer>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import PizzaContainer from "@/components/PizzaContainer.vue";
import MosaicContainer from "@/components/MosaicContainer.vue";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
/* Adicione uma sombra na parte inferior */
.v-app-bar--shadow {
  box-shadow: none !important;
}

/* Estilo para botão quadrado */
.v-btn--square:not(.v-btn--disabled):not(.v-btn--text):not(.v-btn--fab) {
  border-radius: 0;
  padding-left: 16px;
  padding-right: 16px;
}

/* Ajuste o posicionamento dos elementos */
.v-toolbar__title {
  flex-grow: 1;
}

.d-flex.align-center {
  align-items: center;
}
</style>
