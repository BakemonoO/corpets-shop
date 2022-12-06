<template>
  <div class="page__info">
<div class="page__info_column">
<div class="left__column">
      <div class="info__price">
        <div class="price__type"
        v-if="item.discount > 0"
        >
        <p>Новая цена:</p>
        <h1>{{newPrice}}₸</h1>
        </div>

        <div class="price__type"
        v-else
        >
        <p>Цена:</p>
        <h1>{{item.price}}₸</h1>
        </div>
      </div>

      <div class="info__size">
      <p>Размер: </p>
      <p style="color: black">{{item.size}} см</p>
    </div>

       <div class="page__info_links">
      <p>Перейти к описанию</p>
    </div>
      </div>
    <div class="right__column">
      <div class="info__credit">
      <p>В рассрочку:</p>
      <h1 style="color: #618C78">{{creditCalculation}}₸</h1>
      </div>

      <div class="info__amount">
      <p>Количество: </p>
      <div class="buttons">
        <img src="../img/ButtonDecrement.svg"
        @click="pcs--"
        >
        <p style="color: black">{{pcs}}</p>
        <img src="../img/ButtonIncrement.svg"
        @click="pcs++"
        >
      </div>
    </div>

    <div class="page__info_links">
      <p>Подробнее о рассрочке</p>
    </div>
    </div>
</div>
    <div class="buy__buttons">
      <recomendation-button
      style="width: 290px"
      >В корзину</recomendation-button>
      <button class="buy__buttons_heart">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.529C12.35 -0.580005 15.98 -0.510005 18.243 1.757C20.505 4.02499 20.583 7.637 18.479 9.993L9.99901 18.485L1.52101 9.993C-0.582994 7.637 -0.503994 4.019 1.75701 1.757C4.02201 -0.507005 7.64501 -0.583005 10.001 1.529ZM16.827 3.17C15.327 1.668 12.907 1.607 11.337 3.017L10.002 4.215L8.66601 3.018C7.09101 1.606 4.67601 1.668 3.17201 3.172C1.68201 4.66199 1.60701 7.047 2.98001 8.623L10 15.654L17.02 8.62399C18.394 7.04699 18.319 4.665 16.827 3.17Z" fill="gray"/>
</svg>
      </button>
    </div>
    <div class="page__info_return">
      <div class="return__time">
        <img src="../img/ReturnArrow.svg" style="opacity: 0.6">
        <p style="line-height: 140%">Возврат в течение 14 дней</p>
      </div>
      <div class="return__time">
        <img src="../img/ReturnCar.svg">
        <p>Среднее время доставки 2.5 дня</p>
      </div>
      <div class="return__links">
        <a href="" style="color: green; text-decoration: none; font-size: 14px">Подробнее</a>
      </div>
    </div>
    <p style="color: black; line-height: 140%; margin-bottom: 16px">Нужна помощь с выбором? Просто напишите нам <br>
    в WhatsApp и мы обязательно вам поможем!
    </p>
    <recomendation-button
    style="background: #618C78; border-color: #618C78; width: 290px; display: flex; justify-content: center; align-items: center; font-size: 18px"
    class="whats-app__button"
    >
      <img src="../img/WhatsApp.svg"
      style="margin-right: 10px">
     Написать
      </recomendation-button>
  </div>
</template>

<script>
  export default {
    name: 'item-page-info',

    props: {
      item: Object
    },

    data() {
      return {
        pcs: 1
      }
    },

    computed: {
      newPrice() {
        return Math.ceil(this.item.price * ( 1 - this.item.discount / 100))
    },
      creditCalculation() {
        return Math.floor(this.item.price / 12)
      },
  }
}
</script>

<style lang="scss" scoped>

.page__info {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 45px;
  .page__info_column {
    display: flex;
    justify-content: space-between;
  }
  p {
  font-size: 14px;
  font-weight: 500;
  color: gray;
  margin-left: 10px;
}
}

.left__column, .right__column {
  display: flex;
  flex-direction: column;
}

  .info__price, .info__credit {
    margin-bottom: 25px;
  }

.info__size {
  display: flex;
  margin-bottom: 16px;

}

.info__amount {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  p {
    margin-right: 7px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0 7px;
    }
  }
  img {
   height: 17px;
   width: 17px;
   cursor: pointer;
  }
}

.page__info_links {
  margin-bottom: 32px;
  p {
    color: #618C78;
    cursor: pointer;
  }
}

.buy__buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  .buy__buttons_heart {
    width: 50px;
    height: 50px;
    background: white;
    border: 1px solid gray;
    border-radius: 10px;
    &:hover {
      background: #CB4A4A;
      border-color: #CB4A4A;
      svg path {
        fill: white;
      }
    }
  }
}

.page__info_return {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 7.17557px rgba(0, 0, 0, 0.1);
  padding: 22px;
  margin-bottom: 32px;
  .return__time {
    display: flex;
    margin-bottom: 20px;
  }
}


</style>