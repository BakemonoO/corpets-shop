<template>
  <div class="item__credit">
  <div class="credit__property">
    <p>Купить в рассрочку на Kaspi</p>
    <a href="https://kaspi.kz"><img src="../img/KaspiKz.svg" width="160" height="50"></a>
  </div>

<div class="credit__options">
   <div class="credit__terms">
    <div v-for="term in termArray"
    :key="term.name"
    class="credit__terms_item"
    :class="currentTerm === term.name ? 'active-terms' : false"
    @click="choiseTerm(term)">
      {{term.name}}
    </div>
  </div>
  <p style="font-weight: 500;">x</p>
  <p>{{pricePerMonth}} тенге / мес</p>
</div>

 
  </div>
</template>

<script>
  export default {
    name: 'item-credit',

    props: {
      item: Object
    },

    data() {
      return {
        termArray: [{name:'3 мес', numTerm: 3},{name:'6 мес', numTerm: 6},{name:'12 мес', numTerm: 12},{name:'24 мес', numTerm: 24}],
        currentTerm: '3 мес',
        currentMonth: 3
      }
    },

    methods: {
      choiseTerm(term) {
        this.currentTerm = term.name
        this.currentMonth = term.numTerm
      }
    },
    computed: {
      pricePerMonth() {
       return Math.floor(this.item.price / this.currentMonth)
      }
    }
  }
</script>

<style lang="scss" scoped>

.item__credit {
  display: flex;
  flex-direction: column;
  width: 550px;
  p {
    align-self: center;
    font-weight: 400;
  }
}

.credit__property {
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.credit__options {
  display: flex;
  justify-content: space-between;
}

.credit__terms {
  display: flex;
  border: 1px solid #618C78;
  border-right: none;
  width: 320px;
}

.credit__terms_item {
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
  border-right: 1px solid #618C78;
  width: 80px;
  cursor: pointer;
}

.active-terms {
  background: #618C78;
}

</style>