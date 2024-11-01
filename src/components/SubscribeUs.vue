<script setup lang="ts">
    import SubscribeImg from "../assets/images/subscribe-img.webp"
</script>


<template>
    <section class="subscribe-us">
            <div class="subscribe-wrapper  container">
                    <div class="subscribe-contents">
                        <h5 class="content-subtitle">Subscribe Us</h5>
                        <h2 class="content-title">Subscribe newsletter and get -20% off</h2>
                        <p class="content-description">During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel.</p>
                        <form class="content-form">
                            <input type="email" placeholder="Enter email adress...">
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div class="subscribe-image">
                        <img :src="SubscribeImg">
                    </div>
            </div>
    </section>
</template>





<style scoped lang="scss">
@mixin f-style($size, $weight, $color) {
    font-size: $size;
    font-weight: $weight;
    color: $color;
}
.subscribe-us {
    width: 100%;
    margin-top: 4rem;
    padding: 5rem 0;
    background-color: var(--light-color);
}
.subscribe-wrapper{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.subscribe-contents{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
    gap: 1rem;

    .content-subtitle{
        padding: 3px 10px;
        border-radius: 6px;
        @include f-style(15px, 400, var(--light-color));
        background-color: #8B61AB;

    }
    .content-title{
        @include f-style(40px, 500, var(--dark-color));
        line-height: 49px;
        max-width: 380px;
    }
    .content-description{
        @include f-style(15px, 400,rgb(131, 131, 131));
        line-height: 20px;
        max-width: 470px;
    }
    .content-form{
        display: flex;
        align-items: center;
        max-width: 450px;
        width: 100%;
        height: 44px;
        overflow: hidden;
        border: 1px solid var(--dark-color);
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        input{
            background: transparent;
            width: 100%;
            height: 100%;
            outline: none;
            border: none;
            text-indent: 10px;
            @include f-style(14px, 500, var(--dark-color));
        }
        button{
            padding: 14px 45px;
            @include f-style(14px, 600 , var(--light-color)); 
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);;
        }
    }
}
.subscribe-image{
    max-width: 670px;
    height: 370px;
    width: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain
    }
}


// RESPONSIVE STYLES
@media only screen and (max-width: 1052px) {
    .subscribe-image{
    max-width: 580px;
    height: 355px;
}
}

@media only screen and (max-width: 880px) {
    .subscribe-contents{
    gap: 1rem;

    .content-subtitle{
        padding: 3px 10px;
        @include f-style(15px, 400, var(--light-color));

    }
    .content-title{
        @include f-style(32px, 500, var(--dark-color));
        line-height: 44px;
        max-width: 380px;
    }
    .content-description{
        @include f-style(14px, 400,rgb(131, 131, 131));
        line-height: 20px;
        max-width: 470px;
        width: 100%;
    }
    .content-form{
        max-width: 450px;
        height: 44px;
        input{
            @include f-style(14px, 500, var(--dark-color));
        }
        button{
            padding: 14px 30px;
            @include f-style(14px, 600 , var(--light-color)); 
        }
    }
}
.subscribe-image{
    max-width: 500px;
    height: 335px;
}
}

@media only screen and (max-width:780px){
    .subscribe-wrapper{
        flex-direction: column-reverse;
    }
    .subscribe-contents{
    gap: 1rem;
    margin-top: 2rem;

    .content-subtitle{
        padding: 3px 10px;
        @include f-style(15px, 400, var(--light-color));

    }
    .content-title{
        @include f-style(32px, 500, var(--dark-color));
        line-height: 44px;
        max-width: 100%;
    }
    .content-description{
        @include f-style(16px, 400,rgb(131, 131, 131));
        line-height: 24px;
        max-width: 100%;
    }
    .content-form{
        max-width: 100%;
        height: 44px;
        input{
            @include f-style(16px, 500, var(--dark-color));
        }
        button{
            padding: 14px 36px;
            @include f-style(16px, 600 , var(--light-color)); 
        }
    }
}
    .subscribe-image{
    max-width: 780px;
    height: 370px;
}
}

@media only screen and (max-width: 480px) {
    .subscribe-contents{
    gap: 1rem;
    margin-top: 2rem;

    .content-subtitle{
        padding: 3px 10px;
        @include f-style(15px, 400, var(--light-color));

    }
    .content-title{
        @include f-style(32px, 500, var(--dark-color));
        line-height: 42px;
        max-width: 100%;
    }
    .content-description{
        @include f-style(16px, 400,rgb(131, 131, 131));
        line-height: 24px;
        max-width: 100%;
    }
    .content-form{
        max-width: 100%;
        height: 44px;
        input{
            @include f-style(16px, 400, var(--dark-color));
        }
        button{
            padding: 14px 22px;
            @include f-style(15px, 500 , var(--light-color)); 
        }
    }
}
    .subscribe-image{
    max-width: 780px;
    height: 230px;
}
}

@media only screen and (max-width: 360px) {
    .subscribe-contents{
    gap: 1.2rem;
    margin-top: 1.2rem;

    .content-subtitle{
        padding: 3px 10px;
        @include f-style(14px, 400, var(--light-color));

    }
    .content-title{
        @include f-style(26px, 500, var(--dark-color));
        line-height: 36px;
        max-width: 100%;
    }
    .content-description{
        @include f-style(15px, 400,rgb(131, 131, 131));
        line-height: 22px;
        max-width: 100%;
    }
    .content-form{
        max-width: 100%;
        height: 42px;
        input{
            @include f-style(15px, 400, var(--dark-color));
        }
        button{
            height: 100%;
            padding: 0px 20px;
            @include f-style(14px, 500 , var(--light-color)); 
        }
    }
}
    .subscribe-image{
    max-width: 780px;
    height: 230px;
}
}
</style>