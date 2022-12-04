<template>
<div class="loader"
v-if="corpetItem === null"></div>
<div
v-else>
<div class="routes__way">
    <router-link class="router__link_item" style="color: gray;" to="/">Главная /</router-link>
    <router-link class="router__link_item" style="color: gray;" to="/shop-corpets">Ковры /</router-link>
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
    <item-page-images/>
    </div>
    </div>


</div>



</template>

<script>
import axios from 'axios'
import ItemPageImages from '@/components/ItemPageImages.vue'
  export default {
  components: { ItemPageImages },
    data() {
      return {
        corpetItem: null,
      }
    },
    
    methods: {
      async getCorpetItem() {
        const response = await axios.get(`https://my-json-server.typicode.com/bakemonoo/corpets-shop/corpets/${this.$route.params.id}`)
        this.corpetItem = response.data
        console.log(this.corpetItem)

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

</style>