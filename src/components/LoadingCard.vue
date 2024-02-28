<template>
    <v-row align="center" justify="center" class="pa-0 wrapper">
        <v-card class="pa-10 pb-8 ma-10" width="900" elevation="8" rounded="lg">
            <v-container style="height: 400px">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                Chargement en cours...
                </v-col>
                <v-col cols="6">
                <v-progress-linear
                    color="#1E88E5"
                    indeterminate
                    rounded
                    height="6"
                ></v-progress-linear>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-row>
</template>

<script>
import { useDisplay } from 'vuetify'
import { useToast, TYPE  } from "vue-toastification";

export default {
    
    components: {
    },
    props: {
    },
    setup(){
        const toast = useToast();
        const { height,width } = useDisplay()
        return {
            toast,width
        };
    },
    data: () => ({
    }),
    created() {
    },
    methods: {
    }
}
</script>