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
</div>
  
</div>
  
</template>

<script>
  export default {
    name: 'item-page-images',

    props: {
      images: Array
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

</style>