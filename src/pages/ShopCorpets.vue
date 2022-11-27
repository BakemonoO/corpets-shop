<template>
  <div class="routes__way">
    <router-link class="router__link_item" style="color: gray;" to="/">Главная /</router-link>
    <router-link class="router__link_item" style="color: #618C78" to="/shop-corpets">Ковры</router-link>
  </div>

  <div class="shop">
    <shop-filter></shop-filter>
    <shop-list></shop-list>
  </div>
</template>

<script>
import ShopFilter from '@/components/ShopFilter.vue'
import ShopList from '@/components/ShopList.vue'
  export default {
  components: { ShopFilter, ShopList },
    
  }
</script>

<style lang="scss" scoped>

.routes__way {
  display: flex;
  margin-top: 30px;
  margin-left: 80px;
  .router__link_item {
    margin-right: 6px;
  }
}

.shop {
  display: flex;
  justify-content: space-between;
  margin: 25px 80px;
}

</style>