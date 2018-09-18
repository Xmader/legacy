
<template>
    <vue-particles color="#fff"></vue-particles>
</template>

<script>
import VueParticles from 'vue-particles/src/vue-particles/vue-particles.vue'

export default {
    "components": {
        "vue-particles": VueParticles
    },
}
</script>

<style>
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 99%;
}
</style>


