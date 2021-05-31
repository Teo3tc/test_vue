<template>
    <p>{{props.label}} {{props.price/100}}€ ({{props.category_id}})</p>
    <button @click='addInPanier'>Add</button>
</template>

<script >
import {ref } from 'vue'
import { useMainStore } from '../stores/main'

export default {
    name:'Product',
    props: {
        label: String,
        id: String,
        price:Number,
        category_id:String
    },
    setup(props) {
      const main = useMainStore()

      const addInPanier = ()=>{
          main.addInPanier(props)
      }
      return{props,addInPanier}
    },
}
</script>
