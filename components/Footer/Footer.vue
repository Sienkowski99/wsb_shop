<template>
  <footer>
    <Newsletter/>
    <Links/>
    <Info/>
  </footer>
</template>

<script>
import Newsletter from './Newsletter.vue'
import Links from './Links.vue'
import Info from './Info.vue'

export default {
  components: {
    Newsletter,
    Info,
    Links
  }
}
</script>
