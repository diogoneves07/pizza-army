<template>
  <v-app>
    <div class="center-content">
      <v-main class="center-content-size">
        <div class="products">
          <MosaicContainer></MosaicContainer>
          <PizzaContainer></PizzaContainer>
        </div>
        <MainPizzaAnimation></MainPizzaAnimation>
        <UsersRatingCard></UsersRatingCard>
      </v-main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import PizzaContainer from "@/components/PizzaContainer.vue";
import MosaicContainer from "@/components/MosaicContainer.vue";
import UsersRatingCard from "@/components/UsersRatingCard.vue";
import MainPizzaAnimation from "@/components/MainPizzaAnimation.vue";
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
.center-content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  align-content: start;
  .center-content-size {
    flex: 1;
    max-width: 2000px;
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
  font-size: 20px;
}
</style>
