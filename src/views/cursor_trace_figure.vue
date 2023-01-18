<template>
    <div class="curse-trace">
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            <img class="image" draggable="false" src="@/assets/bg-1.jpg" alt="">
            <img class="image" draggable="false" src="@/assets/bg-2.jpg" alt="">
            <img class="image" draggable="false" src="@/assets/bg-3.jpg" alt="">
            <!-- <img class="image" draggable="false" src="@/assets/rod-long-iD1GObFLsOs-unsplash.jpg" alt="">
            <img class="image" draggable="false" src="@/assets/stephen-leonardi-HBXvsDvI4l8-unsplash.jpg" alt="">
            <img class="image" draggable="false" src="@/assets/zetong-li-vHIOWBWo3rc-unsplash.jpg" alt=""> -->
        </div>
    </div>
</template>
<script setup>
    import {onMounted} from "vue"
    onMounted(()=>{
        const track=document.getElementById("image-track")
        const handleOnDown = (e) => {
            track.dataset.mouseDownAt= e.clientX;
        }
        const handleOnUp = (e) => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage
        }
        const handleOnMove = (e) => {
            if (track.dataset.mouseDownAt=== "0") return;
            const mouseDelta = parseFloat(track.dataset.mouseDownAt)-e.clientX;
            const maxDelta = window.innerWidth/2;
            const percentage = mouseDelta/maxDelta * -100;
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage)+percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
            track.dataset.percentage = nextPercentage;
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
                }, { duration: 1200, fill: "forwards" });
            for(const image of track.getElementsByClassName("image")) {
                image.animate({
                objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }

        window.onmousedown = e => handleOnDown(e)
        window.onmouseup = e => handleOnUp(e)
        window.onmousemove = e => handleOnMove(e)
        window.ontouchstart = e => handleOnDown(e.touches[0])
        window.ontouchend = e => handleOnUp(e.touches[0])
        window.ontouchmove = e => handleOnMove(e.touches[0])
    })
</script>
<style scoped>
    .curse-trace {
        position:relative;
        width: 100%;
        overflow: hidden;
        height: 100vmin;
        background: #333;
    }
    #image-track {
        display:flex;
        gap:4vmin;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(0%,-50%);
    }
    #image-track > .image {
        width:40vmin;
        height: 56vmin;
        object-fit: cover;
        object-position: 100%, 50%;
    }

</style>