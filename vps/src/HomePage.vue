<template>
    <Header firstText="Открыт маркетплейс приложений."
    secText="Получите готовый сервер с настроенным приложением в 2 клика"></Header>
    <main>
      <Banner blueText="Виртуальный сервер VPS/VDS" 
      blackText="с бесплатным периодом 7 дней" 
      tinyText="Гарантированное выделение ресурсов:" 
      tinyTextTwo="CPU, ОЗУ, дисков. Скорость канала 10 Гбит/сек."></Banner>
      <About descriptionTittle="Что такое виртуальный сервер?"
      description="Это физический сервер, разделенный 
      с помощью виртуализации на несколько виртуальных серверов 
      с гарантированным выделением ресурсов: оперативная память, процессор, IOPS. 
      На каждый виртуальный сервер можно установить свою 
      ОС: CentOS, Debian, Ubuntu, Windows."
      advantagesTitle="Дополнительные преимущества:"></About>
      <Opportunities titleText="Программно-аппаратные возможности VPS" featuresTitle="Включенные возможности VPS"></Opportunities>
      <Support></Support>
      <Feedback title="Отзывы клиентов"></Feedback>
    </main>
</template>
  
<script>
  import Header from "./components/Header.vue"
  import Banner from "./components/Banner.vue"
  import About from "./components/About.vue"
  import Opportunities from "./components/Opportunities.vue"
  import Support from "./components/Support.vue"
  import Feedback from "./components/Feedback.vue"
  
  export default {
    name: "HomePage",
    components: {
      Header,
      Banner,
      About,
      Opportunities,
      Support,
      Feedback
  }
  }
</script>
  
<style lang="scss" scoped>
</style>