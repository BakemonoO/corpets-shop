<template>
  <div class="shop__list">
    <h1>Ковры</h1>
    <div class="shop__list_sorting">
      <p>Сортировать по:</p>
      <p>Популярности</p>
      <p>Сначало дешевые</p>
      <p>Сначало дорогие</p>
      <p>По рейтингу</p>
    </div>
    <div class="shop__list_item">
      <item-card
      v-for="corpet in corpets"
      :key="corpet.id"
      :corpet="corpet"
    />
    </div>
   
  </div>
</template>

<script>
  export default {
    name: 'shop-list',

    props: {
      corpets: Array
    }

  }
</script>

<style lang="scss" scoped>

.shop__list {
  display: flex;
  flex-direction: column;
  margin: 0px 80px;
  h1 {
    font-size: 40px;
  }
}

.shop__list_sorting {
  margin: 16px 0 50px 0;
  display: flex;
  p {
    margin-right: 16px;
    &:first-child {
      font-weight: 500;
    }
    &:not(:first-child) {
      cursor: pointer;
      &:hover {
        color: green;
      }
    }
  }
}

// .shop__list_item {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   justify-items: center;
//   margin: 0px 40px;
// }


.shop__list_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>