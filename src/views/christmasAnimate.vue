<template>
    <div class="body">
        <div class="container">
            <div class="circle"></div>
            <div class="snow">
                <span style="--i:11"></span>
                <span style="--i:23"></span>
                <span style="--i:35"></span>
                <span style="--i:27"></span>
                <span style="--i:19"></span>
                <span style="--i:22"></span>
                <span style="--i:34"></span>
                <span style="--i:26"></span>
                <span style="--i:18"></span>
                <span style="--i:20"></span>
                <span style="--i:31"></span>
                <span style="--i:23"></span>
                <span style="--i:15"></span>
                <span style="--i:27"></span>
                <span style="--i:39"></span>
                <span style="--i:22"></span>
                <span style="--i:14"></span>
                <span style="--i:26"></span>
                <span style="--i:38"></span>
                <span style="--i:20"></span>                
                <span style="--i:39"></span>
                <span style="--i:21"></span>
                <span style="--i:18"></span>
                <span style="--i:32"></span>
                <span style="--i:27"></span>
                <span style="--i:13"></span>
                <span style="--i:36"></span>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Dosis', sans-serif;
    }
    .body {
        display:flex;
        justify-content: center;
        align-items: center;
        min-height: 100vmin;
        background: linear-gradient(#5d0202, #f72727);
    }
    .container {
        position: relative;
        width: 100%;
        height: 100vmin;
        overflow: hidden;
    }
    .container::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: url("../assets/tree.png");
        z-index: 1;
    }
    .circle {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #fff;
    }
    .circle::before {
        content:"";
        position: absolute;
        /* background layout automatically on the hightest index*/
        background: url("../assets/santa.png");
        /* The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties.  */
        inset: -200px -350px; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: 600px;
        animation: animate 4s ease-in-out infinite;
    }
    .circle::after {
        content: "Happy Christmas";
        position: absolute;
        inset:-125px -200px;
        display: flex;
        color: #fff;
        font-size: 4em;
        justify-content: center;
        align-items: flex-end;
    }
    .container .snow {
        position: relative;
        display: flex;
    }
    .container .snow span {
        position: relative;
        min-width: 5px;
        height: 5px;
        background: #fff;
        border-radius: 50%;
        margin: 0 1.5vw;
        /* one box can have multiply shadow */
        /* blur:模糊 spread:大小 */
        box-shadow: -100px 20px 5px #fff,
        100px 20px 10px #fff;
        animation: snow-animate 15s linear infinite;
        animation-duration: calc(130s/var(--i));
    }
    .container .snow span:nth-child(even) {
        min-width: 10px;
        height: 10px;
        animation: snow-animate-nth 15s linear infinite;
        animation-duration: calc(213s/var(--i));
    }
    @keyframes animate {
        0%, 100% {
            transform: translateY(-25px);
        }
        50% {
            transform: translateY(25px);
        }
    }
    @keyframes snow-animate {
        0% {
            transform: translateY(-10vmin);
        }
        100% {
            transform: translateY(100vmin);
        }
    }
    @keyframes snow-animate-nth {
        0% {
            transform: translate(20vmin,-10vmin);
        }
        25% {
            transform: translate(-5vmin,15vmin);
        }
        50% {
            transform: translate(-15vmin,40vmin);
        }
        100% {
            transform: translate(-25vmin,100vmin);
        }
    }
    
</style>