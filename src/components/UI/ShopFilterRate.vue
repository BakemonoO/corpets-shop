<template>
  <div class="rate">
    <div class="rate__area">
      <div class="rate__info">
      <div>Фильтр</div>
      <div class="area__info_clear"
      @click="clearValue">Сбросить</div>
      </div>

    <div class="area__result"
    >Найдно 55 товаров</div>
    
    <div class="area__price">
      <div class="area__price_name">
      <p>Цена, </p>
      <p class="price__name_currency">тенге</p>
    </div>
    <div class="area__price_range">
      <input type="range" 
      min="0" 
      max="400000" 
      step="1000" 
      v-model.number="minValue"
      class="price__range_min price__range"
      >
      <input type="range" 
      min="0" 
      max="400000" 
      step="1000" 
      v-model.number="maxValue" 
      class="price__range_max price__range"
      >
    </div>
    <div class="price__range_info">
      <div class="range__info_item">{{ minValue }}</div>
      <div class="range__info_item">{{ maxValue }}</div>
    </div>
    </div>
    
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'shop-filter-rate',
 
    data() {
      return {
        minValue: 0,
        maxValue: 400000
      }
    },
    methods: {
      clearValue() {
        this.minValue = 0
        this.maxValue = 400000
      },
    },

    watch: {
      minValue() {
        this.minValue > this.maxValue ? this.minValue = this.maxValue - 10000 : false
      },

      maxValue() {
        this.minValue > this.maxValue ? this.minValue = this.maxValue - 10000 : false
      },
    }
  }
</script>

<style lang="scss" scoped>

.rate {
  width: 330px;
  height: 240px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .rate__area {
    margin: 32px 20px;
    .area__result {
    font-size: 14px;
    color: gray;
    line-height: 140%;
    margin-top: 8px;
  }
  }
}

.rate__info {
  display: flex;
  justify-content: space-between;
  div {
    font-weight: 500;
  }
  .area__info_clear {
    color: gray;
    text-decoration: underline;
    cursor: pointer;
  }
}

.area__price {
  margin-top: 32px;
}

 .area__price_name {
  display: flex;
  font-weight: 500;
  .price__name_currency {
    color: gray;
    margin-left: 5px;
  }
}

.area__price_range {
  width: 285px;
  position: relative;
  height: 1px;
  
}

.price__range {
  margin-top: 10px;
  appearance: none;
  width: 285px;
  position: absolute;
  left: 0;
  top: 15px;
  border: 1px solid #618C78;
  height: 0;
  &::-webkit-slider-thumb {
    appearance: none;
    z-index: 2;
    position: relative;
    width: 15px;
    height: 15px;
    background: #618C78;
    border-radius: 7.5px;
  }
}

.price__range_info {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  .range__info_item {
    width: 120px;
    height: 40px;
    background: #F9F9F9;
    border-radius: 10px;
    text-align: center;
    line-height: 2em;
  }
}

</style>