import { defineStore } from 'pinia'
export const useMainStore = defineStore({
    // name of the store
    // it is used in devtools and allows restoring state
    id: 'main',
    // a function that returns a fresh state
    state: () => ({
        categorie: [],
        products:[],
        panier:[],
        nbrItem:0,
        loading:true, 
        total:0,

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
                res.forEach(r => this.products.push(r))                            
            }catch(e){
                console.log(e)
            }
            this.loading = false
        },
        addInPanier(item){
            this.total += item.price
            this.nbrItem += 1
            this.panier.push(item)
        },
        remove(item){
            this.nbrItem -=1
            this.total -= item.price
            this.panier.slice(item.index,1)
        }

    },
  })