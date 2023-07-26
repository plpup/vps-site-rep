<template>
    <section class="about-block">
        <div class="about-block__description">
            <p class="about-block__description__title">{{ descriptionTittle }}</p>
            <p class="about-block__description__main-text">{{ description }}</p>
            <img class="about-block__description__img" src="./icons/about.png">
        </div>
        <section class="about-block__advantages">
            <p class="about-block__advantages__title">{{ advantagesTitle }}</p>
            <ul class="about-block__advantages__list">
                <li v-for="(item, index) in items" :key="index" class="about-block__advantages__list__element">
                    {{ item.message }}
                </li>
            </ul>
        </section>
    </section> 
</template>
  
<script>
  export default {
    name: "About",
    props: {
        descriptionTittle: "",
        description: "",
        advantagesTitle: ""
    },
    data(){
        return{
            items: [
                { message: 'Резервное копирование' },
                { message: 'Отказоустойчивость SLA 99,95%' },
                { message: 'Безопасность' },
                { message: 'Высокая скорость' },
                { message: 'Удобный интерфейс управления' }
            ]
        }
    }
  }
</script>
  
<style lang="scss" scoped>
</style>
  