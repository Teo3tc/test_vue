<template>
    <section className=" grid-full-fluid rgp-60 ">
        {{props.label}}
        {{props.id}}

    </section>
</template>

<script >
import { onMounted,ref } from 'vue'
import { useMainStore } from '../stores/main'

export default {
    name:'Categ',
    props: {
        label: String,
        id: String
    },
    setup(props) {
        const main = useMainStore()
       
        onMounted(()=>{
        const filterProduct = main.products
        console.log(filterProduct)

        })   
       return{props}
    },
}
</script>
