<template>
  <section id="saveButton" @click="save">
    SAVE
  </section>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

  #saveButton
    position: absolute
    bottom: 0
    left: 0
    right: 0
    padding: 20px
    text-align: center
    font-weight: 600
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
