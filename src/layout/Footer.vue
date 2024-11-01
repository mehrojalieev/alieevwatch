<script setup lang="ts">

</script>


<template>
    <footer>
        <div class="footer-wrapper container">
            <div class="footer-content">
                <RouterLink to="/" class="logo-link">Alieevwatch</RouterLink>
                <h3 class="title">Reach out & let your mind explore</h3>
                <p class="description">When you are not wearing your watch, store it in a cool, dry place.</p>
            </div>
            <div class="footer-menus">
                <div class="footer-menu"> 
                    <h4 class="menu-title">NAVIGATION:</h4>
                    <ul class="menu-list">
                        <li><RouterLink class="item-link" to="/">Search</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">All collections</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">All products</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">My cart</RouterLink></li>
                    </ul>
                </div>
                <div class="footer-menu"> 
                    <h4 class="menu-title">CATEGORIES:</h4>
                    <ul class="menu-list">
                        <li><RouterLink class="item-link" to="/">About Us</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">Contact with us</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">Faq's</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">Privacy policy</RouterLink></li>
                        <li><RouterLink class="item-link" to="/">Terms & Conditions</RouterLink></li>
                    </ul>
                </div>
            </div>
            <div class="social-actions">
                    <h4>SHARE:</h4>
                    <div class="icons">
                        <i class="pi pi-facebook"></i>
                        <i class="pi pi-instagram"></i>
                        <i class="pi pi-youtube"></i>
                        <i class="pi pi-twitter"></i>
                    </div>
            </div>
        </div>
    </footer>
</template>


<style scoped lang="scss">
    @mixin f-style($size, $weight, $color) {
        font-size: $size;
        font-weight: $weight;
        color: $color;
    }
    footer{
        width: 100%;
        background-color: var(--dark-color);
        padding: 70px 0;
    }
    .footer-wrapper{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 2rem;
       
    }
    .footer-content{
        .logo-link{
            @include f-style(32px, 700, var(--light-second));
            letter-spacing: 1px;
            
        }
        .title{
            @include f-style(26px, 600, var(--light-color));
            margin-top: 20px;
            max-width: 300px;
            line-height: 31px;
        }
        .description{
            @include f-style(14px, 400, var(--light-color));
            margin-top: 20px;
            max-width: 390px;
            line-height: 20px;
        }
    }


    .footer-menus{
        width: fit-content;
        display: flex;
        align-items: flex-start;
        justify-self: center;
        column-gap: 100px;
        h4{
            @include f-style(15px, 600, var(--light-color)); 
            margin-bottom: 1.2rem;
        }
        .menu-list{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            row-gap: .8rem;
            .item-link{
                @include f-style(15px, 400, var(--light-color));
                &:hover{
                    color:  rgb(131, 131, 131)
                }
            }
        }
    }
    .social-actions{
        h4{
            @include f-style(15px, 600, var(--light-color) );
        }
        .icons{
            display: flex;
            align-items: center;
            column-gap: 10px;
            margin-top: 1rem;
            i{
                display: flex;
                align-items: center;
                justify-content: center;
                @include f-style(17px, 400, var(--dark-color));
                border-radius: 6px;
                padding: 6px;
                background-color: var(--light-color);
                cursor: pointer;
                &:hover{
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);;
            color: var(--light-color);

                }
            }
        }
    }
    // RESPONSIVE STYLES
    @media only screen and (max-width:960px){
        .footer-content{
        .logo-link{
            @include f-style(32px, 700, var(--light-second));
            
        }
        .title{
            @include f-style(24px, 600, var(--light-color));
            max-width: 280px;
        }
        .description{
            @include f-style(14px, 400, var(--light-color));
            max-width: 300px;
        }
    }
        .footer-menus{
            column-gap: 80px;
        }
    }
    @media only screen and (max-width:848px){
        .footer-content{
        .logo-link{
            @include f-style(30px, 700, var(--light-second));
            
        }
        .title{
            @include f-style(22px, 600, var(--light-color));
            max-width: 260px;
        }
        .description{
            @include f-style(14px, 400, var(--light-color));
            max-width: 270px;
        }
    }
        .footer-menus{
            column-gap: 60px;
        }
    }

    @media only screen and (max-width:770px){
        .footer-wrapper{
            flex-direction: column;
            row-gap: 3rem;
        }
        .footer-content{
        .logo-link{
            @include f-style(34px, 700, var(--light-second));
            
        }
        .title{
            @include f-style(26px, 600, var(--light-color));
            max-width: 600px;
        }
        .description{
            @include f-style(17px, 400, var(--light-color));
            max-width: 500px;
        }
    }
        .footer-menus{
            margin-top: 1.5rem;
            column-gap: 120px;
            h4{
            @include f-style(18px, 600, var(--light-color)); 
            margin-bottom: 1.4rem;
        }
        .menu-list{
            row-gap: 1.2rem;
            .item-link{
                @include f-style(17px, 400, var(--light-color));
            }
        }
        }
    }


    @media only screen and (max-width:450px){
        .footer-wrapper{
            row-gap: 3rem;
        }
        .footer-content{
        .logo-link{
            @include f-style(34px, 700, var(--light-second));
            
        }
        .title{
            @include f-style(23px, 600, var(--light-color));
        }
        .description{
            @include f-style(15px, 400, var(--light-color));
        }
    }
        .footer-menus{
            margin-top: 1rem;
            flex-direction: column;
            row-gap: 2.8rem;
            h4{
            @include f-style(17px, 600, var(--light-color)); 
            margin-bottom: 1.4rem;
        }
        .menu-list{
            row-gap: 1.2rem;
            .item-link{
                @include f-style(16px, 400, var(--light-color));
            }
        }
        }
    }

    @media only screen and (max-width:390px){
        .footer-content{
        .logo-link{
            @include f-style(32px, 700, var(--light-second));
            
        }
        .title{
            @include f-style(20px, 600, var(--light-color));
            margin-top: .6rem;
        }
        .description{
            @include f-style(15px, 400, var(--light-color));
            margin-top: .8rem;

        }
    }
    }
</style>