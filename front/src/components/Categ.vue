<template>
    <section className=" grid-full-fluid rgp-60 ">
        <h3>{{props.label}} ({{props.id}})</h3>
        <div v-if='main.loading'>
            Loading...
        </div>
        <div v-else>
            <Product v-for="item in product.filter((el)=>el.category_id === props.id)" 
                :key="item.id"
                :label='item.label'
                :id='item.id'
                :price='item.price'
                :category_id="item.category_id"
                >
            </Product>
        </div>
    </section>
</template>

<script >
import {ref } from 'vue'
import { useMainStore } from '../stores/main'
import Product from './Product.vue'
export default {
    components: {
    Product
    },
    name:'Categ',
    props: {
        label: String,
        id: String
    },
    setup(props) {
        const main = useMainStore()
        const product = ref(main.products)
        return{props,main,product}
    },
}
</script>
