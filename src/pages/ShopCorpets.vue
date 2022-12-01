<template>
  <div class="routes__way">
    <router-link class="router__link_item" style="color: gray;" to="/">Главная /</router-link>
    <router-link class="router__link_item" style="color: #618C78" to="/shop-corpets">Ковры</router-link>
  </div>

  <div class="shop">
    <shop-filter
    :maded="maded"
    :sized="sized"
    ></shop-filter>
    <shop-list
    :corpets="corpetsArray"
    ></shop-list>
  </div>
</template>

<script>
import axios from 'axios'
import ShopFilter from '@/components/ShopFilter.vue'
import ShopList from '@/components/ShopList.vue'
  export default {
  components: { ShopFilter, ShopList },
    
  data() {
      return {
        corpetsArray: [],
        maded: [],
        sized: []
      }
    },


  methods: {
    async getCorpetsItem() {
      const response = await axios.get('https://my-json-server.typicode.com/bakemonoo/corpets-shop/corpets/')
      this.corpetsArray = response.data

      this.corpetsArray.map(x => this.maded.push(x.madeIn))
      this.maded = this.maded.filter((x,i,arr) => i === arr.indexOf(x))

      this.corpetsArray.map(x => this.sized.push(x.size))
      this.sized = this.sized.filter((x,i,arr) => i === arr.indexOf(x))
    }
  },

  mounted() {
    this.getCorpetsItem()
  }
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
  margin: 25px 0 0 80px;
}

</style>