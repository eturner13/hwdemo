<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

  @import 'assets/styles/variables/allVariables.sass'
  @import 'assets/styles/elements/allElements.sass'

  html
    height: 100%
    box-sizing: border-box
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

  body
    position: relative
    min-height: 100%
    margin: 0 0 0 0
    padding: 0 0 0 0
    background-color: $color-white
    color: $color-black
    font-family: $font-text
    -webkit-user-select: none  /* Chrome all / Safari all */
    -moz-user-select: none    /* Firefox all */
    -ms-user-select: none    /* IE 10+ */
    user-select: none

  a
    text-decoration: none
    color: inherit

</style>
