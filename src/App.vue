<template>
  <navigation/>
  <router-view></router-view>
<app-footer/>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import Navigation from './components/Navigation.vue'

  export default {
  components: { Navigation, AppFooter },
  
  data() {
    return {
    }
  },

  methods: {

  },

  computed: {
   
  },

  watch: {

  }

  }
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  line-height: 100%;
  font-size: 18px;
}

.router__link_item {
  &:visited {
    color: inherit;
  }
  &:link {
    text-decoration: none;
  }
}

</style>