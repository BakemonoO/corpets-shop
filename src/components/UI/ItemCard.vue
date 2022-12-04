<template>
  <div class="card">
    <div class="promotion-favorite">

      <div class="promotion"
      v-if="corpet.discount > 0"
      >- {{corpet.discount}}%</div>
      <div class="promotion"
      v-else-if="corpet.new"
      >Новинка</div>
      <div class="normal"
      v-else></div>

      <div class="favorite">
        <img src="../../img/LikeTrue.svg" 
        alt="Избранное"
        v-if="favoriteItem">
        <img src="../../img/LikeFalse.svg" 
        alt="Избранное"
        v-else>
      </div>
    </div>

    <div class="corpet-image">
      <img src="../../img/Corpet.svg" alt="Ковер" width="176" height="236"
      style="">
    </div>

    <div class="item__info">
      <div class="item__title">{{corpet.title}}</div>
      <div class="item__size">Размер: {{corpet.size}}</div>
      <div class="item__from">Производитель: {{corpet.madeIn}}</div>
      <div class="item__rating">
        <img src="../../img/StarTrue.svg" alt="звезды"
        width="15"
        height="15"
        v-for="star in corpet.rating"
        :key="star">
        <img src="../../img/Star.svg" alt="звезды"
        width="15"
        height="15"
        v-for="star in fullyStar"
        :key="star">
        <p>{{corpet.reviews}} отзывов</p>
      </div>

      <div class="item__price">
        <div class="item__price_actual">
          <p class="price__name"
          v-if="corpet.discount > 0"
          >Старая цена</p>

          <p class="price__name"
          v-else
          >Цена</p>

          <p class="price__value old"
          v-if="corpet.discount > 0"
          >{{corpet.price}}₸</p>

          <p class="price__value"
          v-else
          >{{corpet.price}}₸</p>
          
        </div>

        <div class="item__price_promotion"
        v-if="corpet.discount > 0">
        <p class="price__name">Новая цена</p>
        <p class="price__value new">{{newPrice}}₸</p>
        </div>

        <div class="item__price_credit"
        v-else>
        <p class="price__name">В рассрочку</p>
        <div class="credit">
          <p class="price__value credit__value">{{creditCalculation}}₸</p>
          <p class="price__value credit__month">х 12 мес</p>
          </div>
        
        </div>
      </div>
      </div>
    
  </div>
</template>

<script>
  export default {
    name: 'item-card',

    props: {
      corpet: {
        type: Object,
        required: true
      }
    },
    
    data() {
      return {
        favoriteItem: false,
        itemPromotion: false
      }
    },
    
    computed: {
      creditCalculation() {
        return Math.floor(this.corpet.price / 12)
      },
      newPrice() {
        return Math.ceil(this.corpet.price * ( 1 - this.corpet.discount / 100))
      },
      fullyStar() {
        return 5 - this.corpet.rating
      }
    }
  }
</script>

<style lang="scss" scoped>

.card {
  width: 270px;
  min-width: 270px;
  height: 525px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.promotion-favorite {
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  margin-right: 25px;
  .promotion {
    padding: 3px 20px 3px 20px;
    font-size: 18px;
    color: white;
    background: #618C78;
  }
}

.corpet-image {
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.75));
}

.item__info {
  padding-left: 20px;
}

.item__title {
  width: 175px;
  height: 35px;
  font-size: 16px;
  line-height: 100%;
  font-weight: 700;
}

.item__size, .item__from {
  margin-top: 8px;
  font-size: 14px;
  line-height: 130%;
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

.item__price {
  display: flex;
  margin-top: 20px;
}

.item__price_actual {
    margin-right: 20px;
  }

.price__name {
      font-size: 14px;
      color: gray;
      margin-bottom: 10px;
    }

.price__value {
  font-size: 18px;
}

.old {
  text-decoration: line-through;
}

.new {
  color: green;
}

.credit {
  display: flex;
  .credit__value {
    font-size: 14px;
    background: #618C78;
    color: white;
    padding: 3px 5px;
  }
  .credit__month {
    margin-left: 5px;
    font-size: 14px;
    color: gray;
    padding-top: 5px;
  }

  .normal {
    visibility: hidden;
  }

}
</style>