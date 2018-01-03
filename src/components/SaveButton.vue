<template>
  <section id="saveButton" @click="save">
    SAVE
  </section>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

  #saveButton
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    text-align: center
    font-size: 14pt
    background: $color-dark
    color: $color-white
    transition: .2s

  #saveButton:active
    background: $color-mid

</style>

<script>
  export default {
    name: 'saveButton',
    data () {
      return {}
    },
    methods: {
      save: function () {
        this.$emit('save')
      }
    }
  }
</script>
