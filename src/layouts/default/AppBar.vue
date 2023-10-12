<template>
  <v-app-bar app class="v-app-bar--shadow app-bar">
    <v-btn
      v-if="!isScreenSmall"
      icon
      @click="toggleDrawer"
      class="btn menu-btn"
    >
      <span class="mr-2">Comprar</span>
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn v-else icon class="btn menu-btn-buguer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title class="text-center flex-grow-1 toolbar">
      <span class="oo"> Pizza Army</span>
    </v-toolbar-title>
    <div class="d-flex align-center">
      <span v-if="!isScreenSmall" class="mr-7 promotion">
        A segunda pizza com
        <strong style="color: #1f6d29">20% OFF</strong>
      </span>
      <v-btn icon class="btn">
        <img src="@/assets/imagens/person_black_24dp (3).png" />
      </v-btn>
      <v-btn icon class="btn">
        <img src="@/assets/imagens/shopping_cart_black_24dp (2).png" />
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const drawer = ref(false);
const isScreenSmall = ref(false);

function handleResize() {
  isScreenSmall.value = window.matchMedia("(max-width: 900px)").matches;
}

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
.app-bar {
  padding: 10px 15px;
  position: relative !important;
}
.menu-btn {
  border-radius: 5px !important;
  width: 120px !important;
  span {
    font-size: 16px;
    font-weight: 500;
    text-transform: none;
  }
}
.menu-btn-buguer {
  border-radius: 5px;
  position: relative;
  left: 20px;
  @media only screen and (max-width: 900px) {
    position: relative;
    left: -5px;
  }
}
.toolbar {
  color: #1f6d29;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.promotion {
  position: relative;
  left: -40px;
}
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

.v-app-bar--shadow {
  box-shadow: none !important;
}

.v-btn--square:not(.v-btn--disabled):not(.v-btn--text):not(.v-btn--fab) {
  border-radius: 0;
  padding-left: 16px;
  padding-right: 16px;
}

.v-toolbar__title {
  flex-grow: 1;
}

.d-flex.align-center {
  align-items: center;
}
.btn {
  img {
    height: 25px;
  }
}
</style>
