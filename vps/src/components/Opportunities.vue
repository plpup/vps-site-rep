<template>
    <section class="programm-opportunities">
        <p class="programm-opportunities__title">{{ titleText }}</p>
        <section class="programm-opportunities__blocks-section">
            <div v-for="item in items" class="programm-opportunities__blocks-section__block">
                <div class="programm-opportunities__blocks-section__block__background">
                    <img :src="item.img" :alt="item.alt" class="programm-opportunities__blocks-section__block__background__img">
                </div>
                <p class="programm-opportunities__blocks-section__block__text">
                    {{ item.mainText }}
                    <span class="programm-opportunities__blocks-section__block__text_accent"> {{ item.secondText }}</span>
                </p>
            </div>
        </section>
    </section>
    <section class="included-features">
            <section class="included-features__block">
                <p class="included-features__block__title">{{ featuresTitle }}</p>
                <ul class="included-features__block__list">
                    <li v-for="element in elements" :key="element.message" class="included-features__block__list__element">
                        {{ element.message }}
                    </li>
                </ul>
            </section>
            <img class="included-features__img" src="./icons/features.png">
    </section>
</template>
  
<script> 
  export default {
    name: "Opportunities",
    props: {
        titleText: "",
        featuresTitle: ""
    },
    data(){
        return{
            items: [
                { img: 'src/components/icons/chip.png', alt: 'chip', mainText: 'Быстрые серверные процессоры', secondText: 'INTEL® XEON® 2186g 3.8 GHz' },
                { img: 'src/components/icons/disk.png', alt: 'disk', mainText: 'Высокопроизводительные', secondText: 'SSD-диски SAMSUNG и INTEL NVMe' },
                { img: 'src/components/icons/os.png', alt: 'os', mainText: 'Поддержка разных ОС:', secondText: 'CentOS, Debian, Ubuntu, Windows 2016r2' },
                { img: 'src/components/icons/pc.png', alt: 'pc', mainText: 'Два независимых ЦОД.', secondText: 'Добавьте еще текст.' },
                { img: 'src/components/icons/virtual.png', alt: 'virtual', mainText: 'Виртуализация VMWare', secondText: 'Добавьте текст.' },
                { img: 'src/components/icons/clock.png', alt: 'clock', mainText: 'Резервное копирование', secondText: 'Veeam Backup' },
                { img: 'src/components/icons/time.png', alt: 'time', mainText: 'Каналы 200 Гбит/c.', secondText: 'Добавьте еще текст.' }
            ],
            elements: [
                { message: 'Безлимитный трафик 1 Гбит/c' },
                { message: 'Балансировщик нагрузки' },
                { message: 'Статический IP' },
                { message: 'Резервное копирование' },
                { message: 'Мониторинг Zabbix' }
            ]
        }
    }
  }
</script>
  
<style lang="scss" scoped>
</style>