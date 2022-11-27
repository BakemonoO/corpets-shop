<template>
  <button class="arrow__button">
    <img src="../../img/Arrow.svg">
  </button>
</template>

<script>
  export default {
    name: 'arrow-button'


  }
</script>

<style lang="scss" scoped>

.arrow__button {
  width: 30px;
  height: 30px;
  background: #F2F2F2;
  border: 1px solid #F2F2F2;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #c7c4c4;
  }
}

</style>