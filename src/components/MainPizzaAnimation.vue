<template>
  <div class="container" ref="animationContainer">
    <div ref="ingredientsLeftSide">
      <div style="display: flex; justify-content: center">
        <img
          src="@/assets/imagens/ingrediente (18).png"
          alt="Pizza Ingredient"
          style="top: 0px; left: 80px"
        />
      </div>
      <div
        style="display: flex; margin-top: 100px; justify-content: space-between"
      >
        <img
          src="@/assets/imagens/ingrediente (17).png"
          alt="Pizza Ingredient"
          style="top: 220px; left: 20px"
        />
        <img
          src="@/assets/imagens/ingrediente (16).png"
          alt="Pizza Ingredient"
          style="top: 260px; left: 180px"
        />
        <img
          src="@/assets/imagens/ingrediente (19).png"
          alt="Pizza Ingredient"
          style="top: 220px; left: 340px"
        />
      </div>
      <div
        style="display: flex; justify-content: space-around; margin-top: 100px"
      >
        <img
          src="@/assets/imagens/ingrediente (20).png"
          alt="Pizza Ingredient"
          style="top: 420px; left: 120px"
        />
        <img
          src="@/assets/imagens/ingrediente (15).png"
          alt="Pizza Ingredient"
          style="top: 420px; left: 320px"
        />
      </div>
      <div style="display: flex; justify-content: end; margin-top: 50px">
        <img
          src="@/assets/imagens/ingrediente (14).png"
          alt="Pizza Ingredient"
          style="top: 520px; left: 290px"
        />
      </div>
    </div>
    <div class="pizza-container">
      <div class="pizza-text" ref="pizzaText" style="opacity: 0">
        <v-card class="pizza-text-card" flat>
          <strong class="pizza-text-card-title">
            DESCUBRA O SABOR DA TRADIÇÃO
          </strong>
          <p class="pizza-text-desc">
            Com receitas transmitidas à gerações, ingredientes selecionados e
            forno a lenha, garantimos uma experiência gastronômica memorável.
          </p>
        </v-card>
      </div>
      <div style="width: 350px">
        <img
          ref="pizzaImg"
          class="pizza-img"
          src="@/assets/imagens/pngegg (7).png"
          alt="Pizza
      Ingredient"
        />
      </div>
      <div
        class="pizza-ingredient-main-list"
        ref="pizzaIngredientMainList"
        style="opacity: 0; width: 600px"
      >
        <v-list style="position: relative; left: -170px; top: -30px">
          <v-list-item>
            <v-list-item-title class="headline mb-3 pizza-item">
              <img src="@/assets/imagens/local_pizza_black_24dp.png" />

              Queijos importados
            </v-list-item-title>
            <v-divider></v-divider>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="headline mb-3 pizza-item">
              <img src="@/assets/imagens/local_pizza_black_24dp.png" />

              Catupiry de primeira qualidade
            </v-list-item-title>
            <v-divider></v-divider>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="headline mb-3 pizza-item">
              <img src="@/assets/imagens/local_pizza_black_24dp.png" />

              Bastante recheio
            </v-list-item-title>
            <v-divider></v-divider>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="headline mb-3 pizza-item">
              <img src="@/assets/imagens/local_pizza_black_24dp.png" />

              Forno à lenha
            </v-list-item-title>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <div ref="ingredientsRightSide">
      <div
        style="display: flex; margin-top: 30px; justify-content: space-between"
      >
        <img
          src="@/assets/imagens/ingrediente (11).png"
          alt="Pizza Ingredient"
          style="top: 50px; right: 350px"
        />
        <img
          src="@/assets/imagens/ingrediente (12).png"
          alt="Pizza Ingredient"
          style="top: 0px; right: 100px"
        />
      </div>
      <div
        style="display: flex; justify-content: space-between; margin-top: 100px"
      >
        <img
          src="@/assets/imagens/ingrediente (10).png"
          alt="Pizza Ingredient"
          style="height: 200px; max-height: 400px; top: 200px; right: 200px"
        />
        <img
          src="@/assets/imagens/ingrediente (13).png"
          alt="Pizza Ingredient"
          style="height: 50px; top: 220px; right: 100px"
        />
      </div>
      <div
        style="display: flex; justify-content: space-around; margin-top: 50px"
      >
        <img
          src="@/assets/imagens/ingrediente (1).png"
          alt="Pizza Ingredient"
          style="height: 150px; max-height: 400px; top: 430px; right: 340px"
        />
        <div>
          <img
            src="@/assets/imagens/ingrediente (8).png"
            alt="Pizza Ingredient"
            style="top: 430px; right: 120px"
          />
          <img
            src="@/assets/imagens/ingrediente (9).png"
            alt="Pizza Ingredient"
            style="top: 360px; right: 60px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let ingredientsLeftSide = ref<HTMLDivElement | null>(null);
let ingredientsRightSide = ref<HTMLDivElement | null>(null);
let pizzaImg = ref<HTMLImageElement | null>(null);
let animationContainer = ref<HTMLDivElement | null>(null);
let pizzaIngredientMainList = ref<HTMLDivElement | null>(null);
let pizzaText = ref<HTMLDivElement | null>(null);

function moveImagesToPizza(
  imgs: HTMLImageElement[] | HTMLCollectionOf<HTMLImageElement>
) {
  const pizzaElement = pizzaImg.value;
  const pizzaPosition = pizzaElement
    ? pizzaElement.getBoundingClientRect()
    : null;

  if (!pizzaPosition) return;

  const pizzaCenterX = pizzaPosition.left + pizzaPosition.width / 2;
  const pizzaCenterY = pizzaPosition.top + pizzaPosition.height / 2;

  // Move cada imagem em direção ao centro da pizza
  Array.from(imgs).forEach((image) => {
    const imagePosition = image.getBoundingClientRect();
    const imageCenterX = imagePosition.left + imagePosition.width / 2;
    const imageCenterY = imagePosition.top + imagePosition.height / 2;

    const translateX = pizzaCenterX - imageCenterX;
    const translateY = pizzaCenterY - imageCenterY;
    image.style.transition = "1s all";
    image.style.opacity = "0";
    image.style.transform = ` translate(${translateX}px, ${translateY}px)`;
  });
}

function handleIntersection(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      if (
        ingredientsLeftSide.value &&
        ingredientsRightSide.value &&
        pizzaImg.value
      ) {
        moveImagesToPizza(
          ingredientsLeftSide.value.getElementsByTagName("img")
        );
        moveImagesToPizza(
          ingredientsRightSide.value.getElementsByTagName("img")
        );
        pizzaImg.value.classList.add("pizza");

        setTimeout(() => {
          if (pizzaIngredientMainList.value && pizzaText.value) {
            pizzaText.value.style.opacity = "1";
            pizzaIngredientMainList.value.style.opacity = "1";
          }
        }, 1000);
      }
    }
  });
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.9,
  });

  if (animationContainer.value) {
    observer.observe(animationContainer.value);
  }
});
</script>

<style scoped lang="scss">
.container {
  padding: 5%;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 550px;
  img {
    max-height: 138px;
  }
  @media only screen and (max-width: 900px) {
    padding: 1%;
    justify-content: center;

    display: flex;
    overflow: visible;
    height: 180vh;

    img {
      max-height: 50px;
    }
  }
  > div {
    flex: 1;
    img {
      position: absolute;
    }
  }
}

.pizza-img {
  height: 400px;
  max-height: unset !important;
  z-index: 99999999;
  position: relative !important;
  left: -100px;

  @media only screen and (max-width: 900px) {
    max-height: 250px !important;
  }
}
.center-element {
  transition: transform 3s ease;
}

@keyframes centerAnimation {
  100% {
    top: 30vh;
    left: 50%;
    transform: translate(-50%, 30vh);
    opacity: 0;
  }
}

@keyframes pizzaAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.center-animation-delay {
  animation-delay: 1.5s;
}

.pizza {
  animation: pizzaAnimation 1.5s ease-in-out forwards;
}

.pizza-text-card {
  margin: 0 auto;
  padding: 0px;
  text-align: left;
  font-family: "Bebas Neue";
  width: 500px;
  font-size: 16px !important;
}

.pizza-text-card-title {
  font-size: 2.8rem;
  margin-bottom: 10px;
  text-overflow: unset !important;
  word-wrap: break-word;
  display: inline-block;
  width: 100%;
  line-height: 50px;
  width: 450px;
}
.pizza-text-desc {
  width: 300px;
  font-size: 1.1rem;
  margin-top: 10px;
}

.pizza-ingredient-main-list,
.pizza-text {
  transition: all 3s;
}

.pizza-container {
  display: flex;

  align-items: start;
  align-content: start;
  width: 100vw;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
}
.pizza-item {
  margin-top: 30px;
  padding: 10px 150px;
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    position: static !important;
  }
}
</style>
