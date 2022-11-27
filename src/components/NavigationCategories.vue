<template>
  <div class="categories">
    <router-link class="category" to="/shop-corpets">Ковры</router-link>
    <router-link class="category" to="/shop-corpets">Коврики</router-link>
    <router-link class="category" to="/shop-corpets">Для ванной</router-link>
    <router-link class="category" to="/shop-corpets">Дорожки</router-link>
    <router-link class="category" to="/shop-corpets">Центр поддержки</router-link>
    <router-link class="category" to="/shop-corpets">Контакты</router-link>
  </div>
</template>

<script>
  export default {
    name: 'navigation-categories',

    data() {
      return {
        categories: ['Ковры', 'Коврики', 'Для ванной', 'Дорожки', 'Центр поддержки', 'Контакты']
      }
    }
  }
</script>

<style lang="scss" scoped>

.categories {
  display: flex;
  justify-content: space-between;
  padding: 30px 80px;
  background: #F9F9F9;
}

.category {
  font-weight: 600;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
  &:link {
    text-decoration: none;
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
}

</style>