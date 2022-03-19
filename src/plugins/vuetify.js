import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
        light: {
        primary: "#FFB300",
        success: "#4CAF50",
        accent: "#E0E0E0",
        accent2: "#EEEEEE",
        error: "#F44336",
        },
        },
        },
});
