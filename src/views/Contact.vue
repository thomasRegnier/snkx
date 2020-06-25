<template>
    <ion-app>
        <ion-content>
            <div class="contactbackground">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.356279146126!2d2.3608514158506178!3d48.87048430780893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0950555883%3A0x25e6ea66d950d9ec!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1591105324580!5m2!1sfr!2sfr"
                        width="800"
                        height="600"
                        frameborder="0" style="border:0;"
                        allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>

            </div>
            <ion-card style="padding: 15px">
                <div>
                    <input
                            :class="{'is-invalid' : $v.userForm.firstname.$error}"
                            v-model="userForm.firstname"
                            type="text"
                            class="form-control"
                            placeholder="Prénom"
                    >
                    <div style="height: 23px">
                        <div style="text-align: left;"  v-if="$v.userForm.firstname.$dirty">
                            <small class="error" v-if="!$v.userForm.firstname.required">Prénom obligatoire</small>
                        </div>
                    </div>
                </div>

                <div>
                    <input
                            :class="{'is-invalid' : $v.userForm.name.$error}"
                            v-model="userForm.name"
                            type="text"
                            class="form-control"
                            placeholder="Nom"
                    >
                    <div style="height: 23px">
                        <div style="text-align: left;"  v-if="$v.userForm.name.$dirty">
                            <small class="error" v-if="!$v.userForm.name.required">Nom obligatoire</small>
                        </div>
                    </div>
                </div>

                <div>
                    <input
                            :class="{'is-invalid' : $v.userForm.email.$error}"
                            v-model="userForm.email"
                            type="text"
                            class="form-control"
                            placeholder="Email"
                    >
                    <div style="height: 23px">
                        <div style="text-align: left;"  v-if="$v.userForm.email.$dirty">
                            <small class="error" v-if="!$v.userForm.email.required">Email obligatoire</small>
                            <small class="error" v-if="!$v.userForm.email.email">Please enter correct email</small>
                        </div>
                    </div>
                </div>

                <div class="input-group">
            <textarea
                    :class="{'is-invalid' : $v.userForm.message.$error}"

                    v-model="userForm.message"
                    class="form-control"style="height: 150px" placeholder="Message"></textarea>
                </div>
                <div style="height: 23px">
                    <div  style="text-align: left;" v-if="$v.userForm.message.$dirty">
                        <small class="error" v-if="!$v.userForm.message.required">Message is required</small>
                    </div>
                </div>

                <ion-button @click="trySubmit" expand="block">Envoyer</ion-button>

            </ion-card>


        </ion-content>
    </ion-app>
</template>


<script>
    import axios from 'axios'
    import { required, email } from 'vuelidate/lib/validators'


    export default {
        data(){
            return{
                userForm:{
                    email: '',
                    name:'',
                    firstname: '',
                    message: '',
                }

            }
        },
        validations: {
            userForm:{
                email: {
                    required, email,
                },
                name: {
                    required,

                },
                firstname: {
                    required,

                },
                message:{
                    required
                }
            }

        },
        methods: {

            toaster(message, color){
                return this.$ionic.toastController
                    .create({
                        message: message,
                        duration: 2000,
                        color: color,

                    })

                    .then(toast => {
                        toast.present()
                    })

            },

            trySubmit(){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    console.log("error")
                } else {
                    console.log("ok")
                    this.sendMail()
                }

            },

            sendMail(){
                axios.post('http://sneakers-x.herokuapp.com/api/contact', {userForm: this.userForm})
                    .then(response => {
                        console.log(response)
                        this.toaster(`Message envoyé`, 'success')
                        this.$nextTick(() => { this.$v.$reset() })
                            this.userForm.email = ''
                            this.userForm.name = ''
                            this.userForm.firstname = ''
                            this.userForm.message = ''
                    })
                    .catch(error => {
                        console.error(error);
                        this.toaster(`Une erreur est survenue`, 'danger')
                    });
            }
        }
    }
</script>

<style scoped>
    .contactbackground{
        width: 100vw;
        margin-top: 44px;
    }

    iframe{
        width: 100vw;
        height: 40vh;
    }

    input{
        width: 100%;
        padding: 5px;
    }

    textarea{
        width: 100%;
        padding: 5px;
    }


    .is-invalid{
        border: 1px dotted red;
    }

    small{ color: red}
</style>