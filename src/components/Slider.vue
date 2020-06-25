<template>
    <div id="slider">
        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide">
                <ion-card @click="goToNews(slides[current].id)" v-if="show" :key="current" class="slide"  style="width: 100%; margin: 0">
                    <img style="height: 250px; object-fit: cover" :src="slides[current].image"/>
                    <ion-card-header style="padding: 10px">
                        <ion-card-title style="font-size: 120%">{{slides[current].title}}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content style="padding: 0px 10px 10px 10px">
                        {{slides[current].description}}
                    </ion-card-content>
                </ion-card>
            </div>
        </transition-group>
        <div class="prev" aria-label="Previous slide" @click="slide(-1)">
            &#10094;
        </div>
        <div class="next" aria-label="Next slide" @click="slide(1)">
            &#10095
        </div>

        <ul class="dots">
            <li
                    v-for="(dot, index) in slides.length"

                    :class="{ active: index === current}"
            ></li>

        </ul>
    </div>
</template>


<script>
    export default {
        props: {
            slides: {}
        },
            data() {
                return{
                    current: 0,
                    direction: 1,
                    transitionName: "fade",
                    show: false,
                    active: 0
                }

            },
            methods: {
                slide(dir) {
                    this.direction = dir;
                    dir === 1
                        ? (this.transitionName = "slide-next")
                        : (this.transitionName = "slide-prev");
                        let len = this.slides.length;
                    this.current = (this.current + dir % len + len) % len;

                },
                goToNews(elem){
                    console.log(elem)
                    this.$router.push({path:`/News/${elem}`})
                }
            },
            mounted() {
                this.show = true;
            }

    }
</script>
<style scoped lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Crimson+Text");

    /* FADE IN */
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-enter {
        opacity: 0;
    }

    /* GO TO NEXT SLIDE */
    .slide-next-enter-active,
    .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }
    .slide-next-enter {
        transform: translate(100%);
    }
    .slide-next-leave-to {
        transform: translate(-100%);
    }

    /* GO TO PREVIOUS SLIDE */
    .slide-prev-enter-active,
    .slide-prev-leave-active {
        transition: transform 0.5s ease-in-out;
    }
    .slide-prev-enter {
        transform: translate(-100%);
    }
    .slide-prev-leave-to {
        transform: translate(100%);
    }

    /* SLIDES CLASSES */

    .blue {
        background: #4a69bd;
    }

    .red {
        background: #e55039;
    }

    .yellow {
        background: #f6b93b;
    }

    /* SLIDER STYLES */

    #slider {
        margin-top: 16px;
        margin-bottom: 16px;
        width: 95vw;
        height: 500px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }

    .slide {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }


    .prev,
    .next {
        position: absolute;
        top: 25%;
        width: 40px;
        height: 40px;
        border: 2px solid black;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        color: black;

        &:hover {
            background: black;
            color: #fff;
            transform: scale(1.2);
        }

        &:active {
            transform: translate(0, 3px) ;
        }
    }

    .next{
        right: 0;
    }

    .dots {
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        bottom: 0px;

        li {
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background: black;
            opacity: 0.2;
            display: inline-block;
            margin: 0 3px;
            cursor: pointer;
            transition: opacity 0.4s ease-in-out,width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            &.active {
                width: 22px;
                opacity: 1;
            }
        }
    }
</style>