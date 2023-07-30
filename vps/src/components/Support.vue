<template>
<section class="support">
    <div class="support__text-block">
        <div>
            <span class="support__text-block__title">
                Техническая поддержка 
                <span class="support__text-block__title_accenet">24/7</span>
            </span>
            <p class="support__text-block__main-text">В отличие от других хостинг компаний мы оказываем полную техническую поддержку при переносе сайта, 
                а также поддержку во время эксплуатации сайта. 
                Мы отвечаем на вопросы и решаем возникшие проблемы с сайтом.
            </p>
        </div>
        <img src="./icons/display.png" alt="display" class="support__text-block__img">
    </div>
    <div class="support__stats">
        <span class="support__stats__title">Почему мы лучшие</span>
        <div class="support__stats__block">
            <div v-for="(item, index) in items" :key="index" class="support__stats__block__info-blocks">
                <span class="support__stats__block__info-blocks__title">
                    {{ item.title }} 
                </span>
                <p class="support__stats__block__info-blocks__info">
                    {{ item.info }}
                </p>
            </div>
        </div>
        <ul class="support__stats__list">
            <li v-for="(element, index) in elements" :key="index" class="support__stats__list__element">
                {{ element.message }}
            </li>
        </ul>
        <img class="support__stats__background" src="./icons/stats.png" alt="stats">
    </div>
</section>
</template>
  
<script>
  export default {
    name: "Support",
    data(){
        return{
            items: [
                { title: 'Топ 3', info: 'Рекомендуемых Яндекс.Кассой сервисов' },
                { title: 'Топ 2', info: 'Рекомендуемых хостинг-провайдеров 1С-Битрикс' },
                { title: '190 ед.', info: 'Cамый высокий рейтинг 1С-Битрикс' }
            ],
            elements: [
                { message: 'Cобственный ЦОД' },
                { message: 'Cобственный биллинг с автоматизацией работы с серверами по API VMWare vCenter' }
            ]
        }
    }
  }
</script>
  
<style lang="scss" scoped>
</style>