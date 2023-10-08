<template>
  <v-app>
    <v-app-bar app class="v-app-bar--shadow" style="padding: 10px 15px">
      <v-btn
        v-if="!isScreenSmall"
        icon
        @click="toggleDrawer"
        style="border-radius: 5px; position: relative; left: 60px"
        class="btn"
      >
        <span
          class="mr-2"
          style="font-size: 16px; font-weight: 500; text-transform: none"
          >Comprar</span
        >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn
        v-else
        icon
        style="border-radius: 5px; position: relative; left: 20px"
        class="btn"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title
        class="text-center flex-grow-1"
        style="
          color: #1f6d29;
          font-size: 24px;
          font-weight: 500;
          text-transform: uppercase; ;
        "
      >
        Pizza Army
      </v-toolbar-title>
      <div class="d-flex align-center">
        <span
          v-if="!isScreenSmall"
          class="mr-7"
          style="position: relative; left: -40px"
        >
          A segunda pizza com
          <strong style="color: #1f6d29">20% OFF</strong>
        </span>
        <v-btn icon class="btn">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon class="btn">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <div class="all-center">
      <v-main class="all-center-main">
        <div class="products">
          <MosaicContainer></MosaicContainer>
          <PizzaContainer></PizzaContainer>
        </div>
        <UsersRatingCard></UsersRatingCard>
      </v-main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import PizzaContainer from "@/components/PizzaContainer.vue";
import MosaicContainer from "@/components/MosaicContainer.vue";
import UsersRatingCard from "@/components/UsersRatingCard.vue";

const drawer = ref(false);
const isScreenSmall = ref(false);

const handleResize = () => {
  isScreenSmall.value = window.matchMedia("(max-width: 900px)").matches;
};

function toggleDrawer() {
  drawer.value = !drawer.value;
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.products {
  display: flex;
  gap: 30px;
  padding: 0px;
  margin: 20px;

  @media only screen and (max-width: 900px) {
    align-content: start;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
.all-center {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  align-content: start;
  .all-center-main {
    flex: 1;
    max-width: 2000px;
  }
}
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
.btn {
  font-size: 20px;
}
</style>
