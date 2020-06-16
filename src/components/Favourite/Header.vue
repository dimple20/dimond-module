<template>
  <div class="header-section">
    <!-- SEARCH APP BAR  -->
    <v-app-bar
      app
      flat
      color="primary accent-4"
      dark
      v-for="headerNavigation in headerNavigations"
      v-bind:key="headerNavigation.name"
    >
      <v-btn icon to="/" class="logo-content">
        <v-img class="logo" src="@/assets/images/logo-terra-cor.png"></v-img>
      </v-btn>
      
      <v-spacer></v-spacer>
      <div class="mr-2">
       
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: ["headerNavigations", "name"],
  name: "favo-header-section",
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      hamburgerChange: "changeHamburger",
    }),
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
.header-section {
  .logo-content{
  padding: 0px 200px;
  }
  .logo {
    height: 48px;
    width: 48px;
  }
  .v-sheet {
    position: fixed;
    z-index: 10;
    // height: 0px;
    // padding: 5px;
    color: $white;
    background-color: $active-black !important;
  }
  .theme--light.v-btn.v-btn--icon {
    color: $white;
  }
  .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
    opacity: 0;
  }
  .title-content {
    // padding: 0px 64px;
    margin: 0px 60px;
    text-align: center;
    .first-name {
      font-size: $font-18;
    }
    .second-name {
      font-size: $font-12;
    }
  }
}
</style>
