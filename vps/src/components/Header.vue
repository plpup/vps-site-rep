<template>
    <header class="header">
      <section v-if="show" class="news">
        <div class="news__label">new</div>
        <span class="news__bold-text">{{firstText}}</span>
        <span class="news__text">{{secText}}</span>
        <router-link :to="{ name: 'new-page' }"><img class="news__chevron-img" src="./icons/chevron.png" alt="news"></router-link>
        <button v-on:click="show=false" class="news__close-button">
          <img class="news__close-button__img" src="./icons/close.png" alt="close">
        </button>
      </section>
      <section class="menu-box">
        <img class="menu-box__img" src="./icons/logo.png">
        <div class="menu-box__products">
          <p class="menu-box__products__text">продукты</p>
          <img class="menu-box__products__chevron" src="./icons/chevron-color.png" alt="drop-list-products">
        </div>
        <div class="menu-box__clients">
          <p class="menu-box__clients__text">клиенты</p>
        </div>
        <div class="menu-box__support">
          <p class="menu-box__support__text">поддержка</p>
          <img class="menu-box__support__chevron" src="./icons/chevron-color.png" alt="drop-list-support">
        </div>
        <div class="menu-box__phone">
          <button class="menu-box__phone__button"><img class="" src="./icons/phone.png"></button>
          <p class="menu-box__phone__number">+7 495 644-04-04</p>
        </div>
        <div class="menu-box__sign-in">
          <button class="menu-box__sign-in__button">войти</button>
        </div>
      </section>
    </header>
</template>
  
<script>
export default {
    name: "Header",
    props: {
      firstText: "",
      secText: ""
    },
    data(){
      return{
        show: true
      }
    }
} 
</script>
  
<style lang="scss">
</style>