<template>
  <Cart/>
  <main id="example-1">
    <Categ v-for="item in main.categorie" :key="item.id" :id="item.id" :label="item.label">
    </Categ>
  </main>
</template>

<script >
import { onMounted,ref } from 'vue'
import { useMainStore } from './stores/main'
import Categ from './components/Categ.vue'
import Cart from './components/Cart.vue'
export default {
 components: {
    Categ,
    Cart
  },
  setup() {
    const main = useMainStore()
    async function fetchdData(){
      await main.fetcheCateg('http://localhost:3200/categories')
      await main.fetcheProduct('http://localhost:3200/products')
    }
    onMounted(()=>{
      fetchdData()
    })
    return{main}
  },
}
</script>


<style>

</style>
