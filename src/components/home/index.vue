<template>
    <div class="big_wrapper">
        <div class="logo_container">
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="home_wrapper">
            <!--工具侧边栏-->

            <Toolbar></Toolbar>

            <!--链接栏-->
            <ApiList></ApiList>

            <!--主页面-->
            <div class="main_wrapper">
                <div class="top_wrapper">
                    <ul class="top_link_container">
                    </ul>
                </div>
                <div class="request"></div>
                <div class="main"></div>
                <div class="response_wrapper"></div>
            </div>
        </div>
        <div class="copyright">
            Copyright by <a href="https://github.com/Bluex-xx/easyApi">easyApi</a> @
            2022
        </div>
    </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Toolbar from './toolbar/index.vue'
import ApiList from './apiList/index.vue'

</script>

<style lang="less" scoped>
@backgroundColor: #ececec;

.trasition {
    transition: all 0.3s;
}

.big_wrapper {
    width: 100vw;
    height: 100vh;
    background: @backgroundColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;


    .logo_container {
        width: 11vw;
        position: absolute;
        left: calc((100% - 11vw) / 2);
        top: -.5vh;
        .trasition();
        img {
            width: 100%;
            cursor: none;
            pointer-events: none;
        }
    }
    .logo_container:hover {
        .trasition();
        filter: drop-shadow(0 0 2em #257bd9);
    }

}

.home_wrapper {
    display: flex;
    overflow: hidden;
    width: 75%;
    height: 84%;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);

    .main_wrapper {
        width: 76.3%;
        height: 90vh;
        background-color: rgb(244, 245, 250);
        display: flex;
        flex-direction: column;
    }
}

.copyright {
    width: 20vw;
    text-align: center;
    color: grey;
    position: absolute;
    bottom: 3vh;
    font-size: 1vw;
    left: calc((100% - 20vw) / 2);

    a {
        color: #d92579b9;
        font-weight: 600;
        text-decoration: none;
    }

    a:hover {
        color: #d92579;
    }
}
</style>
