<template>
  <v-card max-width="1200" class="mx-auto mt-15">
    <v-container>
      <v-row>
        <v-col v-for="product in products" :key="product.id" cols="3">
          <v-card class="w-100 h-100">
            <v-card-text>
              {{ product.id }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import instance from "../api/http.js";

export default {
  name: "Products",
  data() {
    return {
      products: []
    }
  },
  mounted() {
    instance.get('products').then(response => {
      this.products = response.data
    })
  }
}
</script>

<style scoped>

</style>