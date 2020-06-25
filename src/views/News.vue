<template>
    <div>
        <ion-app style="padding-top: 40px">
            <ion-content style="margin-top: 32px !important;">
                <img style="width: 100%" :src="oneNews.image"/>
                <h1>
                    {{ oneNews.title }}
                </h1>
                <div class="contentNews" v-html="oneNews.content">
                    {{ oneNews.content }}
                </div>
                <div class="bottomNews">
                    <b>{{ moment(oneNews.publish_at).format("LL") }}</b>
                    <b>{{ oneNews.author }}</b>
                </div>
            </ion-content>

        </ion-app>
        <GoBack />
    </div>
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

                oneNews: ''
            }
        },

        mounted(){
            this.getNews(this.$route.params.id)
        },

        methods:{
            getNews(elem){
                axios.get(`http://sneakers-x.herokuapp.com/api/news/${elem}`)
                    .then(res => {
                        {
                            console.log(res.data)
                            this.oneNews = {...res.data}
                        }
                    }).catch(err => {
                    console.log(err)
                    this.$router.push({path:'/Page404'})

                })
            },
        }
    }
</script>

<style>
    .contentNews{
        width: 95vw;
        margin: auto;
        text-align: justify;
        font-size: 90%;
        color: grey;
    }

    .bottomNews{
        width: 95vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
    }

</style>