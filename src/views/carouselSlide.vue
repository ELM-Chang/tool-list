<template>
    <div>
        <CarouselVue class="carousel" v-slot="{currentSlide}" :carouselSlides="carouselSlides">
            <SlidesVue v-for="(slide, index) in carouselSlides" :key="index">
                <div class="slide-info" v-show="currentSlide===index+1">
                    <img :src="imgUrl(slide)" alt="">
                </div>
            </SlidesVue>
        </CarouselVue>
    </div>
</template>

<script>
    import CarouselVue from '@c/Carousel.vue';
    import SlidesVue from '@c/Slides.vue';
    export default {
        components:{
            CarouselVue, SlidesVue
        },
        setup(){
            const carouselSlides = ["bg-1", "bg-2", "bg-3"];
            const imgUrl=(e)=>{
                return new URL(`../assets/${e}.jpg`, import.meta.url).href
            }
            return {carouselSlides, imgUrl}
        },
    }
</script>

<style lang="scss" scoped>
    .carousel {
        max-height: 100vh;
        height: 100vh;
        max-width: 100vw;
        width: 100vw;
        position:relative;
    }
    .slide-info {
        position: absolute;
        top:0;
        width:100%;
        max-height:100%;
        height:100%;
    }
    img {
        min-width:100%;
        width: 100%;
        height:100%;
        object-fit: cover;
        object-position: center;
    }
</style>