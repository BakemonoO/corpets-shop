<template>
  <div class="item__characteristics">
    <div class="property">
      <p class="property__title">Производство</p>
      <p class="property__body">{{item.madeIn}}</p>
    </div>

    <div class="property">
      <p class="property__title">Размер</p>
      <p class="property__body">{{item.size}}</p>
    </div>

    <div class="property">
      <p class="property__title">Категория</p>
      <p class="property__body">{{item.category}}</p>
    </div>

    <div class="property"
    v-if="item.discount > 0">
      <p class="property__title">Скидка</p>
      <p class="property__body">{{item.discount}}%</p>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: 'item-characteristics',

    props: {
      item: Object
    }

  }
</script>

<style lang="scss" scoped>

.item__characteristics {
  display: flex;
  flex-direction: column;
}

.property {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 400px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 15px;
  margin-bottom: 15px;
  .property__title {
    font-weight: 700;
  }
}

</style>