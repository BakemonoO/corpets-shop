<template>
  <div class="review__form"
  v-if="submitStatus === false"
  >
    <div class="form__block">
      <p>Ваше имя:</p>
      <input type="text"
      v-model="submitName"
      :class="submitName.length !== 0 && submitName.length < 2 ? 'input-red' : submitName.length > 1 ? 'input-green' : ''"
      placeholder="Ваше имя"
      class="form__input">
      <img src="../img/SubmitSend.svg" width="100" height="100">
    </div>
    <div class="form__block">
      <p>Ваша почта:</p>
      <input type="text"
      v-model="submitEmail"
      :class="submitEmail.length !== 0 && emailValidation === false ? 'input-red' : emailValidation.length !== 0 && emailValidation === true ? 'input-green' : ''"
      @input="checks"
      placeholder="Ваш Email"
      class="form__input">
    </div>
    <div class="form__block">
      <p>Отзыв:</p>
      <textarea cols="30" rows="10"
      v-model="submitReview"
      class="form__input review__area"
      placeholder="Опишите Ваше впечатление о товарe"
      ></textarea>
    </div>
    <recomendation-button
    style="background: #618C78; border-color: #618C78; width: 290px; display: flex; justify-content: center; align-items: center; font-size: 18px"
    class="submit__button"
    @click="sendReview"
    >
     Отправить
      </recomendation-button>
    
  </div>
  <div class="submit__sended"
  v-else
  >
  <div class="submit__end">
    <img src="../img/SubmitSend.svg" width="100" height="100">
    <h1>Отправлено</h1>
  </div>
  <div class="submit__info">
    <p>Спасибо за Ваш отзыв!</p> 
  </div>
  </div>
</template>

<script>
  export default {
    name: 'add-review-form',

    props: {
      item: Object
    },
    
    data() {
      return {
        submitStatus: false,
        submitName: '',
        submitEmail: '',
        submitReview: '',
        emailValidation: false
      }
    },

    methods: {
      checks() {
        if (this.submitEmail.length >= 12) {
          let regEmail = this.submitEmail.match(/@[a-zA-Z]+\.\w{2,6}/i)
        regEmail === null ? this.emailValidation = false : this.emailValidation = true
        } else {
          this.emailValidation = false
        }
      },

      sendReview() {
        if (this.submitName.length < 1 || this.emailValidation === false || this.submitReview.length < 5) {
          console.log('сайпал')
        } else {
          this.submitStatus = true
        }
      }

    }

  }
</script>

<style lang="scss" scoped>

.form__block {
  display: flex;
  margin-bottom: 30px;
  p {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    width: 200px;
    line-height: 1.3;
  }
}

.form__input {
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 7.17557px rgba(0, 0, 0, 0.1);
  padding: 5px 5px 5px 10px;
  outline: none;
  height: 30px;
  &::placeholder {
    font-style: italic;
    font-size: 16px;
  }
  &:focus {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  }
}

.review__area {
  width: 500px;
  height: 200px;
  resize: none;
  padding-top: 10px;
}

.submit__button {
  margin-left: 300px;
  margin-top: 30px;
}

.submit__sended {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.submit__end {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 60px;
    margin-left: 10px;
  }
}

.submit__info {
  opacity: 0.4;
  margin-left: 100px;
}

.input-green {
  border: 2px solid rgba(14, 199, 14, 0.3);
}

.input-red {
  border: 2px solid rgba(255, 22, 53, 0.5);
}

</style>