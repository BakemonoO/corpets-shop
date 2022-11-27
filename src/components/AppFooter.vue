<template>
  <div class="footer">
    <div class="footer__column">
      <h4 class="footer__column_name">Каталог товаров</h4>
      <div class="footer__column_item">Ковры</div>
      <div class="footer__column_item">Коврики</div>
      <div class="footer__column_item">Дорожки</div>
      <div class="footer__column_item">Для ванной</div>
    </div>

    <div class="footer__column">
      <h4 class="footer__column_name">Личный кабинет</h4>
      <div class="footer__column_item">Личный кабинет</div>
      <div class="footer__column_item">Мои заказы</div>
      <div class="footer__column_item">Корзина</div>
      <div class="footer__column_item">Избранное</div>
    </div>

    <div class="footer__column">
      <h4 class="footer__column_name">Центр поддержки</h4>
      <div class="footer__column_item">Контакты</div>
      <div class="footer__column_item">Доставка</div>
      <div class="footer__column_item">Возраты</div>
    </div>

    <div class="footer__column">
      <h4 class="footer__column_name">Помощь и контакты</h4>
      <div class="footer__column_item">Контакты</div>
      <div class="footer__column_item">Доставка</div>
      <div class="footer__column_item">Возраты</div>
    </div>
    
    <div class="footer__column">
      <h4 class="footer__column_name">Помощь и контакты</h4>
      <div class="footer__column_message">Подпишитесь, чтобы всегда <br> быть в курсе наших новых акций</div>
      <div class="case__email">
        <input type="text"
      class="email__input"
      placeholder="Ваш email">
      <button class="email__button"><img src="../img/Submit.svg"></button>
      
      </div>
      

    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

.footer {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  background: #F2F2F2;
}

.footer__column {
margin: 40px 0;
}

.footer__column_name {
margin-bottom: 8px;
}

.footer__column_item {
  color: gray;
  margin-top: 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: rgb(10, 10, 10);
  }
}

.footer__column_message {
  color: gray;
  margin-top: 16px;
  font-size: 14px;
  line-height: 150%;
}

.email__input {
  width: 215px;
  height: 50px;
  padding: 0 15px;
  background: white;
  border: 1px solid white;
  border-radius: 10px 0 0 10px;
  &:focus {
    border: 1px solid white;
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
    color: gray;
  }
}

.email__button {
  width: 50px;
  height: 50px;
  background: #618C78;
  border: 1px solid #618C78;
  border-radius: 0 10px 10px 0;
  &:hover {
    background: #65a084;
    border: #65a084;
  }
}

.case__email {
display: flex;
align-items: flex-end;
height: 50px;
margin-top: 15px;
}

</style>