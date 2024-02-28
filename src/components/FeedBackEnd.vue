<template>
    <v-card elevation="1">
        <v-row
            class="pa-10 align-center justify-center text-center"
            no-gutters
        >
            <div class="text-h4 text-center">{{ firstText }}</div>
            <v-divider class="mt-5"></v-divider>
            <div class="mt-5 text-subtitle-1">
            <p>
                Merci d'avoir terminé {{ secondText }} " {{ evaluationName }} "
            </p>
            <p>
                Vos réponses ont été enregistrées, nous reviendrons vers
                vous très prochainement pour vous communiquer les
                résultats complets.
            </p>
            <p>
                En attendant, vous pouvez continuer à vous évaluer et
                progresser sur la plateforme ENACP.
            </p>
            <p>Merci de votre fidélité et à bientôt !</p>
            </div>
            <v-divider class="mt-5"></v-divider>
            <div v-if="secondButtonShow">
                <v-row>
                    <v-col>
                        <v-btn
                        class="mt-10"
                        size="small"
                        variant="outlined"
                        color="red"
                        to="/"
                        >
                        Revenir à l'accueil
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn
                        class="mt-10"
                        size="small"
                        variant="outlined"
                        color="#1E88E5"
                        :to="urlSecondButton"
                        >
                        {{ secondButtonText }}
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
            <div v-else>
                <v-btn
                    class="mt-10"
                    size="small"
                    variant="outlined"
                    color="#1E88E5"
                    :to="'/'"
                >
                Revenir à l'accueil
                </v-btn>
            </div>
        </v-row>
    </v-card>
</template>

<script>
import { useDisplay } from 'vuetify'
import { useToast, TYPE  } from "vue-toastification";

export default {
    
    components: {
    },
    props: {
        firstText: {
            type: String,
            default: 'Evaluation terminée',
            required: true,
        },
        secondText: {
            type: String,
            default: 'l\'évaluation',
            required: true,
        },
        evaluationName: {
            type: String,
            default: '',
            required: true,
        },
        secondButtonText: {
            type: String,
            default: 'Retour au parcours',
            required: false,
        },
        secondButtonShow: {
            type: Boolean,
            default: false,
            required: false,
        },
        urlSecondButton: {
            type: String,
            default: '',
            required: false,
        },
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