<template>
  <div class="menu">
    <router-link to="/"><img src="../img/Logo.svg" alt="логотип"></router-link>
  <div class="location">
    <img src="../img/Location.svg" alt="локация">
    <div>{{ location }}</div>
  </div>
  <navigation-input></navigation-input>
  <img class="icons" src="../img/Profile.svg" alt="Профиль">
  <img class="icons" src="../img/Favorites.svg" alt="Избранное">
  <img class="icons" src="../img/Shoping-cart.svg" alt="Корзина">
 
  </div>
</template>

<script>
import NavigationInput from './UI/NavigationInput.vue'
  export default {
  components: { NavigationInput },
    data() {
      return {
        location: 'Алматы'
      }
    }
  }
</script>

<style lang="scss" scoped>

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 80px;
}

.location {
    display: flex;
    img {
      width: 18px;
      height: 21px;
      margin-right: 11px;
    }
    div {
      font-size: 18px;
    }
  }

  .icons {
    &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
  }


</style>