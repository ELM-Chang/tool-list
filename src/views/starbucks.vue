<template>
    <div class="body">
        <section>
            <div class="back-circle"></div>
            <header>
                    <a href="###"><img class="logo" src="../assets/starbucks/logo.png" alt=""></a>
                    <ul>
                        <li><a href="###">Home</a></li>
                        <li><a href="###">Menu</a></li>
                        <li><a href="###">What's New</a></li>
                        <li><a href="###">Contact</a></li>
                    </ul>
            </header>
            <div class="content">
                <div class="textBox">
                    <h2>It's not just Coffee <br> It's <span>Starbucks</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates libero sint at accusantium doloremque odit fugiat labore tempore. Doloremque molestiae exercitationem rerum dolore nulla! Mollitia a inventore sapiente ipsam?</p>
                    <a href="###">Learn More</a>
                </div>
                <div class="imgBox">
                    <img class="starbucks" src="../assets/starbucks/img1.png" alt="">
                </div>
            </div>
            <ul class="thumb">
                <li><img @click="img_switch('img1.png','#017143')" src="../assets/starbucks/thumb1.png" alt=""></li>
                <li><img @click="img_switch('img2.png','#eb7495')" src="../assets/starbucks/thumb2.png" alt=""></li>
                <li><img @click="img_switch('img3.png','#d752b1')" src="../assets/starbucks/thumb3.png" alt=""></li>
            </ul>
            <ul class="sci">
                <li><a href="###"><img src="@/assets/starbucks/twitter.png" alt=""></a></li>
                <li><a href="###"><img src="@/assets/starbucks/facebook.png" alt=""></a></li>
                <li><a href="###"><img src="@/assets/starbucks/instagram.png" alt=""></a></li>
            </ul>
        </section>
    </div>
</template>
<script setup>
    const img_switch=(drink,color)=>{
        const img= document.querySelector(".starbucks")
        const circle = document.querySelector(".back-circle")
        // 注意路徑
        var switched_img=`/src/assets/starbucks/${drink}`
        circle.style.background=color
        img.src=switched_img
        console.log("click end",color, circle.style)
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: sans-serif;
        text-decoration: none;
        /* position:relative; */
    }
    section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        padding: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
    }
    header {
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 20px 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header .logo {
        position: relative;
        width: 80px;
    }
    header ul {
        position: relative;
        display: flex;
    }
    header ul li a {
        display: inline-block;
        margin-left: 2em;
        color: #333;
        font-weight: 400;
    }
    .content {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .content .textBox {
        position: relative;
        max-width: 600px;
    }
    .content .textBox h2 {
        color: #333;
        font-size: 4em;
        line-height: 1.4em;
        font-weight: 500;
    }
    .content .textBox h2 span {
        color: #017143;
        font-size: 1.2em;
        font-weight: 900;
    }
    .content .textBox p {
        color: #333;
    }
    .content .textBox a {
        display: inline-block;
        margin-top: 20px;
        padding: 8px 20px;
        background: #017143;
        color: #fff;
        border-radius: 40px;
        font-weight: 400;
        letter-spacing: 1px;
    }
    .content .imgBox {
        /* width:30em; */
        display:flex;
        /* justify-content: flex-end; */
        padding-right: 2em;
        margin-top: 5em;
    }
    .content .imgBox img {
        width: 24em;
        /* object-fit: cover;
        object-position: 100% 50%; */
    }
    .thumb {
        position: absolute;
        left: 50%;
        bottom: 3em;
        transform: translateX(-50%);
        display: flex;
    }
    .thumb li {
        display: inline-block;
        margin: 0 2em;
        cursor: pointer;
        transition: 0.5s;
    }
    .thumb li:hover {
        transform: translateY(-1em);
    }
    .thumb li img {
        max-width: 4em;
    }
    .sci {
        position: absolute;
        top: 50%;
        right: 2em;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .sci li a {
        display: inline-block;
        margin: 5px 0;
        transform: scale(0.6);
        filter: invert(1);
    }
    .back-circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #017143;
        clip-path: circle(35em at right 47em);
    }
</style>