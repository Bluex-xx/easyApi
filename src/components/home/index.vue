<template>
    <div class="big_wrapper">
        <div class="home_wrapper">
            <!--工具侧边栏-->
            <div class="toolbar_wrapper">
                <div class="toolbar_container">
                    <div class="profile_photo_container">
                        <img src="../../assets/images/logo.png" alt="">
                    </div>

                    <div class="tool_wrapper">
                        <div class="tool_one tool_child">

                        </div>

                        <div class="tool_two tool_child">

                        </div>

                        <div class="tool_three tool_child">

                        </div>

                        <div class="tool_four tool_child">

                        </div>
                    </div>
                </div>
            </div>

            <!--链接栏-->
            <div class="link_wrapper">
                <div class="search_wrapper">
                    <input type="text">
                </div>
                <div class="sample_wrapper">
                    <div class="sample_one sample">
                        链接一
                    </div>
                    <div class="sample_two sample">
                        链接二
                    </div>
                </div>
            </div>

            <!--主页面-->
            <div class="main_wrapper">
                <div class="top_wrapper">
                    <ul class="top_link_container">
                        <li class="top_link">
                            <span class="title">链接一</span>
                            <span class="icon">x</span>
                        </li>
                        <li class="top_link">
                            <span class="title">链接一</span>
                            <span class="icon">x</span>
                        </li>
                        <li class="top_link">
                            <span class="title">链接一</span>
                            <span class="icon">x</span>
                        </li>
                    </ul>
                </div>

                <div class="request">
                    
                </div>

                <div class="main">

                </div>

                <div class="response_wrapper">
                    <div class="title">
                        Response
                    </div>
                    <div class="response_main">
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue";


</script>

<style lang="less">
.big_wrapper{
    margin:5vh auto;
    width: 100%;
    height: 90vh;
}

.home_wrapper {
    display: flex;
    width: 90%;
    margin: auto;
    border-radius: 3%;
    overflow: hidden;

    .toolbar_wrapper {
        width: 8%;
        

        .toolbar_container {
            background-color: rgb(233,237,246);
            height: 90vh;
            display: flex;
            flex-direction: column;
            border: 0.5px solid #ddd;
            box-shadow: 10px 10px 10px 10px rgba(0,0,0,.5);

            .profile_photo_container {
                margin: 0 auto;
                margin-top: 20px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: black;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .tool_wrapper {
                display: flex;
                flex-direction: column;
                margin-top: 50px;

                .tool_child {
                    margin: auto;
                    background-color: rgb(215, 221, 235);
                    height: 100px;
                    width: 80px;
                    border-bottom: 1px solid rgb(241, 231, 231);
                }
            }



        }
    }

    .link_wrapper {
        width: 17%;
        height: 90vh;
        background-color: rgb(235,238,243);
        display: flex;
        flex-direction: column;

        .search_wrapper{
            margin: 20px auto;

    
            input{
                height: 30px;
                border: none;
                text-decoration: none;
                overflow: hidden;
                border-radius: 5%;
            }


        }

        .sample_wrapper{
            display: flex;
            flex-direction: column;

            .sample{
                height: 5vh;
                background-color: rgb(201, 217, 241);
                border-bottom: 1px solid rgb(235, 215, 215);
                padding-left: 3vh;
                line-height: 5vh;
            }
        }

    }

    .main_wrapper {
        width: 80%;
        height: 90vh;
        background-color: rgb(244,245,250);        
        display: flex;
        flex-direction: column;

        .top_wrapper{
            display: flex;
            
            height: 6vh;
            line-height: 6vh;
            
            .top_link_container{
                display: flex;
                background-color:rgb(235,238,243) ;

                .top_link{
                    display: flex;
                    width: 25vh;
                    padding-left: 15px;
                    padding-right: 15px;
                    justify-content: space-between;
                    border-right: 1px solid #ddd;
                }
            }
        }

        .response_wrapper{
            .response_main{
                
            }
        }
    }

}
</style>