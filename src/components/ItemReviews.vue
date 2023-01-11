<template>
  <div 
  v-if="itemComment === null"
  class="loader"></div>

  <div 
  v-else
  class="reviews">
    <div class="reviews__list"
    v-for="comments in itemComment"
    :key="comments.id"
    >
    <div class="reviews__list_item"
    :class="comments.id === 1 ? 'non_border' : ''"
    >
      <div class="list__item_info">
        <img src="http://zornet.ru/_fr/19/9367479.png" width="100" height="100">
        <p>{{comments.shortName}}</p>
      </div>
      <div class="list__item_message">
        <p>{{comments.body}}</p>
        </div>
      
      
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
        itemComment: null
      }
    },

    methods: {
      async getComment() {
      const comment = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${this.item.reviews}`)
      this.itemComment = comment.data.reverse()
      for (let i = 0; i < this.itemComment.length; i++) {
        let names = this.itemComment[i].email.match(/[A-Za-z._-]+/g)
        this.itemComment[i].shortName = names[0]
      }
      }
    },

    mounted() {
      this.getComment()
    }

  }
</script>

<style lang="scss" scoped>

.loader {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 80px 0 200px 45%;
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

.reviews__list_item {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1.5px dotted rgba(0, 0, 0, 0.3);
}

.list__item_info {
  display: flex;
  flex-direction: column;
  p {
    align-self: center;
    font-weight: 500;
  }
  img {
    margin-bottom: 10px;
  }
}

.list__item_message {
  margin-left: 100px;
}

.non_border {
  border: none;
}

</style>

