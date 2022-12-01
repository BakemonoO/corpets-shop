<template>
<div class="shop__filter">
  <shop-filter-rate/>
 <shop-filter-checkbox
 :maded="maded"
 >
  <template v-slot:blockName>Страна</template>
 </shop-filter-checkbox>

 <shop-filter-checkbox
 :maded="sized"
 >
  <template v-slot:blockName>Размер</template>
 </shop-filter-checkbox>
 </div>
  
  
</template>

<script>
import ShopFilterRate from '@/components/UI/ShopFilterRate.vue'

  export default {
  components: { ShopFilterRate  },
    name: 'shop-filter',

    props: {
      maded: Array,
      sized: Array
    },
    
  }
</script>

<style lang="scss" scoped>


</style>