<template>
  <div class="navigation">
    <navigation-menu></navigation-menu>
    <navigation-categories></navigation-categories>
  </div>

</template>

<script>
import NavigationCategories from './NavigationCategories.vue'
import NavigationMenu from './NavigationMenu.vue'

  export default {
  components: { NavigationMenu, NavigationCategories },
    name: 'navigation',

    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

// .navigation {
//   width: 100vw;
// }

</style>