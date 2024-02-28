import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useFeedQuestions = defineStore("feedQuestions", {
    state: () => ({
        evaluation: {
            sessionContenu: {
                id: 98,
                contenu: {
                    id: 60,
                    libelle: "Bilan007",
                    description: "-",
                    typeContenu: {
                        id: 3,
                        libelle: "Bilan"
                    },
                    typeEpreuve: {
                        id: 1,
                        libelle: "Correction automatique"
                    },
                    contenuAnswerWeight: {
                        id: 1,
                        good_answer_value: 1,
                        bad_answer_value: 0
                    },
                    slug: "bilan007",
                    typeEnq: 0,
                    timeReplay: "00:00:00:20",
                    hasPrivate: false,
                    hasVisible: true,
                    alea: false,
                    formation: true,
                    duration: "02:00:00:0",
                    delay: "02:00:00:00"
                },
                sessionStartAt: "2024-02-28 16:32:19",
                sessionEndAt: null
            },
            duration: "01:23:59:59",
            delay: "01:23:59:59",
            questions: [
                {
                    id: 110,
                    libelle: "Que feriez-vous si vous remarquiez une activité suspecte, comme un logiciel inconnu s'exécutant sur votre ordinateur professionnel ? ",
                    titre: "[Pub] Q4",
                    description: "-",
                    propriete: null,
                    typeQuestion: {
                        id: 1,
                        code: 1,
                        libelle: "Liste à choix (unique)"
                    },
                    note: null,
                    goodWeight: null,
                    badWeight: null,
                    order: 3,
                    files: [],
                    questionAnswers: [
                        {
                            id: 400,
                            value: "J'éteins mon ordinateur en espérant que le problème disparaîtra. ",
                            question: {
                                id: 110,
                                libelle: "Que feriez-vous si vous remarquiez une activité suspecte, comme un logiciel inconnu s'exécutant sur votre ordinateur professionnel ? ",
                                titre: "[Pub] Q4",
                                description: "-",
                                typeQuestion: {
                                    id: 1,
                                    code: 1,
                                    libelle: "Liste à choix (unique)"
                                },
                                files: [],
                                questions: [],
                            },
                        },
                        {
                            id: 399,
                            value: "Je contacte immédiatement le service informatique. ",
                            question: {
                                id: 110,
                                libelle: "Que feriez-vous si vous remarquiez une activité suspecte, comme un logiciel inconnu s'exécutant sur votre ordinateur professionnel ? ",
                                titre: "[Pub] Q4",
                                description: "-",
                                typeQuestion: {
                                    code: 1,
                                    libelle: "Liste à choix (unique)"
                                },
                            },
                        },
                        {
                            id: 398,
                            value: "J'essaie de résoudre le problème moi-même.",
                            question: {
                                id: 110,
                                "libelle": "Que feriez-vous si vous remarquiez une activité suspecte, comme un logiciel inconnu s'exécutant sur votre ordinateur professionnel ? ",
                                "titre": "[Pub] Q4",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 1,
                                    "code": 1,
                                    "libelle": "Liste à choix (unique)"
                                },
                                "competence": {
                                    "id": 15,
                                    "libelle": "[Pub] procédure",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": false,
                            "ordre": null
                        },
                        {
                            "id": 397,
                            "value": "J'ignore cela, pensant que c'est probablement une mise à jour",
                            "question": {
                                "id": 110,
                                "libelle": "Que feriez-vous si vous remarquiez une activité suspecte, comme un logiciel inconnu s'exécutant sur votre ordinateur professionnel ? ",
                                "titre": "[Pub] Q4",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 1,
                                    "code": 1,
                                    "libelle": "Liste à choix (unique)"
                                },
                                "competence": {
                                    "id": 15,
                                    "libelle": "[Pub] procédure",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": false,
                            "ordre": null
                        }
                    ],
                    "questions": [],
                    "hasPrivate": false,
                    "createdAt": 1705442765819
                },
                {
                    "id": 111,
                    "libelle": "Comment réagissez-vous lorsqu'on vous demande des informations confidentielles ou sensibles au téléphone ou par email, même si la demande semble provenir d'une source légitime ? ",
                    "titre": "[Pub] Q5",
                    "description": "-",
                    "owner": {
                        "id": 4,
                        "libelle": "admin2",
                        "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                        "name": "Ossara julienne",
                        "type": "admin",
                        "account": {
                            "id": 2,
                            "email": "juliennekoutandji@gmail.com",
                            "avatar": null,
                            "role": {
                                "id": 1,
                                "libelle": "ROLE_ADMIN",
                                "createdAt": "2023-06-16 15:35:29"
                            },
                            "lastLoginIp": "196.171.120.14",
                            "emailVerified": false,
                            "actif": true,
                            "banished": false,
                            "actifAt": "2024-01-16 08:58:12",
                            "desableAt": null,
                            "banishedAt": null,
                            "emailVerifiedAt": null,
                            "lastLoginAt": "2024-02-28 15:57:43",
                            "resetToken": null,
                            "expiryReset": null,
                            "createdAt": "2024-01-16 08:57:58",
                            "lastName": "KOUTANDJI",
                            "firstName": "Ossara julienne",
                            "username": "admin-1"
                        }
                    },
                    "propriete": null,
                    "categorieQuestion": {
                        "id": 1,
                        "libelle": "Théorique"
                    },
                    "typeQuestion": {
                        "id": 1,
                        "code": 1,
                        "libelle": "Liste à choix (unique)"
                    },
                    "competence": {
                        "id": 15,
                        "libelle": "[Pub] procédure",
                        "description": "-",
                        "domaineCompetence": {
                            "id": 3,
                            "name": "[Pub] sensibilisation-n",
                            "description": "-",
                            "owner": {
                                "id": 4,
                                "libelle": "admin2",
                                "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                "name": "Ossara julienne",
                                "type": "admin",
                                "account": {
                                    "id": 2,
                                    "email": "juliennekoutandji@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "196.171.120.14",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": "2024-01-16 08:58:12",
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 15:57:43",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2024-01-16 08:57:58",
                                    "lastName": "KOUTANDJI",
                                    "firstName": "Ossara julienne",
                                    "username": "admin-1"
                                }
                            },
                            "hasPrivate": false
                        }
                    },
                    "note": null,
                    "goodWeight": null,
                    "badWeight": null,
                    "order": 4,
                    "files": [],
                    "questionAnswers": [
                        {
                            "id": 404,
                            "value": "Je transmets la demande à mon supérieur pour obtenir des conseils.",
                            "question": {
                                "id": 111,
                                "libelle": "Comment réagissez-vous lorsqu'on vous demande des informations confidentielles ou sensibles au téléphone ou par email, même si la demande semble provenir d'une source légitime ? ",
                                "titre": "[Pub] Q5",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 1,
                                    "code": 1,
                                    "libelle": "Liste à choix (unique)"
                                },
                                "competence": {
                                    "id": 15,
                                    "libelle": "[Pub] procédure",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": false,
                            "ordre": null
                        },
                        {
                            "id": 403,
                            "value": "Je demande plus d'informations avant de répondre.",
                            "question": {
                                "id": 111,
                                "libelle": "Comment réagissez-vous lorsqu'on vous demande des informations confidentielles ou sensibles au téléphone ou par email, même si la demande semble provenir d'une source légitime ? ",
                                "titre": "[Pub] Q5",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 1,
                                    "code": 1,
                                    "libelle": "Liste à choix (unique)"
                                },
                                "competence": {
                                    "id": 15,
                                    "libelle": "[Pub] procédure",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": false,
                            "ordre": null
                        },
                        {
                            "id": 402,
                            "value": "Je refuse de donner des informations et signale la demande au service compétent.",
                            "question": {
                                "id": 111,
                                "libelle": "Comment réagissez-vous lorsqu'on vous demande des informations confidentielles ou sensibles au téléphone ou par email, même si la demande semble provenir d'une source légitime ? ",
                                "titre": "[Pub] Q5",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 1,
                                    "code": 1,
                                    "libelle": "Liste à choix (unique)"
                                },
                                "competence": {
                                    "id": 15,
                                    "libelle": "[Pub] procédure",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 401,
                            "value": "Je fournis les informations demandées si la source semble fiable. ",
                            "question": {
                                "id": 111,
                                "libelle": "Comment réagissez-vous lorsqu'on vous demande des informations confidentielles ou sensibles au téléphone ou par email, même si la demande semble provenir d'une source légitime ? ",
                                "titre": "[Pub] Q5",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 1,
                                    "code": 1,
                                    "libelle": "Liste à choix (unique)"
                                },
                                "competence": {
                                    "id": 15,
                                    "libelle": "[Pub] procédure",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": false,
                            "ordre": null
                        }
                    ],
                    "questions": [],
                    "hasPrivate": false,
                    "createdAt": 1705442866873
                },
                {
                    "id": 143,
                    "libelle": "Comment allez vous ?",
                    "titre": "[Pub]Jauge multi",
                    "description": "-",
                    "owner": {
                        "id": 4,
                        "libelle": "admin2",
                        "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                        "name": "Ossara julienne",
                        "type": "admin",
                        "account": {
                            "id": 2,
                            "email": "juliennekoutandji@gmail.com",
                            "avatar": null,
                            "role": {
                                "id": 1,
                                "libelle": "ROLE_ADMIN",
                                "createdAt": "2023-06-16 15:35:29"
                            },
                            "lastLoginIp": "196.171.120.14",
                            "emailVerified": false,
                            "actif": true,
                            "banished": false,
                            "actifAt": "2024-01-16 08:58:12",
                            "desableAt": null,
                            "banishedAt": null,
                            "emailVerifiedAt": null,
                            "lastLoginAt": "2024-02-28 15:57:43",
                            "resetToken": null,
                            "expiryReset": null,
                            "createdAt": "2024-01-16 08:57:58",
                            "lastName": "KOUTANDJI",
                            "firstName": "Ossara julienne",
                            "username": "admin-1"
                        }
                    },
                    "propriete": null,
                    "categorieQuestion": {
                        "id": 1,
                        "libelle": "Théorique"
                    },
                    "typeQuestion": {
                        "id": 7,
                        "code": 6,
                        "libelle": "Retour d'expérience"
                    },
                    "competence": {
                        "id": 30,
                        "libelle": "CompetenceFromBilan",
                        "description": "",
                        "domaineCompetence": {
                            "id": 9,
                            "name": "DomaineFromBilan2",
                            "description": "",
                            "owner": {
                                "id": 1,
                                "libelle": "admin1",
                                "designation": "Propriété de l'admin admin admin",
                                "name": "",
                                "type": "admin",
                                "account": {
                                    "id": 1,
                                    "email": "sysadmin@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "102.64.172.133",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": null,
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 14:49:39",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2023-06-16 15:35:29",
                                    "lastName": "admin",
                                    "firstName": "admin",
                                    "username": "sysadmin"
                                }
                            },
                            "hasPrivate": false
                        }
                    },
                    "note": null,
                    "goodWeight": null,
                    "badWeight": null,
                    "order": 2,
                    "files": [],
                    "questionAnswers": [
                        {
                            "id": 528,
                            "value": "Bof",
                            "question": {
                                "id": 143,
                                "libelle": "Comment allez vous ?",
                                "titre": "[Pub]Jauge multi",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 30,
                                    "libelle": "CompetenceFromBilan",
                                    "description": "",
                                    "domaineCompetence": {
                                        "id": 9,
                                        "name": "DomaineFromBilan2",
                                        "description": "",
                                        "owner": {
                                            "id": 1,
                                            "libelle": "admin1",
                                            "designation": "Propriété de l'admin admin admin",
                                            "name": "",
                                            "type": "admin",
                                            "account": {
                                                "id": 1,
                                                "email": "sysadmin@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "102.64.172.133",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": null,
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 14:49:39",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2023-06-16 15:35:29",
                                                "lastName": "admin",
                                                "firstName": "admin",
                                                "username": "sysadmin"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 144,
                                        "libelle": "Bien etre ",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 146,
                                        "libelle": "Travail",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 145,
                                        "libelle": "Sante mental",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 527,
                            "value": "Mal",
                            "question": {
                                "id": 143,
                                "libelle": "Comment allez vous ?",
                                "titre": "[Pub]Jauge multi",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 30,
                                    "libelle": "CompetenceFromBilan",
                                    "description": "",
                                    "domaineCompetence": {
                                        "id": 9,
                                        "name": "DomaineFromBilan2",
                                        "description": "",
                                        "owner": {
                                            "id": 1,
                                            "libelle": "admin1",
                                            "designation": "Propriété de l'admin admin admin",
                                            "name": "",
                                            "type": "admin",
                                            "account": {
                                                "id": 1,
                                                "email": "sysadmin@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "102.64.172.133",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": null,
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 14:49:39",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2023-06-16 15:35:29",
                                                "lastName": "admin",
                                                "firstName": "admin",
                                                "username": "sysadmin"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 144,
                                        "libelle": "Bien etre ",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 146,
                                        "libelle": "Travail",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 145,
                                        "libelle": "Sante mental",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 526,
                            "value": "Bien",
                            "question": {
                                "id": 143,
                                "libelle": "Comment allez vous ?",
                                "titre": "[Pub]Jauge multi",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 30,
                                    "libelle": "CompetenceFromBilan",
                                    "description": "",
                                    "domaineCompetence": {
                                        "id": 9,
                                        "name": "DomaineFromBilan2",
                                        "description": "",
                                        "owner": {
                                            "id": 1,
                                            "libelle": "admin1",
                                            "designation": "Propriété de l'admin admin admin",
                                            "name": "",
                                            "type": "admin",
                                            "account": {
                                                "id": 1,
                                                "email": "sysadmin@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "102.64.172.133",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": null,
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 14:49:39",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2023-06-16 15:35:29",
                                                "lastName": "admin",
                                                "firstName": "admin",
                                                "username": "sysadmin"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 144,
                                        "libelle": "Bien etre ",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 146,
                                        "libelle": "Travail",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 145,
                                        "libelle": "Sante mental",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 525,
                            "value": "Bof",
                            "question": {
                                "id": 143,
                                "libelle": "Comment allez vous ?",
                                "titre": "[Pub]Jauge multi",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 30,
                                    "libelle": "CompetenceFromBilan",
                                    "description": "",
                                    "domaineCompetence": {
                                        "id": 9,
                                        "name": "DomaineFromBilan2",
                                        "description": "",
                                        "owner": {
                                            "id": 1,
                                            "libelle": "admin1",
                                            "designation": "Propriété de l'admin admin admin",
                                            "name": "",
                                            "type": "admin",
                                            "account": {
                                                "id": 1,
                                                "email": "sysadmin@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "102.64.172.133",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": null,
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 14:49:39",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2023-06-16 15:35:29",
                                                "lastName": "admin",
                                                "firstName": "admin",
                                                "username": "sysadmin"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 144,
                                        "libelle": "Bien etre ",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 146,
                                        "libelle": "Travail",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 145,
                                        "libelle": "Sante mental",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 524,
                            "value": "Mal",
                            "question": {
                                "id": 143,
                                "libelle": "Comment allez vous ?",
                                "titre": "[Pub]Jauge multi",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 30,
                                    "libelle": "CompetenceFromBilan",
                                    "description": "",
                                    "domaineCompetence": {
                                        "id": 9,
                                        "name": "DomaineFromBilan2",
                                        "description": "",
                                        "owner": {
                                            "id": 1,
                                            "libelle": "admin1",
                                            "designation": "Propriété de l'admin admin admin",
                                            "name": "",
                                            "type": "admin",
                                            "account": {
                                                "id": 1,
                                                "email": "sysadmin@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "102.64.172.133",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": null,
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 14:49:39",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2023-06-16 15:35:29",
                                                "lastName": "admin",
                                                "firstName": "admin",
                                                "username": "sysadmin"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 144,
                                        "libelle": "Bien etre ",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 146,
                                        "libelle": "Travail",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 145,
                                        "libelle": "Sante mental",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 523,
                            "value": "Bien",
                            "question": {
                                "id": 143,
                                "libelle": "Comment allez vous ?",
                                "titre": "[Pub]Jauge multi",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 30,
                                    "libelle": "CompetenceFromBilan",
                                    "description": "",
                                    "domaineCompetence": {
                                        "id": 9,
                                        "name": "DomaineFromBilan2",
                                        "description": "",
                                        "owner": {
                                            "id": 1,
                                            "libelle": "admin1",
                                            "designation": "Propriété de l'admin admin admin",
                                            "name": "",
                                            "type": "admin",
                                            "account": {
                                                "id": 1,
                                                "email": "sysadmin@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "102.64.172.133",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": null,
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 14:49:39",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2023-06-16 15:35:29",
                                                "lastName": "admin",
                                                "firstName": "admin",
                                                "username": "sysadmin"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 144,
                                        "libelle": "Bien etre ",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 146,
                                        "libelle": "Travail",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    },
                                    {
                                        "id": 145,
                                        "libelle": "Sante mental",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 30,
                                            "libelle": "CompetenceFromBilan",
                                            "description": "",
                                            "domaineCompetence": {
                                                "id": 9,
                                                "name": "DomaineFromBilan2",
                                                "description": "",
                                                "owner": {
                                                    "id": 1,
                                                    "libelle": "admin1",
                                                    "designation": "Propriété de l'admin admin admin",
                                                    "name": "",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 1,
                                                        "email": "sysadmin@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "102.64.172.133",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": null,
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 14:49:39",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2023-06-16 15:35:29",
                                                        "lastName": "admin",
                                                        "firstName": "admin",
                                                        "username": "sysadmin"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        }
                    ],
                    "questions": [
                        {
                            "id": 144,
                            "libelle": "Bien etre ",
                            "titre": "",
                            "description": "",
                            "owner": {
                                "id": 4,
                                "libelle": "admin2",
                                "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                "name": "Ossara julienne",
                                "type": "admin",
                                "account": {
                                    "id": 2,
                                    "email": "juliennekoutandji@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "196.171.120.14",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": "2024-01-16 08:58:12",
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 15:57:43",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2024-01-16 08:57:58",
                                    "lastName": "KOUTANDJI",
                                    "firstName": "Ossara julienne",
                                    "username": "admin-1"
                                }
                            },
                            "propriete": null,
                            "categorieQuestion": {
                                "id": 1,
                                "libelle": "Théorique"
                            },
                            "typeQuestion": {
                                "id": 7,
                                "code": 6,
                                "libelle": "Retour d'expérience"
                            },
                            "competence": {
                                "id": 30,
                                "libelle": "CompetenceFromBilan",
                                "description": "",
                                "domaineCompetence": {
                                    "id": 9,
                                    "name": "DomaineFromBilan2",
                                    "description": "",
                                    "owner": {
                                        "id": 1,
                                        "libelle": "admin1",
                                        "designation": "Propriété de l'admin admin admin",
                                        "name": "",
                                        "type": "admin",
                                        "account": {
                                            "id": 1,
                                            "email": "sysadmin@gmail.com",
                                            "avatar": null,
                                            "role": {
                                                "id": 1,
                                                "libelle": "ROLE_ADMIN",
                                                "createdAt": "2023-06-16 15:35:29"
                                            },
                                            "lastLoginIp": "102.64.172.133",
                                            "emailVerified": false,
                                            "actif": true,
                                            "banished": false,
                                            "actifAt": null,
                                            "desableAt": null,
                                            "banishedAt": null,
                                            "emailVerifiedAt": null,
                                            "lastLoginAt": "2024-02-28 14:49:39",
                                            "resetToken": null,
                                            "expiryReset": null,
                                            "createdAt": "2023-06-16 15:35:29",
                                            "lastName": "admin",
                                            "firstName": "admin",
                                            "username": "sysadmin"
                                        }
                                    },
                                    "hasPrivate": false
                                }
                            },
                            "note": null,
                            "goodWeight": null,
                            "badWeight": null,
                            "order": null,
                            "files": [],
                            "questionAnswers": [],
                            "questions": [],
                            "hasPrivate": false,
                            "createdAt": 1709118699631
                        },
                        {
                            "id": 146,
                            "libelle": "Travail",
                            "titre": "",
                            "description": "",
                            "owner": {
                                "id": 4,
                                "libelle": "admin2",
                                "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                "name": "Ossara julienne",
                                "type": "admin",
                                "account": {
                                    "id": 2,
                                    "email": "juliennekoutandji@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "196.171.120.14",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": "2024-01-16 08:58:12",
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 15:57:43",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2024-01-16 08:57:58",
                                    "lastName": "KOUTANDJI",
                                    "firstName": "Ossara julienne",
                                    "username": "admin-1"
                                }
                            },
                            "propriete": null,
                            "categorieQuestion": {
                                "id": 1,
                                "libelle": "Théorique"
                            },
                            "typeQuestion": {
                                "id": 7,
                                "code": 6,
                                "libelle": "Retour d'expérience"
                            },
                            "competence": {
                                "id": 30,
                                "libelle": "CompetenceFromBilan",
                                "description": "",
                                "domaineCompetence": {
                                    "id": 9,
                                    "name": "DomaineFromBilan2",
                                    "description": "",
                                    "owner": {
                                        "id": 1,
                                        "libelle": "admin1",
                                        "designation": "Propriété de l'admin admin admin",
                                        "name": "",
                                        "type": "admin",
                                        "account": {
                                            "id": 1,
                                            "email": "sysadmin@gmail.com",
                                            "avatar": null,
                                            "role": {
                                                "id": 1,
                                                "libelle": "ROLE_ADMIN",
                                                "createdAt": "2023-06-16 15:35:29"
                                            },
                                            "lastLoginIp": "102.64.172.133",
                                            "emailVerified": false,
                                            "actif": true,
                                            "banished": false,
                                            "actifAt": null,
                                            "desableAt": null,
                                            "banishedAt": null,
                                            "emailVerifiedAt": null,
                                            "lastLoginAt": "2024-02-28 14:49:39",
                                            "resetToken": null,
                                            "expiryReset": null,
                                            "createdAt": "2023-06-16 15:35:29",
                                            "lastName": "admin",
                                            "firstName": "admin",
                                            "username": "sysadmin"
                                        }
                                    },
                                    "hasPrivate": false
                                }
                            },
                            "note": null,
                            "goodWeight": null,
                            "badWeight": null,
                            "order": null,
                            "files": [],
                            "questionAnswers": [],
                            "questions": [],
                            "hasPrivate": false,
                            "createdAt": 1709118699857
                        },
                        {
                            "id": 145,
                            "libelle": "Sante mental",
                            "titre": "",
                            "description": "",
                            "owner": {
                                "id": 4,
                                "libelle": "admin2",
                                "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                "name": "Ossara julienne",
                                "type": "admin",
                                "account": {
                                    "id": 2,
                                    "email": "juliennekoutandji@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "196.171.120.14",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": "2024-01-16 08:58:12",
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 15:57:43",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2024-01-16 08:57:58",
                                    "lastName": "KOUTANDJI",
                                    "firstName": "Ossara julienne",
                                    "username": "admin-1"
                                }
                            },
                            "propriete": null,
                            "categorieQuestion": {
                                "id": 1,
                                "libelle": "Théorique"
                            },
                            "typeQuestion": {
                                "id": 7,
                                "code": 6,
                                "libelle": "Retour d'expérience"
                            },
                            "competence": {
                                "id": 30,
                                "libelle": "CompetenceFromBilan",
                                "description": "",
                                "domaineCompetence": {
                                    "id": 9,
                                    "name": "DomaineFromBilan2",
                                    "description": "",
                                    "owner": {
                                        "id": 1,
                                        "libelle": "admin1",
                                        "designation": "Propriété de l'admin admin admin",
                                        "name": "",
                                        "type": "admin",
                                        "account": {
                                            "id": 1,
                                            "email": "sysadmin@gmail.com",
                                            "avatar": null,
                                            "role": {
                                                "id": 1,
                                                "libelle": "ROLE_ADMIN",
                                                "createdAt": "2023-06-16 15:35:29"
                                            },
                                            "lastLoginIp": "102.64.172.133",
                                            "emailVerified": false,
                                            "actif": true,
                                            "banished": false,
                                            "actifAt": null,
                                            "desableAt": null,
                                            "banishedAt": null,
                                            "emailVerifiedAt": null,
                                            "lastLoginAt": "2024-02-28 14:49:39",
                                            "resetToken": null,
                                            "expiryReset": null,
                                            "createdAt": "2023-06-16 15:35:29",
                                            "lastName": "admin",
                                            "firstName": "admin",
                                            "username": "sysadmin"
                                        }
                                    },
                                    "hasPrivate": false
                                }
                            },
                            "note": null,
                            "goodWeight": null,
                            "badWeight": null,
                            "order": null,
                            "files": [],
                            "questionAnswers": [],
                            "questions": [],
                            "hasPrivate": false,
                            "createdAt": 1709118699748
                        }
                    ],
                    "hasPrivate": false,
                    "createdAt": 1709118699488
                },
                {
                    "id": 147,
                    "libelle": "Comment te portes tu ?",
                    "titre": "[Pub] Jauge ",
                    "description": "-",
                    "owner": {
                        "id": 4,
                        "libelle": "admin2",
                        "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                        "name": "Ossara julienne",
                        "type": "admin",
                        "account": {
                            "id": 2,
                            "email": "juliennekoutandji@gmail.com",
                            "avatar": null,
                            "role": {
                                "id": 1,
                                "libelle": "ROLE_ADMIN",
                                "createdAt": "2023-06-16 15:35:29"
                            },
                            "lastLoginIp": "196.171.120.14",
                            "emailVerified": false,
                            "actif": true,
                            "banished": false,
                            "actifAt": "2024-01-16 08:58:12",
                            "desableAt": null,
                            "banishedAt": null,
                            "emailVerifiedAt": null,
                            "lastLoginAt": "2024-02-28 15:57:43",
                            "resetToken": null,
                            "expiryReset": null,
                            "createdAt": "2024-01-16 08:57:58",
                            "lastName": "KOUTANDJI",
                            "firstName": "Ossara julienne",
                            "username": "admin-1"
                        }
                    },
                    "propriete": null,
                    "categorieQuestion": {
                        "id": 1,
                        "libelle": "Théorique"
                    },
                    "typeQuestion": {
                        "id": 7,
                        "code": 6,
                        "libelle": "Retour d'expérience"
                    },
                    "competence": {
                        "id": 11,
                        "libelle": "[Pub]  bonne-pratique",
                        "description": "-",
                        "domaineCompetence": {
                            "id": 3,
                            "name": "[Pub] sensibilisation-n",
                            "description": "-",
                            "owner": {
                                "id": 4,
                                "libelle": "admin2",
                                "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                "name": "Ossara julienne",
                                "type": "admin",
                                "account": {
                                    "id": 2,
                                    "email": "juliennekoutandji@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "196.171.120.14",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": "2024-01-16 08:58:12",
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 15:57:43",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2024-01-16 08:57:58",
                                    "lastName": "KOUTANDJI",
                                    "firstName": "Ossara julienne",
                                    "username": "admin-1"
                                }
                            },
                            "hasPrivate": false
                        }
                    },
                    "note": null,
                    "goodWeight": null,
                    "badWeight": null,
                    "order": 1,
                    "files": [],
                    "questionAnswers": [
                        {
                            "id": 531,
                            "value": "TRES MAL",
                            "question": {
                                "id": 147,
                                "libelle": "Comment te portes tu ?",
                                "titre": "[Pub] Jauge ",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 11,
                                    "libelle": "[Pub]  bonne-pratique",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 148,
                                        "libelle": "SANTE",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 11,
                                            "libelle": "[Pub]  bonne-pratique",
                                            "description": "-",
                                            "domaineCompetence": {
                                                "id": 3,
                                                "name": "[Pub] sensibilisation-n",
                                                "description": "-",
                                                "owner": {
                                                    "id": 4,
                                                    "libelle": "admin2",
                                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                                    "name": "Ossara julienne",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 2,
                                                        "email": "juliennekoutandji@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "196.171.120.14",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": "2024-01-16 08:58:12",
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 15:57:43",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2024-01-16 08:57:58",
                                                        "lastName": "KOUTANDJI",
                                                        "firstName": "Ossara julienne",
                                                        "username": "admin-1"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 530,
                            "value": "Bien",
                            "question": {
                                "id": 147,
                                "libelle": "Comment te portes tu ?",
                                "titre": "[Pub] Jauge ",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 11,
                                    "libelle": "[Pub]  bonne-pratique",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 148,
                                        "libelle": "SANTE",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 11,
                                            "libelle": "[Pub]  bonne-pratique",
                                            "description": "-",
                                            "domaineCompetence": {
                                                "id": 3,
                                                "name": "[Pub] sensibilisation-n",
                                                "description": "-",
                                                "owner": {
                                                    "id": 4,
                                                    "libelle": "admin2",
                                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                                    "name": "Ossara julienne",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 2,
                                                        "email": "juliennekoutandji@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "196.171.120.14",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": "2024-01-16 08:58:12",
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 15:57:43",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2024-01-16 08:57:58",
                                                        "lastName": "KOUTANDJI",
                                                        "firstName": "Ossara julienne",
                                                        "username": "admin-1"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        },
                        {
                            "id": 529,
                            "value": "BOOOF",
                            "question": {
                                "id": 147,
                                "libelle": "Comment te portes tu ?",
                                "titre": "[Pub] Jauge ",
                                "description": "-",
                                "owner": {
                                    "id": 4,
                                    "libelle": "admin2",
                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                    "name": "Ossara julienne",
                                    "type": "admin",
                                    "account": {
                                        "id": 2,
                                        "email": "juliennekoutandji@gmail.com",
                                        "avatar": null,
                                        "role": {
                                            "id": 1,
                                            "libelle": "ROLE_ADMIN",
                                            "createdAt": "2023-06-16 15:35:29"
                                        },
                                        "lastLoginIp": "196.171.120.14",
                                        "emailVerified": false,
                                        "actif": true,
                                        "banished": false,
                                        "actifAt": "2024-01-16 08:58:12",
                                        "desableAt": null,
                                        "banishedAt": null,
                                        "emailVerifiedAt": null,
                                        "lastLoginAt": "2024-02-28 15:57:43",
                                        "resetToken": null,
                                        "expiryReset": null,
                                        "createdAt": "2024-01-16 08:57:58",
                                        "lastName": "KOUTANDJI",
                                        "firstName": "Ossara julienne",
                                        "username": "admin-1"
                                    }
                                },
                                "categorieQuestion": {
                                    "id": 1,
                                    "libelle": "Théorique"
                                },
                                "typeQuestion": {
                                    "id": 7,
                                    "code": 6,
                                    "libelle": "Retour d'expérience"
                                },
                                "competence": {
                                    "id": 11,
                                    "libelle": "[Pub]  bonne-pratique",
                                    "description": "-",
                                    "domaineCompetence": {
                                        "id": 3,
                                        "name": "[Pub] sensibilisation-n",
                                        "description": "-",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "hasPrivate": false
                                    }
                                },
                                "files": [],
                                "questions": [
                                    {
                                        "id": 148,
                                        "libelle": "SANTE",
                                        "titre": "",
                                        "description": "",
                                        "owner": {
                                            "id": 4,
                                            "libelle": "admin2",
                                            "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                            "name": "Ossara julienne",
                                            "type": "admin",
                                            "account": {
                                                "id": 2,
                                                "email": "juliennekoutandji@gmail.com",
                                                "avatar": null,
                                                "role": {
                                                    "id": 1,
                                                    "libelle": "ROLE_ADMIN",
                                                    "createdAt": "2023-06-16 15:35:29"
                                                },
                                                "lastLoginIp": "196.171.120.14",
                                                "emailVerified": false,
                                                "actif": true,
                                                "banished": false,
                                                "actifAt": "2024-01-16 08:58:12",
                                                "desableAt": null,
                                                "banishedAt": null,
                                                "emailVerifiedAt": null,
                                                "lastLoginAt": "2024-02-28 15:57:43",
                                                "resetToken": null,
                                                "expiryReset": null,
                                                "createdAt": "2024-01-16 08:57:58",
                                                "lastName": "KOUTANDJI",
                                                "firstName": "Ossara julienne",
                                                "username": "admin-1"
                                            }
                                        },
                                        "categorieQuestion": {
                                            "id": 1,
                                            "libelle": "Théorique"
                                        },
                                        "typeQuestion": {
                                            "id": 7,
                                            "code": 6,
                                            "libelle": "Retour d'expérience"
                                        },
                                        "competence": {
                                            "id": 11,
                                            "libelle": "[Pub]  bonne-pratique",
                                            "description": "-",
                                            "domaineCompetence": {
                                                "id": 3,
                                                "name": "[Pub] sensibilisation-n",
                                                "description": "-",
                                                "owner": {
                                                    "id": 4,
                                                    "libelle": "admin2",
                                                    "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                                    "name": "Ossara julienne",
                                                    "type": "admin",
                                                    "account": {
                                                        "id": 2,
                                                        "email": "juliennekoutandji@gmail.com",
                                                        "avatar": null,
                                                        "role": {
                                                            "id": 1,
                                                            "libelle": "ROLE_ADMIN",
                                                            "createdAt": "2023-06-16 15:35:29"
                                                        },
                                                        "lastLoginIp": "196.171.120.14",
                                                        "emailVerified": false,
                                                        "actif": true,
                                                        "banished": false,
                                                        "actifAt": "2024-01-16 08:58:12",
                                                        "desableAt": null,
                                                        "banishedAt": null,
                                                        "emailVerifiedAt": null,
                                                        "lastLoginAt": "2024-02-28 15:57:43",
                                                        "resetToken": null,
                                                        "expiryReset": null,
                                                        "createdAt": "2024-01-16 08:57:58",
                                                        "lastName": "KOUTANDJI",
                                                        "firstName": "Ossara julienne",
                                                        "username": "admin-1"
                                                    }
                                                },
                                                "hasPrivate": false
                                            }
                                        },
                                        "files": [],
                                        "questions": [],
                                        "ordre": null,
                                        "goodWeight": null,
                                        "badWeight": null,
                                        "hasPrivate": false
                                    }
                                ],
                                "ordre": null,
                                "goodWeight": null,
                                "badWeight": null,
                                "hasPrivate": false
                            },
                            "correct": true,
                            "ordre": null
                        }
                    ],
                    "questions": [
                        {
                            "id": 148,
                            "libelle": "SANTE",
                            "titre": "",
                            "description": "",
                            "owner": {
                                "id": 4,
                                "libelle": "admin2",
                                "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                "name": "Ossara julienne",
                                "type": "admin",
                                "account": {
                                    "id": 2,
                                    "email": "juliennekoutandji@gmail.com",
                                    "avatar": null,
                                    "role": {
                                        "id": 1,
                                        "libelle": "ROLE_ADMIN",
                                        "createdAt": "2023-06-16 15:35:29"
                                    },
                                    "lastLoginIp": "196.171.120.14",
                                    "emailVerified": false,
                                    "actif": true,
                                    "banished": false,
                                    "actifAt": "2024-01-16 08:58:12",
                                    "desableAt": null,
                                    "banishedAt": null,
                                    "emailVerifiedAt": null,
                                    "lastLoginAt": "2024-02-28 15:57:43",
                                    "resetToken": null,
                                    "expiryReset": null,
                                    "createdAt": "2024-01-16 08:57:58",
                                    "lastName": "KOUTANDJI",
                                    "firstName": "Ossara julienne",
                                    "username": "admin-1"
                                }
                            },
                            "propriete": null,
                            "categorieQuestion": {
                                "id": 1,
                                "libelle": "Théorique"
                            },
                            "typeQuestion": {
                                "id": 7,
                                "code": 6,
                                "libelle": "Retour d'expérience"
                            },
                            "competence": {
                                "id": 11,
                                "libelle": "[Pub]  bonne-pratique",
                                "description": "-",
                                "domaineCompetence": {
                                    "id": 3,
                                    "name": "[Pub] sensibilisation-n",
                                    "description": "-",
                                    "owner": {
                                        "id": 4,
                                        "libelle": "admin2",
                                        "designation": "Propriété de l'admin Ossara julienne KOUTANDJI",
                                        "name": "Ossara julienne",
                                        "type": "admin",
                                        "account": {
                                            "id": 2,
                                            "email": "juliennekoutandji@gmail.com",
                                            "avatar": null,
                                            "role": {
                                                "id": 1,
                                                "libelle": "ROLE_ADMIN",
                                                "createdAt": "2023-06-16 15:35:29"
                                            },
                                            "lastLoginIp": "196.171.120.14",
                                            "emailVerified": false,
                                            "actif": true,
                                            "banished": false,
                                            "actifAt": "2024-01-16 08:58:12",
                                            "desableAt": null,
                                            "banishedAt": null,
                                            "emailVerifiedAt": null,
                                            "lastLoginAt": "2024-02-28 15:57:43",
                                            "resetToken": null,
                                            "expiryReset": null,
                                            "createdAt": "2024-01-16 08:57:58",
                                            "lastName": "KOUTANDJI",
                                            "firstName": "Ossara julienne",
                                            "username": "admin-1"
                                        }
                                    },
                                    "hasPrivate": false
                                }
                            },
                            "note": null,
                            "goodWeight": null,
                            "badWeight": null,
                            "order": null,
                            "files": [],
                            "questionAnswers": [],
                            "questions": [],
                            "hasPrivate": false,
                            "createdAt": 1709118821082
                        }
                    ],
                    "hasPrivate": false,
                    "createdAt": 1709118820976
                }
            ]
        }
    }),
    persist: true,
    getters: {
    },
  
    actions: {
    },
  });
