<template>
  <div>
    <NavDrawer />
    <Header v-bind:headerNavigations="headerNavigations" />
    <v-content>
      <FileUpload />
    </v-content>
  </div>
</template>
<script>
import Header from "@/components/Favourite/Header.vue";
import FileUpload from "@/components/Favourite/FileUpload.vue";

export default {
  name: "FindMember",
  components: {
    Header,
    FileUpload,
  },
  data() {
    return {
      user: {},
      headerNavigations: [
        {
          name: "FAVOURITE",
          to: "/favourite-screen",
          subname: "10 OF 10",
          deepBtn: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
