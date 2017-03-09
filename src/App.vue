<template>
  <div id="app">
    <navbar v-if='$route.name!=="share"'></navbar>
      <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import navbar from 'components/navbar/navbar';
import silder from 'components/silder/silder';
import footers from 'components/footers/footers';
export default {
    components: {
      navbar,
      silder,
      footers
    }
}
</script>

<style>

</style>
