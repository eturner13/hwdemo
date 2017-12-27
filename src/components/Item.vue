<template>
  <article class="animated fadeIn">
    <span id="first" class="column">
      <div>
        {{ item.id}}
      </div>
      <div>
        {{ item.name.toUpperCase() }}
      </div>
    </span>
    <span class="column">
      {{ formattedCurrentDate }}
    </span>
    <span class="column">
      {{ itemAmount }}
    </span>
  </article>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

  article
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

    height: 60px
    font-weight: 600
    width: 100%
    border-bottom: 2px solid $color-light

    .column
      width: 40px
      padding: 6px 20px
      flex-grow: 1
      text-align: right

    #first
      flex: 0 0 40%
      text-align: left


</style>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'item',
    props: ['item'],
    data () {
      return {}
    },
    computed: {
      ...mapState([
        'currentDate'
      ]),
      ...mapGetters([
        'formattedCurrentDate'
      ]),
      itemAmount: function () {
        return this.item.orders.filter(order => order.date.getTime() === this.currentDate.getTime())[0].amount
      }
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
