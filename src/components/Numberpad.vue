<template>
  <section class="numberPad">
    <div id="top">
      <i class="material-icons md-36"
         @click="decrement"
         @mousedown="startRapidDecrement"
         @mouseleave="stopRapidDecrement"
         @mouseup="stopRapidDecrement"
         @touchstart="startRapidDecrement"
         @touchend="stopRapidDecrement"
         @touchcancel="stopRapidDecrement">
        remove
      </i>
      <span id='amount' :class="touched">
        {{ tempAmount }}
      </span>
      <i class="material-icons md-36"
         @click="increment"
         @mousedown="startRapidIncrement"
         @mouseleave="stopRapidIncrement"
         @mouseup="stopRapidIncrement"
         @touchstart="startRapidIncrement"
         @touchend="stopRapidIncrement"
         @touchcancel="stopRapidIncrement">
        add
      </i>
    </div>
    <div class="padrow">
      <span class="padbutton" @click="keypress(1)">
        1
      </span>
      <span class="padbutton" @click="keypress(2)">
        2
      </span>
      <span class="padbutton" @click="keypress(3)">
        3
      </span>
      <span class="padbutton" @click="previous">
        <i class="material-icons md-36">keyboard_arrow_up</i>
      </span>
    </div>
    <div class="padrow">
      <span class="padbutton" @click="keypress(4)">
        4
      </span>
      <span class="padbutton" @click="keypress(5)">
        5
      </span>
      <span class="padbutton" @click="keypress(6)">
        6
      </span>
      <span class="padbutton" @click="next">
        <i class="material-icons md-36">keyboard_arrow_down</i>
      </span>
    </div>
    <div class="padrow">
      <span class="padbutton" @click="keypress(7)">
        7
      </span>
      <span class="padbutton" @click="keypress(8)">
        8
      </span>
      <span class="padbutton" @click="keypress(9)">
        9
      </span>
      <span class="padbutton" @click="backspace">
        <i class="material-icons md-36">backspace</i>
      </span>
    </div>
    <div class="padrow">
      <span class="padbutton" @click="reset">
        <i class="material-icons md-36">replay</i>
      </span>
      <span class="padbutton" @click="keypress(0)">
        0
      </span>
      <span class="padbutton">
      </span>
      <span class="padbutton" @click="done">
        <div class="donebutton">
          DONE
        </div>
      </span>
    </div>
  </section>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

  .numberPad
    display: flex
    flex-flow: column nowrap
    justify-content: flex-start
    align-items: stretch

    width: 100%
    height: 50%

    #top
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center

      padding: 10px
      font-size: 22pt
      background: $color-light
      color: $color-dark

    .padrow
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center

      .padbutton
        font-size: 20pt
        width: 25%
        height: 40px
        padding: 14px
        text-align: center
        color: $color-dark
        transition: .05s

        .donebutton
          background: $color-dark
          color: $color-white
          padding: 10px
          font-size: 10pt
          text-align: center

      .padbutton:active
        background: $color-light

    #amount
      padding: 0 6px
      transition: .2s

    .pristine
      background: $color-mid
      padding: 0 3px
      border-left: 2px solid $color-dark
      border-right: 2px solid $color-light

    .dirty
      padding: 0 3px
      border-left: 2px solid $color-light
      border-right: 2px solid $color-mid

</style>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'numberpad',
    props: ['amount'],
    data () {
      return {
        initialAmount: this.amount,
        tempAmount: this.amount,
        interval: false,
        touched: 'pristine'
      }
    },
    computed: {
      ...mapState([]),
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([]),
      increment: function () {
        this.touched = 'dirty'
        this.tempAmount += 1
        this.$emit('changeValue', this.tempAmount)
      },
      startRapidIncrement: function () {
        if (!this.interval) {
          this.interval = setInterval(() => {
            this.increment()
          }, 60)
        }
      },
      stopRapidIncrement: function () {
        clearInterval(this.interval)
        this.interval = false
      },
      decrement: function () {
        if (this.tempAmount >= 1) {
          this.touched = 'dirty'
          this.tempAmount -= 1
          this.$emit('changeValue', this.tempAmount)
        }
      },
      startRapidDecrement: function () {
        if (!this.interval) {
          this.interval = setInterval(() => {
            this.decrement()
          }, 60)
        }
      },
      stopRapidDecrement: function () {
        clearInterval(this.interval)
        this.interval = false
      },
      keypress: function (input) {
        let currentString = this.tempAmount.toString()
        if (this.touch()) {
          currentString = ''
        }
        currentString += input
        this.tempAmount = parseInt(currentString)
        this.$emit('changeValue', this.tempAmount)
      },
      backspace: function () {
        let currentString = this.tempAmount.toString()
        if (this.touch()) {
          currentString = ''
        }
        if (currentString.length > 1) {
          currentString = currentString.slice(0, -1)
        } else currentString = '0'
        this.tempAmount = parseInt(currentString)
        this.$emit('changeValue', this.tempAmount)
      },
      reset: function () {
        this.tempAmount = this.initialAmount
        this.$emit('changeValue', this.tempAmount)
      },
      next: function () {
        this.touched = 'pristine'
        this.$emit('next')
      },
      previous: function () {
        this.touched = 'pristine'
        this.$emit('previous')
      },
      done: function () {
        this.touched = 'pristine'
        this.$emit('done')
      },
      touch: function () {
        if (this.touched === 'pristine') {
          this.touched = 'dirty'
          return true
        } else return false
      },
      cursorBlink: function () {
        const cursorEl = document.getElementById('amount')
        const interval = 500
        setInterval(() => {
          if (this.touched === 'pristine') {
            cursorEl.style.borderRight = '2px solid #DFDFDF'
            cursorEl.style.borderLeft = '2px solid #DFDFDF'
            setTimeout(() => {
              cursorEl.style.borderLeft = '2px solid #616161'
            }, interval / 2)
          } else {
            cursorEl.style.borderLeft = '2px solid #DFDFDF'
            cursorEl.style.borderRight = '2px solid #DFDFDF'
            setTimeout(() => {
              cursorEl.style.borderRight = '2px solid #999999'
            }, interval / 2)
          }
        }, interval)
      }
    },
    watch: {
      amount: function () {
        this.tempAmount = this.amount
      },
      tempAmount: function () {
        if (this.touched === 'pristine') {
          this.initialAmount = this.tempAmount
        }
      }
    },
    mounted () {
      this.cursorBlink()
    }
  }
</script>
