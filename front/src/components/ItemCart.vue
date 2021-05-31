<template>
      <p >
        {{props.label}} {{props.price /100}}€ <button @click="remove">REMOVE</button>
      </p>
</template>

<script >
import { useMainStore } from '../stores/main'

export default {
    name:'ItemCart',
    props: {
        index: Number,
        label:String,
        price:Number
    },
  setup(props,{emit}) {
    const main = useMainStore()
    const remove = ()=>{
        emit('remove')
        main.remove(props)
    }
    return{main,remove,props}
  },
}
</script>


<style>

</style>
