<template>
<div class="loader"
v-if="corpetItem === null">
</div>

<div v-else>
<div class="routes__way">
  <router-link class="router__link_item" style="color: gray;" to="/">Главная /</router-link>
  <router-link class="router__link_item" style="color: gray;" to="/shop-corpets">{{corpetItem.category}} /</router-link>
  <p class="router__link_item" style="color: #618C78">{{corpetItem.title}}</p>
</div>

<div class="corpet__item">
<h1>{{ corpetItem.title }}</h1>
  <div class="corpet__item_status">
    <div class="item__rating">
      <img src="../img/StarTrue.svg" alt="звезды"
      width="15"
      height="15"
      v-for="star in corpetItem.rating"
      :key="star">
      <img 
      src="../img/Star.svg" alt="звезды"
      width="15"
      height="15"
      v-for="star in fullyStar"
      :key="star">
      <p>{{corpetItem.reviews}} отзывов</p>
    </div>
  </div>
</div>

<div class="corpet__item_date">
  <div class="images">
    <item-page-images
    :images="corpetImages"
    :item="corpetItem"
    />
    </div>
    <item-page-info
    :item="corpetItem"
    />
    </div>
  <div class="corpet__item_tabs">
    <item-page-tabs
    :item="corpetItem"
    />
  </div>
</div>

</template>

<script>
import axios from 'axios'
import ItemPageImages from '@/components/ItemPageImages.vue'
import ItemPageInfo from '@/components/ItemPageInfo.vue'
import ItemPageTabs from '@/components/ItemPageTabs.vue'
  export default {
  components: { ItemPageImages, ItemPageInfo, ItemPageTabs },

    data() {
      return {
        corpetItem: null,
        corpetImages: ['https://a.lmcdn.ru/product/M/P/MP002XU04DGD_14906471_2_v1.jpeg', 'https://a.lmcdn.ru/product/M/P/MP002XU04DGD_14906468_3_v1.jpeg', 'https://a.lmcdn.ru/product/M/P/MP002XU04DGD_14906469_4_v1.jpeg']
      }
    },
    
    methods: {
      async getCorpetItem() {
        const response = await axios.get(`https://my-json-server.typicode.com/bakemonoo/corpets-shop/corpets/${this.$route.params.id}`)
        this.corpetItem = response.data

      }
    },
    computed: {
      creditCalculation() {
        return Math.floor(this.corpetItem.price / 12)
      },
      newPrice() {
        return Math.ceil(this.corpetItem.price * ( 1 - this.corpetItem.discount / 100))
      },
      fullyStar() {
          return 5 - this.corpetItem.rating
      }
    },

    mounted() {
      this.getCorpetItem()
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

.corpet__item {
  margin: 16px 80px 0 80px;
}

.corpet__item_status {
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.item__rating {
  display: flex;
  margin-top: 12px;
    img {
      margin-right: 8px;
    }
    p {
      color: gray;
      font-size: 14px;
    }
}

.loader {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 200px 0 200px 45%;
}

.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: green transparent green transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.corpet__item_date {
  display: flex;
  justify-content: space-between;
  margin: 25px 80px 65px 80px;
  width: inherit
}

</style>