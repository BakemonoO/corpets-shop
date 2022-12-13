<template>
  <div>
{{item.rating}}
  </div>
</template>

<script>
  export default {
    name: 'item-reviews',

    props: {
      item: Object
    }
  }
</script>

<style lang="scss" scoped>

</style>