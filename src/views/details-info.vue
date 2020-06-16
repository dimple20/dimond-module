<template>
  <div>
    <Header v-bind:headerNavigations="headerNavigations" />
    <v-content>
      <detail />
    </v-content>
  </div>
</template>
<script>
import Header from "@/components/Favourite/Header.vue";
import detail from "@/components/Favourite/details.vue";

export default {
  name: "FindMember",
  components: {
    Header,
    detail
  },
  data() {
    return {
      user: {},
      headerNavigations: [
        {
          name: "FAVOURITE",
          to: "/favourite-screen",
          subname: "10 OF 10",
          deepBtn: false
        }
      ]
    };
  }
};
</script>
<style lang="scss"></style>
