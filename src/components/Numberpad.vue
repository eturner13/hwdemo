<template>
  <section id="numberPad">
    <div id="top">
      <i class="material-icons md-36"
         @click="decrement"
         @mousedown="startRapidDecrement"
         @mouseleave="stopRapidDecrement"
         @mouseup="stopRapidDecrement"
         @touchstart="startRapidDecrement"
         @touchend="stopRapidDecrement"
         @touchcancel="stopRapidDecrement">remove</i>
      <span :class="touched">
        {{ tempAmount }}
      </span>
      <i class="material-icons md-36"
         @click="increment"
         @mousedown="startRapidIncrement"
         @mouseleave="stopRapidIncrement"
         @mouseup="stopRapidIncrement"
         @touchstart="startRapidIncrement"
         @touchend="stopRapidIncrement"
         @touchcancel="stopRapidIncrement">add</i></div>
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

  #numberPad
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

    .pristine
      background: $color-mid
      padding: 2px

    .dirty
      padding: 2px

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
      }
    },
    watch: {
      amount: function () {
        this.tempAmount = this.amount
      }
    }
  }
</script>
