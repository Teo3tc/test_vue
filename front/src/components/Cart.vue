<template>
  <div>
    <h3>Number of item in cart :{{main.nbrItem}}</h3>
    <button v-if="main.nbrItem != 0" @click="showCart">SEE CART</button>
    <div v-if="show">
      <ItemCart v-for="(item,index) in cartItem" 
        :label='item.label' 
        :price='item.price' 
        :index="index" 
        :key="index"
        @remove="cartItem.splice(index, 1)"
        />
      <p>Total : {{main.total / 100}}€</p>
    </div>
  </div>
</template>

<script >
import { ref } from 'vue'
import { useMainStore } from '../stores/main'
import ItemCart from './ItemCart.vue'

export default {
    name:'Cart',
    components: {
    ItemCart,
    },
    props: {
        index: Number,
    },
  setup(props) {
    const main = useMainStore()
    const show = ref(false)
    const cartItem = ref(main.panier)
   
    const showCart = ()=>{
      show.value = !show.value
    }
    return{main,showCart,show,cartItem}
  },
}
</script>


<style>

</style>
