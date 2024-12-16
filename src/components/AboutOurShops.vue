<script setup lang="ts">
    import BackOfWatch  from "../assets/images/about-images/back_of_watch.png"
    import FrontOfWatch from "../assets/images/about-images/front_of_watch.png"
</script>

<template>
    <section class="about-our-shops">
        <div class="our__shop-contents__top container">
            <div class="back-image">
                <img :src="BackOfWatch">
            </div>
            <div class="shop-contents">
                <div class="content-card">
                        <h3 class="item-title">Automatic Blue...</h3>
                        <span class="item-type">TYPE: men</span>
                        <p class="item-description">Water Resistant | Note - please Do Not press any buttons in the water Dimension - Case Diameter - 55mm | Case Width - 54mm | Case Thickness - 17mm...</p>
                        <label for="color" class="color-label">Color:
                            <select name="color" id="color">
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                            </select>
                        </label>
                        <div class="price-actions">
                            <div class="price-item">
                                <strong>25.00 <sup>USD</sup></strong>
                            </div>
                            <button class="add-btn">Add To Cart</button>
                        </div>
                </div>
                <img :src="FrontOfWatch">
            </div>
        </div>

        <div class="our__shops-wrapper container">
            <header class="shops-header">
                <h3 class="header-title">About our shop</h3>
                <p class="header-description">Pocket watches were once the most popular type of watch, but they have since been largely replaced by wristwatches.</p>
            </header>
            <div class="shops__cards-container">
                <div v-for="i in 4" :key="i" class="shop-card">
                    <h2>01</h2>
                    <h4>Gift boxes</h4>
                    <p>Finished products products and gift wrapping</p>
                </div>
            </div>
        </div>

    </section>
</template>



<style lang="scss" scoped>

    @mixin f-style($size, $weight, $color) {
        font-size: $size;
        font-weight: $weight;
        color: $color;
    }

    .about-our-shops{
        width: 100%;
        padding: 90px 0;
        background-color: var(--light-color);
    }

    .our__shop-contents__top{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 1.5rem;
        .back-image{
            max-width: 352px;
            width: 100%;
            height: 550px;
            object-fit: contain;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shop-contents{
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 1.5rem;
            .content-card{
                width: 100%;
                max-width: 312px;
                height: fit-content;
                padding: 15px 20px;
                background-color: var(--light-second);
                background: linear-gradient(148deg,#4c028236,#0000);
                border-top-right-radius: 10px;
                border-bottom-left-radius: 10px;
                border: 1px solid var(--purple-color);
                .item-title{
                    @include f-style(26px, 600, var(--dark-color));
                    margin-bottom: 10px;
                }
                .item-type{
                    @include f-style(14px, 400, var(--gray-light));
                }
                .item-description{
                    @include f-style(14px, 400, var(--gray-light));
                    margin: 15px 0;
                    line-height: 20px;
                }
                .color-label{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    @include f-style(14px, 500, var(--dark-color));
                    select{
                        width: 100%;
                        margin-top: 7px;
                        padding: 6px 10px;
                        border-radius: 6px;
                        @include f-style(14px, 400, var(--gray-light));
                        background: transparent;
                        border: 1px solid var(--gray-light) !important;
                    }
                }
                .price-actions{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 15px;
                    .price-item{
                        @include f-style(26px, 600, var(--dark-color));
                        strong{
                            @include f-style(15px, 500, var(--dark-color));
                        }
                        sup{
                            @include f-style(10px, 500, var(--dark-color));
                        }
                    }
                    .add-btn{
                        padding: 7px 25px;
                        background-color: var(--dark-color);
                        @include f-style(14px, 400, var(--light-color));
                        border: none;
                        border-top-right-radius: 15px;
                        border-bottom-left-radius: 15px;
                        &:hover {
                            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);
                            ;
                            color: var(--light-color);
                        }
                    }
                }
            }
            img{
                max-width: 332px;
                height: 444px;
                width: 100%;
                object-fit: contain;
            }
        }
    }

    .our__shops-wrapper{
        margin-top: 2rem;
        width: 100%;
        .shops-header{
            .header-title{
                @include f-style(41px, 500, val(--dark-color));
            }
            .header-description{
                margin-top: .6rem;
                @include f-style(15px, 400, rgb(131, 131, 131));
                line-height: 20px;
            }
        }
        .shops__cards-container{
            display: grid;
            margin-top: 2rem;
            column-gap: 1.4rem;
            justify-items: center;
            grid-template-columns: repeat(4, 1fr);
            .shop-card{
                max-width: 270px;
                width: 100%;
                height: fit-content;
                border-top-right-radius: 12px;
                border-bottom-left-radius: 12px;
                padding: 1rem;
                border: 1px solid var(--purple-color);
                background: linear-gradient(148deg,#43017161,#0000);
                h2{
                    @include f-style(38px, 600, var(--dark-color));
                }
                h4{
                    margin-top: 5px;
                    @include f-style(26px, 500, var(--dark-color));}
            }
            p{
                @include f-style(14px, 400, var(--gray-light));
                margin-top: .8rem;
                line-height: 20px;
            }
        }
    }
</style>