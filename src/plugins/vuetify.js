import Vue from "vue";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        // dark: true,//Dark Theme ON
        dark: false, //Light Theme ON
        themes: {
            light: {
                // primary: "#F03C54",
                lightGrey: "#e6e3e3",
                darkBlack: "#000"
            },
            dark: {
                // primary: "#F03C54",
                lightGrey: "#e6e3e3",
                darkBlack: "#000"
            }
        }
    }
});