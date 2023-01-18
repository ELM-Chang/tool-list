<template>
    <div class="body">
        <div class="container">
            <div class="wheel">
                <div class="number" style="--i:1; --clr:#db7093;"><span>100</span></div>
                <div class="number" style="--i:2; --clr:CadetBlue;"><span>1</span></div>
                <div class="number" style="--i:3; --clr:#d63192;"><span>50</span></div>
                <div class="number" style="--i:4; --clr:#daa520;"><span>0</span></div>
                <div class="number" style="--i:5; --clr:#ff340f;"><span>1000</span></div>
                <div class="number" style="--i:6; --clr:#ff7f50;"><span>10</span></div>
                <div class="number" style="--i:7; --clr:#3cb371;"><span>5</span></div>
                <div class="number" style="--i:8; --clr:#4169e1;"><span>20</span></div>
            </div>
            <div class="spinBtn" @click="spin">spin</div>
        </div>
    </div>
</template>
<script setup>
    const spin = ()=>{
        const wheel = document.querySelector(".wheel");
        // const spinBtn = document.querySelector(".spinBtn");
        var value = Math.ceil(Math.random()*3600)
        wheel.style.transform=`rotate(${value}deg)`
        value += Math.ceil(Math.random()*3600)
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    .body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vmin;
        background:#333;
    }
    .container {
        position: relative;
        width: 40vmin;
        height: 40vmin;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container .spinBtn {
        position: absolute;
        width: 8vmin;
        height: 8vmin;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 600;
        color: #333;
        letter-spacing: 0.1em;
        border: 4px solid rgba(0, 0, 0, 0.75);
        cursor: pointer;
        user-select: none;
    }
    .container .spinBtn::before {
        content:'';
        position: absolute;
        width: 1em;
        height: 1.5em;
        background: #fff;
        top:-1.4em;
        clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
    }
    .container .wheel {
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #333;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #333,
        0 0 0 0.8em #fff,
        0 0 0 0.9em #333;
        transition: transform 2s ease-in-out;
    }
    .container .wheel .number {
        position: absolute;
        width: 50%;
        height: 50%;
        background: var(--clr);
        transform-origin: bottom right;
        transform: rotate(calc(45deg*var(--i)));
        clip-path: polygon(0 0, 56% 0%, 100% 100%, 0% 61%);
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }
    .container .wheel .number span {
        position: relative;
        transform: rotate(45deg);
        font-size: 1em;
        font-weight: 600;
        color: aliceblue;
        text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15);
    }
    .container .wheel .number span::after {
        content: '$';
        position: absolute;
        font-size: 0.75em;
        font-weight: 500;
    } 
</style>