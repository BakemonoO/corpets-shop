<template>
  <div class="item__credit">
  <div class="credit__property">
    <p>Купить в рассрочку на Kaspi</p>
    <a href="https://kaspi.kz"><img src="../img/KaspiKz.svg" width="160" height="50"></a>
  </div>

  <div class="credit__property">
    <p>Купить в рассрочку Halyk Bank</p>
    <a href="https://halykbank.kz"><img src="../img/HalykBank.svg" width="160" height="50"></a>
  </div>

   <div class="credit__property">
    <p>Купить в рассрочку Eurasian Bank</p>
    <a href="https://halykbank.kz"><img src="../img/EurasianBank.svg" width="160" height="50"></a>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'item-credit',

    props: {
      item: Object
    }
  }
</script>

<style lang="scss" scoped>

.item__credit {
  display: flex;
  flex-direction: column;
  width: 500px;
  p {
    align-self: center;
    font-weight: 500;
  }
}

.credit__property {
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding-bottom: 10px;

}

</style>