import { defineStore } from 'pinia'
export const useMainStore = defineStore({
    // name of the store
    // it is used in devtools and allows restoring state
    id: 'main',
    // a function that returns a fresh state
    state: () => ({
        categorie: [],
        products:[],      
    }),
    // optional getters
    getters: {
      doubleCount() {
        return this.counter * 2
      },
      // use getters in other getters
      doubleCountPlusOne() {
        return this.doubleCount * 2 + 1
      },
    },
    // optional actions
    actions: {
         async fetcheCateg(url){            
            try{
                const response = await fetch(url);
                const res = await response.json();
                res.forEach(r => this.categorie.push(r))              
              
            }catch(e){
                console.log(e)
            }
        },
        async fetcheProduct(url){            
            try{
                const response = await fetch(url);
                const res = await response.json();
                this.products.push(res)             

              
            }catch(e){
                console.log(e)
            }
        },
    

    },
  })