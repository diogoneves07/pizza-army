<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h2>Carrinho de Compras</h2>
          <v-divider></v-divider>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="item in cart" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-menu offset-y>
                    <template #activator="{ on }">
                      <v-btn v-on="on" text>
                        {{ item.quantity }}
                        <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-btn icon @click="addToCart(item)">Adicionar</v-btn>
                        <v-btn icon @click="removeFromCart(item)"
                          >Remover</v-btn
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item-action>
                <v-list-item-action>
                  {{ (item.quantity * 89.9) | currency("BRL") }}
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cart = ref([]);

const addToCart = (pizza) => {
  const existingItem = cart.value.find((item) => item.id === pizza.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ ...pizza, quantity: 1 });
  }
};

const removeFromCart = (pizza) => {
  const index = cart.value.findIndex((item) => item.id === pizza.id);

  if (index !== -1) {
    if (cart.value[index].quantity > 1) {
      cart.value[index].quantity--;
    } else {
      cart.value.splice(index, 1);
    }
  }
};
</script>
