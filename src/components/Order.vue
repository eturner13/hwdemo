<template>
  <article class="animated fadeIn">
    <span id="first" class="column">
      <span>
        {{ dayOfWeekName.toUpperCase() }}
      </span>
      <span>
        {{ formattedDate }}
      </span>
    </span>
    <span class="column">
      {{ order.promo }}
    </span>
    <span class="column">
      {{ order.fixed }}
    </span>
    <span class="column">
      <div v-if="isEditable">
        <div class="editable" @click="selectOrder">
          <input
            :id="'order-' + index"
            class="input-amount"
            :placeholder="order.amount"
            readonly>
        </div>
      </div>
      <div v-else>
        {{ order.amount }}
      </div>
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
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center
      flex: 0 0 23%
      padding: 6px 10px
      text-align: left

    .input-amount
      position: relative
      right: 6px
      border: 2px solid $color-mid
      border-radius: 2px
      text-align: right

    .input-amount:focus
      border: 2px solid $color-black


</style>

<script>
  import moment from 'moment'
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'order',
    props: ['order', 'index'],
    data () {
      return {
        date: new Date(this.order.date)
      }
    },
    computed: {
      ...mapState([
        'currentDate',
        'editableDate'
      ]),
      ...mapGetters([
      ]),
      dayOfWeekName: function () {
        return moment(this.date).format('ddd')
      },
      formattedDate: function () {
        return (this.date.getMonth() + 1) + '/' + this.date.getDate()
      },
      isEditable: function () {
        return this.date.getTime() >= this.editableDate
      }
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([]),
      selectOrder: function () {
        this.$emit('selectOrder')
      }
    }
  }
</script>
