<template>
  <section class="feedback-block">
    <span class="feedback-block__title">
      {{ title }}
    </span>
    <div class="feedback-block__comment">
      <div class="feedback-block__comment__avatar">
       <span class="feedback-block__comment__avatar__text">A</span>
      </div>
      <div class="feedback-block__comment__text-block">
        <div class="feedback-block__comment__text-block__head">
          <img class="feedback-block__comment__text-block__head__quoute" src="./icons/gray-quoute.png" alt="quoute">
          <span class="feedback-block__comment__text-block__head__title">Невероятно! Теперь моя работа изменилась в лучшую сторону</span>
        </div>
        <div class="feedback-block__comment__text-block__main-text">
          {{ mainText }}
        </div>
        <div class="feedback-block__comment__text-block__bottom">
          <div class="feedback-block__comment__text-block__bottom__user-info">
            <span class="feedback-block__comment__text-block__bottom__user-info__name">Артем Поляков</span>
            <span class="feedback-block__comment__text-block__bottom__user-info__date">12 июня, 2018</span>
          </div>
          <button class="feedback-block__comment__text-block__bottom__all-comment-button">Весь отзыв</button>
        </div>
      </div>
      <div class="feedback-block__comment__buttons-block">
        <button class="feedback-block__comment__buttons-block__button">
          <img class="feedback-block__comment__buttons-block__button__img" src="./icons/up.png" alt="up">
        </button>
        <button class="feedback-block__comment__buttons-block__button">
          <img class="feedback-block__comment__buttons-block__button__img" src="./icons/down.png" alt="down">
        </button>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "Support",
  props: {
    title: ""
  },
  data(){
        return{
          mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem vel ex molestie sollicitudin. Sed scelerisque enim id placerat egestas. Morbi fermentum enim enim, non suscipit sapien interdum ornare. Nunc malesuada nisi a varius imperdiet. Sed hendrerit malesuada neque. Etiam vel scelerisque dolor. Fusce eleifend massa vitae sagittis iaculis… Morbi fermentum enim enim, non suscipit sapien interdum ornare. Nunc malesuada nisi a varius imperdiet. Sed hendrerit malesuada neque. Etiam vel scelerisque dolor. Fusce eleifend massa vitae sagittis iaculis…"
        }
    }
}
</script>
  
<style lang="scss" scoped>
</style>