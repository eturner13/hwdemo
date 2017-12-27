<template>
  <main id="layout-numberpad">
    <topbar
      title="item order"
      cancel=""
      :subtitle="item.id + ' ' + item.name">
      <span slot="column1" id="column-detail-date" class="column">
        Date
      </span>
      <span slot="column2" class="column">
        Promo
      </span>
      <span slot="column3" class="column">
        Fixed
      </span>
      <span slot="column4" class="column">
        Order
      </span>
    </topbar>
    <section id="list">
      <article v-for="(order, index) in data.orders">
        <order :order="order" :index="index" v-on:selectOrder="selectOrder(index)"></order>
      </article>
    </section>
    <save-button
      v-if="showSave"
      v-on:save="save">
    </save-button>
    <numberpad
      class="animated slideUp"
      v-if="showNumpad"
      :amount="selectedAmount"
      v-on:next="next"
      v-on:previous="previous"
      v-on:done="done"
      v-on:changeValue="changeValue">
    </numberpad>
  </main>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

</style>

<script>
  import Topbar from '@/components/Topbar'
  import Numberpad from '@/components/Numberpad'
  import SaveButton from '@/components/SaveButton'
  import Order from '@/components/Order'
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'itemDetail',
    data () {
      return {
        showSave: true,
        showNumpad: false,
        selectedOrder: 0,
        data: JSON.parse(JSON.stringify(this.item))
      }
    },
    props: ['item'],
    components: {
      Topbar,
      Numberpad,
      SaveButton,
      Order
    },
    computed: {
      ...mapState([]),
      ...mapGetters([]),
      selectedAmount: {
        get: function () {
          return this.data.orders[this.selectedOrder].amount
        },
        set: function (value) {
          this.data.orders[this.selectedOrder].amount = value
        }
      }
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([
        'saveItem'
      ]),
      save: function () {
        this.saveItem(this.data)
        this.$router.push({ name: 'List' })
      },
      changeValue: function (value) {
        this.selectedAmount = value
        this.setFocus(this.selectedOrder)
      },
      selectOrder: function (index) {
        this.selectedOrder = index
        this.setFocus(this.selectedOrder)
        this.showSave = false
        this.showNumpad = true
      },
      next: function () {
        if (document.getElementById('order-' + (this.selectedOrder + 1))) {
          this.selectedOrder += 1
          this.setFocus(this.selectedOrder)
        } else this.setFocus(this.selectedOrder)
      },
      previous: function () {
        if (document.getElementById('order-' + (this.selectedOrder - 1))) {
          this.selectedOrder -= 1
          this.setFocus(this.selectedOrder)
        } else this.setFocus(this.selectedOrder)
      },
      done: function () {
        document.getElementById('app').focus()
        this.showNumpad = false
        this.showSave = true
      },
      setFocus: function (index) {
        document.getElementById('order-' + index).focus()
      }
    },
    mounted () {
      if (!this.item) {
        this.$router.push({name: 'List'})
      }
      window.scroll(0, 0)
    }
  }
</script>
