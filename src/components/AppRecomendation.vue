<template>
  <div class="recomendation">
  <recomendation-button
  class="rec-btn"
  @click="test()"
  > Смотреть все </recomendation-button>
<div class="recomend-corps">
  <div class="images1 images"><a href=""></a></div>
  <div class="images2 images"><a href=""></a></div>
</div>
<div class="collection">Новая коллекция ковров Venneta</div>
<div class="recomend-price">160.000₸</div>
  </div>

</template>

<script>
import RecomendationButton from './UI/RecomendationButton.vue'
  export default {
  components: { RecomendationButton },
    name: 'app-recomendation',

    data() {
      return {

      }
    },
    methods: {
      test() {
        console.log('Appa жи есть!')
      }
    }
  }
</script>

<style lang="scss" scoped>

.recomendation {
  background: #618C78;
  height: 600px;
}

.recomend-corps {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    width: 775px;
    padding: 0 40px;
    position: relative;
    left: 45%;

    .images {
      height: 400px;
      width: 300px;
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.75));
      z-index: 2;
      border-radius: 3px;
    }

    .images1 {
      background: url('../img/image5.jpg') center no-repeat;
    }

    .images2 {
      background: url('../img/image6.jpg') center no-repeat;
    }
  }

.rec-btn {
  position: relative;
  top: 350px;
  left: 100px;
}

.collection {
  width: 520px;
  height: 150px;
  font-size: 60px;
  color: white;
  position: relative;
  bottom: 360px;
  left: 100px;
}

.recomend-price {
  width: 170px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background: #F9F9F9;
  border: 1px solid #F9F9F9;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5em;
  z-index: 1;
  position: relative;
  bottom: 270px;
  left: 560px;
}

</style>