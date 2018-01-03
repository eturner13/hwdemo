<template>
  <main id="layout-numberpad">
    <div :style="{ height: screenTop }" class="scroll">
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
        <order
          v-for="(order, index) in data.orders"
          :class="'order-' + index"
          :key="index"
          :order="order"
          :index="index"
          v-on:selectOrder="selectOrder(index)">
        </order>
      </section>
    </div>
    <save-button
      :style="{ height: screenBottom }"
      v-show="showSave"
      v-on:save="save">
    </save-button>
    <numberpad
      :style="{ height: screenBottom }"
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
        data: {},
        maxHeight: document.documentElement.clientHeight + 'px',
        screenTop: document.documentElement.clientHeight + 'px',
        screenBottom: '0px'
      }
    },
    props: ['item', 'index'],
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
      },
      copyData: function () {
        let copy = JSON.parse(JSON.stringify(this.item))
        copy.orders = copy.orders.map(order => {
          order.date = new Date(order.date)
          return order
        })
        return copy
      }
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([
        'saveItem'
      ]),
      selectOrder: function (index) {
        this.selectedOrder = index
        this.setFocus(this.selectedOrder)
        this.openNumpad()
        setTimeout(() => {
          document.getElementById('order-' + this.selectedOrder).scrollIntoView(false)
        }, 100)
      },
      save: function () {
        this.saveItem({ data: this.data, index: this.index })
        this.$router.push({ name: 'List' })
      },
      changeValue: function (value) {
        this.selectedAmount = value
        this.setFocus(this.selectedOrder)
      },
      next: function () {
        if (document.getElementById('order-' + (this.selectedOrder + 1))) {
          this.selectedOrder += 1
          this.setFocus(this.selectedOrder)
          document.getElementById('order-' + this.selectedOrder).scrollIntoView(false)
        } else this.setFocus(this.selectedOrder)
      },
      previous: function () {
        if (document.getElementById('order-' + (this.selectedOrder - 1))) {
          this.selectedOrder -= 1
          this.setFocus(this.selectedOrder)
          document.getElementById('order-' + this.selectedOrder).scrollIntoView(false)
        } else this.setFocus(this.selectedOrder)
      },
      done: function () {
        document.getElementById('app').focus()
        this.openSave()
      },
      setFocus: function (index) {
        document.getElementById('order-' + index).focus()
      },
      openNumpad: function () {
        this.showSave = false
        this.screenTop = this.maxHeight
        this.screenBottom = '0px'
        this.showNumpad = true
        while (parseInt(this.screenBottom) < (parseInt(this.maxHeight) * 0.5)) {
          this.screenTop = (parseInt(this.screenTop) - 1) + 'px'
          this.screenBottom = (parseInt(this.screenBottom) + 1) + 'px'
          setTimeout(() => {}, 30)
        }
      },
      openSave: function () {
        this.showNumpad = false
        this.screenTop = this.maxHeight
        this.screenBottom = '0px'
        this.showSave = true
        while (parseInt(this.screenBottom) < (parseInt(this.maxHeight) * 0.1)) {
          this.screenTop = (parseInt(this.screenTop) - 1) + 'px'
          this.screenBottom = (parseInt(this.screenBottom) + 1) + 'px'
          setTimeout(() => {
          }, 30)
        }
      }
    },
    created () {
      this.data = this.copyData
    },
    mounted () {
      if (!this.item) {
        this.$router.push({name: 'List'})
      }
      this.openSave()
      window.scroll(0, 0)
    }
  }
</script>
