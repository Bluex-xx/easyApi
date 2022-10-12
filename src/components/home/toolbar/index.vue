<template>
    <div class="toolbar_wrapper">
        <div class="toolbar_container">
            <div class="profile_photo_container">
                <img src="../../../assets/images/toolbar/profile_picture.jpg" alt="">
            </div>

            <div class="tool_wrapper tool">
                <div class="tool_one tool_child tool_active">
                    <i class="iconfont icon-jiekou"></i>
                </div>

                <div class="tool_two tool_child">
                    <i class="iconfont icon-zhuanhuan-02"></i>
                </div>

                <div class="tool_three tool_child">
                    <i class="iconfont icon-wendang"></i>
                </div>

                <div class="tool_four tool_child">
                    <i class="iconfont icon-information"></i>
                </div>
            </div>

            <div class="more_container">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

</script>

<style lang="less">
@active : black;

.toolbar_wrapper {
    width: 7.3%;
    //border: 1px solid #D8D8D8;

    .toolbar_container {
        background-color: rgb(233, 237, 246);
        height: 90vh;
        display: flex;
        flex-direction: column;
        position: relative;

        .profile_photo_container {
            margin: 0 auto;
            margin-top: 1.1vw;
            width: 3.5vw;
            height: 3.5vw;
            border-radius: 50%;
            overflow: hidden;
            background-color: black;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .tool {
            display: flex;
            flex-direction: column;
            margin-top: 1.8vw;

            &_child {
                margin: auto;
                height: 5vw;
                width: 100%;
                border-bottom: 1px solid #D8D8D8;
                position: relative;

                i {
                    font-size: 1.8vw;
                    color: grey;
                    vertical-align: middle;
                    position: absolute;
                    left: 30%;
                    top: 1.6vw;
                }

                i:hover {
                    color: @active;
                }
            }

            &_child:last-child {
                border-bottom: none;
            }

            &_active i {
                color: @active;
            }
        }

        .more_container {
            height: 5vw;
            width: 100%;
            position: absolute;
            bottom: 3.3vw;

            i {
                font-size: 1.8vw;
                color: rgba(0, 0, 0, .2);
                vertical-align: middle;
                left: 30%;
                position: absolute;
            }

            i:hover {
                color: @active;
            }
        }
    }
}
</style>