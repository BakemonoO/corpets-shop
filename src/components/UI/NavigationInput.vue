<template>
  <div>
    <input type="text"
    class="navigation-input"
    placeholder="Поиск по товарам">
  </div>
</template>

<script>
  export default {
    name: 'navigation-input'


  }
</script>

<style lang="scss" scoped>

.navigation-input {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 600px;
  height: 50px;
  background: url('../../img/Search.svg') no-repeat right;
  font-size: 18px;
  &:focus {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    outline: none;
  }
  &::placeholder {
    font-size: 18px;
  }
}

</style>