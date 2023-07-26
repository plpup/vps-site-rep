<template>
    <section class="banner">
        <div class="banner__left-block">
            <div class="banner__left-block__text">
                <p class="banner__left-block__text_blue">{{blueText}}</p>
                <p class="banner__left-block__text_black"> {{blackText}}</p>
                <p class="banner__left-block__text_tiny">{{tinyText}}</p>
                <p class="banner__left-block__text_tiny-two">{{tinyTextTwo}}</p>
            </div>
            <div class="banner__left-block__try-free">
                <router-link :to="{ name: 'try-free' }"><button class="banner__left-block__try-free__button">попробовать бесплатно</button></router-link>
                <span class="banner__left-block__try-free__price">от <span class="banner__left-block__try-free__price_bold">130 ₽</span> / мес</span>
            </div>
        </div>
        <img class="banner__img" src="./icons/banner.png">
    </section>
</template>
  
<script>
export default {
    name: "Banner",
    props: {
        blueText: "",
        blackText: "",
        tinyText: "",
        tinyTextTwo: ""
    }
} 
</script>
  
<style lang="scss">
</style>