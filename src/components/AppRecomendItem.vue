<template>
  <div class="recomend__item">
  <div class="recomend__item_info">
    <div class="recomend__info">
      <div class="recomend__info_name">
        <slot></slot>
        </div>
    <div class="recomend__info_all">Все товары</div>
    </div>
  
    <div class="recomend__info_scroll">
      <arrow-button
    class="arrow__button_left"/>
    <arrow-button/>
    </div>
    </div>
    <div class="cards">
    <item-card
    v-for="corpet in corpets"
    :key="corpet.id"
    :corpet="corpet"
    style="margin: 20px"
    />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-recomend-item',

    props: {
      corpets: {
        type: Array,
        required: true
      },
     
    },

    data() {
      return {
       
      }
    }
  }
</script>

<style lang="scss" scoped>

.recomend__item {
  height: 605px;
  margin-top: 50px;

}

.recomend__item_info {
  display: flex;
  justify-content: space-between;
  margin: 0 80px;
}

.recomend__info {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

.recomend__info_all {
  margin-left: 30px;
  color: #648E7A;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #62b38c;
  }
}

.arrow__button_left {
  transform: rotateY(180deg);
  margin-right: 25px;
}

.cards {
  display: flex;
  justify-content: space-between;
  overflow: auto;
  margin-left: 60px;
  overflow-x: hidden;
}

</style>