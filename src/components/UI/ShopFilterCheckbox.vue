<template>
<div class="filter">
  <div class="filter__name">
    <p><slot name="blockName"></slot></p>
     <button class="filter__button"
     @click="openClose"
     :class=" openList ? 'btn__open' : 'btn__close'"></button>
  </div>
  
  <div class="filter__checkbox"
  v-show="openList">
 <checkbox-item
 :maded="maded"
 />
</div>

</div>

</template>

<script>
  export default {
    name: 'shop-filter-checkbox',

    props: {
      maded: Array
    },

    data() {
      return {
        openList: false,
      }
    },

    methods: {
      openClose() {
        this.openList === true ? this.openList = false : this.openList = true;
      },

    },

    computed: {

    },

    watch: {
   
    },

    mounted() {


  }
}

</script>

<style lang="scss" scoped>

.filter {
  width: 330px;
  min-height: 70px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 25px 20px;
  
  .filter__name {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
}

.filter__button {
    width: 20px;
    height: 20px;
    border: none;
  }

.btn__close {
  background: url('../../img/ButtonOpen.svg');
}

.btn__open {
  background: url('../../img/ButtonClose.svg');
}

.filter__checkbox {
  display: flex;
  flex-direction: column;
}


</style>
