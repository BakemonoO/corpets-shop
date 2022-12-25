<template>
  <div class="reviews">
  <div class="loader"
  v-if="comments === null"
  ></div>
  <div class="reviews__comment"
  v-else>
    <div class="reviews__commnent_item"
    v-for="comment in comments"
    :key="comment"
    >
    {{comment.body}}
    </div>
  </div>
  </div>
  
</template>

<script>
import axios from 'axios'
  export default {
    name: 'item-reviews',

    props: {
      item: Object
    },

    data() {
      return {
        comments: null
      }
    },

    methods: {
      async getItemComments() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${this.item.reviews}`)
        this.comments = response.data
      }
    },
    mounted() {
      this.getItemComments()
  }
  }
</script>

<style lang="scss" scoped>

.reviews {
  display: flex;
  flex-direction: column;
}

.loader {
  align-self: center;
  margin-top: 100px;
}

.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: green transparent green transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>