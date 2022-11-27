<template>

  <button class="btn">
    <slot></slot>
  </button>

</template>

<script>
  export default {
    name: 'recomendation-button',

  }
</script>

<style lang="scss" scoped>

.btn {
  width: 180px;
  height: 50px;
  border: 1px solid #CB4A4A;
  border-radius: 10px;
  background: #CB4A4A;
  color: white;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    background: #ca3737;
    border-color: #ca3737;
  }
  &:active {
    transform: scale(0.9);
    transition: transform 0.05s ease;
  }
}

</style>