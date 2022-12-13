<template>
  <div class="page__tabs">
    <div class="page__tabs_title">
      <div class="title__item"
      :class="{'active': currentComponent === 'item-characteristics'}"
      @click="currentComponent = 'item-characteristics'">Характеристики</div>

      <div class="title__item"
      :class="{'active': currentComponent === 'item-credit'}"
      @click="currentComponent = 'item-credit'">Купить в рассрочку</div>

      <div class="title__item"
      :class="{'active': currentComponent === 'item-reviews'}"
      @click="currentComponent = 'item-reviews'">Отзывы</div>
      
      <div class="title__item"
      :class="{'active': currentComponent === 'add-review-form'}"
      @click="currentComponent = 'add-review-form'">Написать отзыв</div>
    </div>
    <div class="page__tabs_component">
      <component :is="currentComponent"
    :item="item"
    />
    </div>
  </div>
</template>

<script>
import ItemCharacteristics from '@/components/ItemCharacteristics.vue'
import ItemCredit from './ItemCredit.vue'
import ItemReviews from './ItemReviews.vue'
import AddReviewForm from './AddReviewForm.vue'

  export default {
  components: { ItemCharacteristics, ItemCredit, ItemReviews, AddReviewForm },
    name: 'item-page-tabs',
  
    props: {
      item: Object
    },

    data() {
      return {
      currentComponent: 'item-characteristics'
      }
    }

  }
</script>

<style lang="scss" scoped>

.page__tabs {
  min-height: 400px;
}

.page__tabs_title {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  text-align: center;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.5);
  .title__item {
    font-size: 18px;
    cursor: pointer;
    padding: 13px;
    width: 100%;
  }
}

.title__item:hover {
  color: #618C78;
}

.active {
  background: #618C78; 
  border-bottom: 1.5px solid #618C78;
  color: white;
  &:hover {
    color: white;
  }
}

.page__tabs_component {
  padding-top: 50px;
}

</style>