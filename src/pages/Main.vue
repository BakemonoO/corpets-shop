<template>
  <app-recomendation/>
  
  <app-recomend-item
  :corpets="corpetsNew"
  ><h1>Новинки</h1></app-recomend-item>

  <app-recomend-item
  :corpets="corpetsDiscount"
  ><h1>Скидки</h1></app-recomend-item>
</template>

<script>
    import AppRecomendation from '@/components/AppRecomendation.vue'
    import AppRecomendItem from '@/components/AppRecomendItem.vue'
  export default {
    components: { AppRecomendation, AppRecomendItem },
    data() {
      return {
        corpetsBase: [
        {title: 'ASTER Q893A LVIZON LVIZON', id: 1, madeIn: 'Kazakhstan', discount: 30, price: 165000, size: '60x100', new: false, reviews: 2, rating: 3 },
        {title: 'ASTER Q921A LVIZON LVIZON', id: 2, madeIn: 'Kazakhstan', discount: 20, price: 190000, size: '60x100', new: false, reviews: 6, rating: 4 },
        {title: 'ASTER Q870B LVIZON LVIZON', id: 3, madeIn: 'Kazakhstan', discount: 10, price: 120000, size: '60x100', new: false, reviews: 4, rating: 5 },
        {title: 'ASTER Q770G LVIZON LVIZON', id: 4, madeIn: 'Kazakhstan', discount: 15, price: 130000, size: '60x100', new: false, reviews: 5, rating: 2 },
        {title: 'ASTER Q890T LVIZON LVIZON', id: 5, madeIn: 'Kazakhstan', discount: 25, price: 170000, size: '60x100', new: false, reviews: 6, rating: 3 },
        {title: 'ASTER B333A LVIZON LVIZON', id: 6, madeIn: 'Kazakhstan', discount: 35, price: 200000, size: '60x100', new: false, reviews: 12, rating: 4 },
        {title: 'ASTER B340B LVIZON LVIZON', id: 7, madeIn: 'Kazakhstan', discount: 0, new: true, price: 180000, size: '60x100', reviews: 11, rating: 3 },
        {title: 'ASTER W893E LVIZON LVIZON', id: 8, madeIn: 'Kazakhstan', discount: 0, new: true, price: 220000, size: '60x100', reviews: 0, rating: 2 },
        {title: 'ASTER N220P LVIZON LVIZON', id: 9, madeIn: 'Kazakhstan', discount: 0, new: true, price: 100000, size: '60x100', reviews: 19, rating: 5 },
        {title: 'ASTER N400P LVIZON LVIZON', id: 10, madeIn: 'Kazakhstan', discount: 0, new: true, price: 140000, size: '60x100', reviews: 15, rating: 1 },
        {title: 'ASTER N521B LVIZON LVIZON', id: 11, madeIn: 'Kazakhstan', discount: 0, new: true, price: 155000, size: '60x100', reviews: 4, rating: 3 },
        {title: 'ASTER N892A LVIZON LVIZON', id: 12, madeIn: 'Kazakhstan', discount: 0, new: true, price: 160000, size: '60x100', reviews: 1, rating: 4 },
      ]
      }
    },
    
  computed: {

    corpetsDiscount() {
     return this.corpetsBase.filter(x => x.discount > 0)
    },

    corpetsNew() {
     return this.corpetsBase.filter(x => x.new === true)
    }
}
      
  }
</script>

<style lang="scss" scoped>

</style>