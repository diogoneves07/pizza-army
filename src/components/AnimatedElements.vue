<template>
  <div class="container" ref="animationContainer">
    <div ref="ingredientsLeftSide">
      <div style="display: flex; justify-content: center">
        <img
          src="@/assets/imagens/ingrediente (18).png"
          alt="Pizza Ingredient"
          style="top: 10vh; left: 10vw"
        />
      </div>
      <div
        style="display: flex; margin-top: 100px; justify-content: space-between"
      >
        <img
          src="@/assets/imagens/ingrediente (17).png"
          alt="Pizza Ingredient"
          style="top: 35vh; left: 3vw"
        />
        <img
          src="@/assets/imagens/ingrediente (16).png"
          alt="Pizza Ingredient"
          style="top: 40vh; left: 12vw"
        />
        <img
          src="@/assets/imagens/ingrediente (19).png"
          alt="Pizza Ingredient"
          style="top: 35vh; left: 25vw"
        />
      </div>
      <div
        style="display: flex; justify-content: space-around; margin-top: 100px"
      >
        <img
          src="@/assets/imagens/ingrediente (20).png"
          alt="Pizza Ingredient"
          style="top: 60vh; left: 10vw"
        />
        <img
          src="@/assets/imagens/ingrediente (15).png"
          alt="Pizza Ingredient"
          style="top: 60vh; left: 22vw"
        />
      </div>
      <div style="display: flex; justify-content: end; margin-top: 50px">
        <img
          src="@/assets/imagens/ingrediente (14).png"
          alt="Pizza Ingredient"
          style="top: 70vh; left: 20vw"
        />
      </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <img
        ref="pizzaImg"
        class="pizza-img"
        src="@/assets/imagens/pngegg (7).png"
        alt="Pizza
      Ingredient"
      />
    </div>
    <div ref="ingredientsRightSide">
      <div
        style="display: flex; margin-top: 30px; justify-content: space-between"
      >
        <img
          src="@/assets/imagens/ingrediente (11).png"
          alt="Pizza Ingredient"
          style="top: 15vh; left: 65vw"
        />
        <img
          src="@/assets/imagens/ingrediente (12).png"
          alt="Pizza Ingredient"
          style="top: 10vh; left: 85vw"
        />
      </div>
      <div
        style="display: flex; justify-content: space-between; margin-top: 100px"
      >
        <img
          src="@/assets/imagens/ingrediente (10).png"
          alt="Pizza Ingredient"
          style="height: 200px; max-height: 400px; top: 30vh; left: 70vw"
        />
        <img
          src="@/assets/imagens/ingrediente (13).png"
          alt="Pizza Ingredient"
          style="height: 50px; top: 30vh; left: 90vw"
        />
      </div>
      <div
        style="display: flex; justify-content: space-around; margin-top: 50px"
      >
        <img
          src="@/assets/imagens/ingrediente (1).png"
          alt="Pizza Ingredient"
          style="height: 150px; max-height: 400px; top: 60vh; left: 65vw"
        />
        <div>
          <img
            src="@/assets/imagens/ingrediente (8).png"
            alt="Pizza Ingredient"
            style="top: 58vh; left: 80vw"
          />
          <img
            src="@/assets/imagens/ingrediente (9).png"
            alt="Pizza Ingredient"
            style="top: 50vh; left: 85vw"
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

function moveElemensToThePizza(element: HTMLDivElement) {
  for (const el of Array.from(element.getElementsByTagName("img"))) {
    el.classList.add("center-element");
  }
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
        moveElemensToThePizza(ingredientsLeftSide.value);
        moveElemensToThePizza(ingredientsRightSide.value);
        pizzaImg.value.classList.add("pizza");
        console.log(animationContainer.value);
      }
    }
  });
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.6,
  });

  if (animationContainer.value) {
    observer.observe(animationContainer.value);
  }
});
</script>

<style scoped lang="scss">
.container {
  padding: 5%;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 120vh;
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
      max-height: 80px;
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
  height: 340px !important;
  max-height: 500px !important;
  top: 35vh;
  @media only screen and (max-width: 900px) {
    max-height: 250px !important;
    top: 100vh;
  }
}
.center-element {
  transition: transform 3s ease;
  animation: centerAnimation 1.5s ease-in-out forwards;
}

@keyframes centerAnimation {
  100% {
    top: 80%;
    left: 50%;
    transform: translate(-80%, -50%);
    opacity: 0;
  }
}

@keyframes pizzaAnimation {
  100% {
    top: 50vh;
    transform: rotate(180deg);
  }
}

.center-animation-delay {
  animation-delay: 1.5s;
}

.pizza {
  animation: pizzaAnimation 1.5s ease-in-out forwards;
  z-index: 99999999;
}
</style>
