<template>
    <ion-app style="padding-top: 55px">
        <ion-content>
            <ion-card @click="goToNews(news.id)"   v-for="(news, index) in newss">
                <img :src="news.image" />
                <ion-card-header>
                <ion-card-title>{{ news.title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                {{ news.description }}
                </ion-card-content>
            </ion-card>
            </ion-content>
        <GoBack />
    </ion-app>
</template>

<script>
    import axios from 'axios'
    import GoBack from '../components/GoBack.vue'

    export default {
        components:{
            GoBack,
        },
        data(){
            return{
                newss: ''
            }
        },

        mounted(){
            this.getNews()
        },
        methods:{
            getNews() {
                axios.get('http://sneakers-x.herokuapp.com/api/news')
                    .then(res => {
                        {
                            console.log(res)
                            this.newss = res.data
                        }
                    }).catch(err => {
                    console.log(err)
                })
            },

            goToNews(elem){
                console.log(elem)
                this.$router.push({path:`/News/${elem}`})
            }
        }
    }

</script>