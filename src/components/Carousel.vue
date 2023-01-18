<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide">
        </slot>
        <!-- navigate -->
        <div class="navigate">
            <div class="toggle-page left">
                <i @click="prevSlide" class="fa-sharp fa-solid fa-chevron-left"></i>
            </div>
            <div class="toggle-page right">
                <i @click="nextSlide" class="fa-sharp fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <!-- pagination -->
        <div class="pagination">
            <span @click="goToSlide(index)"
            v-for="(slide, index) in getSlideCount" :key="index"
            :class="{active:index+1===currentSlide}"></span>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted} from 'vue'
    export default {
        props:["carouselSlides"],
        setup(){
            const currentSlide = ref(1);
            const getSlideCount = ref(null);
            // navigate
            const nextSlide = ()=>{
                if(currentSlide.value===getSlideCount.value){
                    currentSlide.value=1;
                    return;
                }
                currentSlide.value+=1;
            }
            const prevSlide = () => {
                if (currentSlide.value === 1) {
                    currentSlide.value = 1;
                    return;
                }
                currentSlide.value -= 1;
            }
            // pagination
            const goToSlide=(index)=>{
                currentSlide.value=index+1
            }
            onMounted(()=>{
                getSlideCount.value=document.querySelectorAll('.slide').length;
                console.log(getSlideCount.value)
            })
            return {currentSlide, getSlideCount, nextSlide, prevSlide, goToSlide}
        }
    }
</script>

<style lang="scss" scoped>
.navigate{
        padding:0 16px;
        height: 100%;
        width:100%;
        position:absolute;
        display:flex;
        justify-content: center;
        align-items: center;
    }
.toggle-page {
            display: flex;
            /* flex: flex-grow flex-shrink flex-basis
            flex: 1 相当于flex: 1 1 0。元素可以在flex-basis为 0 的基础上伸缩。 */
            flex: 1;
        }

.right {
            justify-content: flex-end;
        }

i {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #6347c7;
        color: #fff;
    }
.pagination {
        position: absolute;
        bottom: 24px;
        width: 100%;
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items:center;
    span {
        cursor:pointer;
        width:20px;
        height:20px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .active{
        background-color:#6347c7;
    }
}
</style>