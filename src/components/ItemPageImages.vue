<template>
<div class="all-images">
  <div class="item__images">
<div class="image"
v-for="image in images"
:key="image"
:style="`background: url(${image}) center; background-size: 180px 180px`"
@click="changeImage(image)"
>
</div>
</div>
<div class="current__image"
:style="`background: url(${currentImage}) center; background-size: 620px`"
>
<div class="info__message"
v-if="item.discount > 0 || item.new === true"
>
<p v-if="item.discount > 0">-{{item.discount}} %</p>
<p v-else>Новинка</p>
</div>
</div>
  
</div>
  
</template>

<script>
  export default {
    name: 'item-page-images',

    props: {
      images: Array,
      item: Object
    },

    data() {
      return {
        currentImage: null,

      }
    },

    methods: {
      changeImage(image) {
        this.currentImage = image
      }
    },

    mounted() {
      this.currentImage = this.images[0]
      
    }
  }
</script>

<style lang="scss" scoped>

.all-images { 
  display: flex;
  justify-content: space-between;
  width: 840px;
}

.item__images { 
display: flex;
flex-direction: column;
justify-content: space-between;
height: 620px;
}

.image {
  height: 180px;
  width: 180px;
  background: red;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

.current__image {
height: 620px;
width: 620px;
border-radius: 20px;
}

.info__message {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #618C78;
  width: 115px;
  height: 30px;
  margin-top: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  p {
    color: white;
    font-size: 18px;
    line-height: 130%;
  }
}

</style>