<template>
  <main>
    <topbar
      title="store order"
      subtitle=""
      search="">
      <span slot="column1" id="column-product" class="column">
        Product
      </span>
      <span slot="column2" class="column">
        Date
      </span>
      <span slot="column3" class="column">
        Qty
      </span>
    </topbar>
    <section id="list">
      <div v-for="(item, index) in data">
        <router-link :to="{ name: 'Detail', params: { item: item, index: index } }">
          <item :item="item"></item>
        </router-link>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>

  @import '../assets/styles/variables/allVariables.sass'

</style>

<script>
  import Topbar from '@/components/Topbar'
  import Item from '@/components/Item'
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'itemList',
    data () {
      return {}
    },
    components: {
      Topbar,
      Item
    },
    computed: {
      ...mapState([
        'data'
      ]),
      ...mapGetters([])
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
