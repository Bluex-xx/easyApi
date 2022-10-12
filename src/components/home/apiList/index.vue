<template>
    <div class="link_wrapper">
        <div class="search_wrapper">
            <input type="text" placeholder="Search...">
        </div>
        <div class="sample">
            <div class="sample_one sample_child">
                <i class="iconfont icon-tubiaozhizuo- point_one"></i>
                <i class="iconfont icon-charulianjie"></i>
                <div class="title">demo</div>
            </div>
            <div class="sample_two sample_child">
                <i class="iconfont icon-tubiaozhizuo- point_two"></i>
                <i class="iconfont icon-charulianjie"></i>
                <div class="title">demo</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.link_wrapper {
    width: 20%;
    height: 90vh;
    background-color: rgb(235, 238, 243);
    display: flex;
    flex-direction: column;
    border: 1px solid #80808038;
    border-top: none;
    .search_wrapper {
        margin: 1.7vw auto;

        input {
            width: 11vw;
            height: 2.3vw;
            border-radius: 10px;
            background: #F6F6F6;
            border:none;
            box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.126);
            outline: none;
            color: grey;
            font-size: 1.1rem;
            padding: 0 0.5vw;
            letter-spacing: 1.5px;
        }
    }

    .sample {
        display: flex;
        flex-direction: column;
        width: 100%;

        &_child {
            height: 2.7vw;
            border-bottom: 1px solid #D8D8D8;
            padding-left: 3vh;
            line-height: 5vh;
            display: flex;
            position: relative;
        
            .icon-tubiaozhizuo-{
                font-size: 2.8vw;
            }
            .point_one{
                color: green;
            }
            .point_two{
                color:red;
            }
            .point_one,.point_two{
               position: absolute;
               left:0;
            }
            .icon-charulianjie{
                position: absolute;
                font-size: 1.3vw;
                color: grey;
                left:2.5vw;
            }
            .title{
                position: absolute;
                left: 4.8vw;
                font-size: 1.2vw;
                color: grey;

            }
        }

        &_child:last-child{
            border-bottom: none;
        }
    }
}
</style>