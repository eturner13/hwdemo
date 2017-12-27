<template>
  <header>
    <section id="title">
      <span id="cancel" class="animated fadeIn" @click="returnToRoot" v-show="cancel">
        <i class="material-icons md-36">navigate_before</i>
      </span>
      <span class="animated fadeIn">
        {{ title.toUpperCase() }}
      </span>
    </section>
    <section id="search" class="animated fadeIn" v-show="search">
      <span id="search-input">
        Item #
      </span>
      <span id="search-button">
        <i class="material-icons md-36">search</i>
      </span>
    </section>
    <section id="subtitle" class="animated fadeIn" v-show="subtitle">
      {{ subtitle.toUpperCase() }}
    </section>
    <section id="columns" class="animated fadeIn">
      <slot name="column1"></slot>
      <slot name="column2"></slot>
      <slot name="column3"></slot>
      <slot name="column4"></slot>
    </section>
  </header>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

  header
    position: relative

    display: flex
    flex-flow: column nowrap
    justify-content: flex-start
    align-items: stretch

    width: 100%

    #title
      display: flex
      flex-flow: row nowrap
      justify-content: center
      align-items: center

      padding: 10px

      background-color: $color-black
      color: $color-white
      font-size: 20pt

      #cancel
        position: absolute
        left: 0
        margin: 4px 0 0 10px

    #search
      display: flex
      flex-flow: row nowrap
      align-items: center

      width: 100%

      border-bottom: 2px solid $color-mid

      #search-input
        flex: 1 0 auto
        padding: 0 20px

      #search-button
        height: 48px
        flex: 0 0 60px
        display: flex
        justify-content: center
        align-items: center
        color: $color-dark
        border-left: 2px solid $color-mid

    #subtitle
      background: darken($color-light, 10%)
      padding: 8px 20px
      font-weight: 600

    #columns
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center

      width: 100%

      background: $color-light

      .column
        width: 40px
        padding: 6px 20px
        flex-grow: 1
        text-align: right

      #column-product
        flex: 0 0 40%
        text-align: left

      #column-detail-date
        flex: 0 0 23%
        text-align: left

</style>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'topbar',
    props: {
      title: String,
      cancel: Boolean,
      search: Boolean,
      subtitle: String
    },
    data () {
      return {}
    },
    computed: {
      ...mapState([]),
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([]),
      returnToRoot () {
        this.$router.push('/')
      }
    }
  }
</script>
