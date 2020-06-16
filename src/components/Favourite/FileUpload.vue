<template>
  <div>
    <v-container>
      <div>
        <div class="text-center">
          <div class="font-36">
            Upload File
          </div>
        </div>
        <div class="image-section">
          <v-row class="text-center">
            <v-col cols="12">
              <div>
                <div class="image-selection mt-3">
                  <!-- for deskstop -->
                  <div class="font-18">
                    <v-btn @click="$refs.fileInput1.click()"> Upload</v-btn>
                    <input
                      ref="fileInput1"
                      type="file"
                      multiple
                      style="display:none;"
                      @change="onchange"
                    />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <div>
            <router-link to="/details-info">
              <v-row gutters>
                <v-col
                  cols="4"
                  v-for="image in images"
                  :key="image.index"
                  to=""
                >
                  <div>
                    <v-img
                      :src="image.link"
                      alt="your image"
                      class="img-fluid"
                    />
                  </div>
                </v-col>
              </v-row>
            </router-link>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: null,
      images: []
    };
  },
  methods: {
    onchange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.images.push({ link: this.url });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/variables";
</style>
