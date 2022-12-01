<template>
   <label class="filter__checkbox_item" v-for="check in maded"
   :key="check">
    <input type="checkbox" :value="check" class="checkbox" v-model="checked">
    <span class="checkbox__text">{{ check }}</span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox-item',

    props: {
      maded: Array
  

    },

    data() {
      return {
        checked: []
      }
    },

  }
</script>

<style lang="scss" scoped>

input[type="checkbox"] {
    display: none;
  }
  .checkbox__text {
    color: gray;
  }
  .checkbox__text::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border: 1px solid gray;
    margin-right: 12px;
  }
  input[type="checkbox"]:checked + .checkbox__text::before {
    background: url('../../img/CheckboxTrue.svg') center;
    border: none;
  }
  input[type="checkbox"]:checked + .checkbox__text {
    color: black;
  }

.filter__checkbox_item {
  margin-top: 20px;
  font-weight: 400;
}
</style>