<template>
  <main id="example-1">
    <Categ v-for="item in main.categorie" :key="item.id" :id="item.id" :label="item.label">
    </Categ>
  </main>
</template>

<script >
import { onMounted } from 'vue'
import { useMainStore } from './stores/main'
import Categ from './components/Categ.vue'

export default {
 components: {
    Categ
  },
  setup() {
    const main = useMainStore()
    function addCateg(){
      main.fetcheCateg('http://localhost:3200/categories')
    }
    function addProduct(){
            main.fetcheProduct('http://localhost:3200/products')
    }
    onMounted(()=>{
      addCateg()
      addProduct()
    })
    return{main}
  },
}
</script>


<style>

</style>
