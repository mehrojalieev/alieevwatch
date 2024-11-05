<script setup lang="ts">
    import HeroImage from "../assets/images/hero-watch.webp"
</script>


<template>
    <section class="hero">
        <div class="hero__navbar-wrapper">
            <header class="container">
                <p>New Accessories -30 % Off. More</p>
                <form class="search__form-wrapper">
                    <div class="search-form">
                        <i class="pi pi-search"></i>
                        <input type="text" placeholder="Search product...">
                    </div>
                </form>
                <RouterLink to="/collection-link" class="collection-link">New Collections</RouterLink>
            </header>
        </div>
        <div class="hero__main-wrapper container">
            <div class="hero__main-contents">
                <div class="content-top">
                    <p class="feature-text">Featured</p>
                    <p>New featured collection</p>
                </div>
                <h3 class="content-title">Professional and Luxury watches for everyone</h3>
                <p class="content-description">Watches have a long and fascinating history that dates back to the 17th century. The first watches were developed from spring-powered clocks, which appeared as early as the 14th century.</p>
                <div class="content-btns">
                    <button>Show products <i class="pi pi-arrow-right"></i></button>
                    <button>Show products <i class="pi pi-arrow-right"></i></button>
                </div>
            </div>
            <div class="hero__main-image">
                <img :src="HeroImage" alt="">
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

.hero__navbar-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #3f3e3e;
    border-bottom: 1px solid #3f3e3e;
    padding: 10px 0;

    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            @include f-style(14px, 600, var(--light-color));
        }
    }
    .search__form-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding-right: 5rem;
        .search-form{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 1rem;
            max-width: 300px;
            width: 100%;
            padding: 10px 40px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 20px;
            border: 1px solid var(--light-color);
            i{
                @include f-style(18px, 500, #C6C6C6);
            }
            input{
                background: transparent;
                border: none;
                outline: none;
                @include f-style(15px, 400, var(--light-color));
            }
        }
    
    }
    .collection-link{
        @include f-style(15px, 500, var(--light-color));
        border-bottom: 1px solid var(--light-color);
    }
}

.hero__main-wrapper{
    margin-top: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10rem;
}

.hero__main-contents{
    .content-top{
        display: flex;
        align-items: center;
        column-gap: 1rem;
        max-width: 400px;
        height: 48px;
        width: 100%;
        background-color: #404040;
        border-radius: 24px;
        padding: 0px 20px;
        width: 100%;
        p{
            @include f-style(14px, 500, var(--light-color));
        }
        .feature-text{
            background-color: #59148F;
            padding: 4px 10px;
            border-radius: 10px;
        }
    }
    .content-title{
        margin-top: 20px;
        @include f-style(50px, 600, var(--light-color));
        line-height: 61px;
        max-width: 520px;
    }
    .content-description{
        line-height: 24px;
        margin-top: 20px;
        @include f-style(14px, 400,rgb(131, 131, 131));
        max-width: 470px;
    }
    .content-btns{
        display: flex;
        align-items: center;
        column-gap: 2rem;
        margin-top: 20px;
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 10px;
            padding: 12px 40px;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            @include f-style(14px, 400, #7F837F);
            border: 1px solid #7F837F;
                &:hover{
                    background: linear-gradient(75deg, #6400b2 0%, #000000 100%);;
                    color: var(--light-color);
                    border: 1px solid #6400b2;
            }
        }
        button:first-child{
                background-color: #323232;
                color: var(--light-color);
                &:hover{
                    background-color: #7F837F;
                    color: #7F837F;
                    background: var(--dark-color);
                    border: 1px solid #7F837F;
                    
                }
        }
    }
}

.hero__main-image{
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 320px;
        height: 270px;
        width: 100%;
        object-fit: contain;
    }
}

@media only screen and (max-width:886px){
    .hero__main-wrapper{
        column-gap: 7rem;
    }
    .hero__main-contents{
    .content-top{
        p{
            @include f-style(14px, 500, var(--light-color));
        }
        .feature-text{
            padding: 4px 10px;
        }
    }
    .content-title{
        margin-top: 20px;
        @include f-style(45px, 600, var(--light-color));
        line-height: 53px;
    }
    .content-description{
        line-height: 24px;
        margin-top: 20px;
        @include f-style(14px, 400,rgb(131, 131, 131));
        max-width: 470px;
    }
    .content-btns{
        column-gap: 2rem;
        margin-top: 20px;
        button{
            padding: 12px 30px;
            @include f-style(14px, 400, #7F837F);
           
        }
    }
}
}

@media only screen and (max-width: 782px) {
    .hero__navbar-wrapper {
    padding: 10px 0;

    header {
        p {
            @include f-style(14px, 500, var(--light-color));
        }
    }
    .search__form-wrapper{
        padding-right: 5rem;
        .search-form{
            column-gap: 1rem;
            max-width: 260px;
            padding: 9px 30px;
            i{
                @include f-style(16px, 500, #C6C6C6);
            }
            input{
                @include f-style(14px, 400, var(--light-color));
            }
        }
    
    }
    .collection-link{
        @include f-style(14px, 500, var(--light-color));
        border-bottom: 1px solid var(--light-color);
    }
}
}

@media only screen and (max-width: 765px) {
    .hero__main-wrapper{
        column-gap: 4.5rem;
    }
    .hero__main-contents{
    .content-top{
        max-width: 350px;
        p{
            @include f-style(14px, 400, var(--light-color));
        }
        .feature-text{
            padding: 4px 10px;
        }
    }
    .content-title{
        margin-top: 20px;
        @include f-style(40px, 500, var(--light-color));
        line-height: 48px;
    }
    .content-description{
        line-height: 22px;
        margin-top: 20px;
        @include f-style(14px, 400,rgb(131, 131, 131));
        max-width: 470px;
    }
    .content-btns{
        column-gap: 1.8rem;
        margin-top: 20px;
        button{
            padding: 12px 20px;
            @include f-style(14px, 400, #7F837F);
           
        }
    }
}

}

@media only screen  and (max-width: 710px) {
    .hero__navbar-wrapper {
        display: none;
    }
    
}

@media only screen and (max-width: 654px) {
    .hero__main-wrapper{
        column-gap: 4.5rem;
    }
    .hero__main-contents{

        .content-top{
        max-width: 450px;
        p{
            @include f-style(15px, 400, var(--light-color));
        }
        .feature-text{
            padding: 4px 10px;
        }
    }
    .content-title{
        margin-top: 20px;
        @include f-style(45px, 500, var(--light-color));
        line-height: 48px;
    }
    .content-description{
        line-height: 24px;
        margin-top: 20px;
        max-width: 100%;
        @include f-style(15px, 400,rgb(131, 131, 131));
    }
    .content-btns{
        column-gap: 2rem;
        margin-top: 20px;
        button{
            padding: 12px 30px;
            @include f-style(14px, 400, #7F837F);
           
        }
    }
}
.hero__main-image{
    display: none;
}

}

@media only screen and (max-width: 490px) {
    .hero__main-contents{

        .content-top{
        max-width: 320px;
        p{
            @include f-style(14px, 400, var(--light-color));
        }
        .feature-text{
            padding: 3px 8px;
        }
    }
    .content-title{
        @include f-style(35px, 500, var(--light-color));
        line-height: 45px;
    }
    .content-description{
        line-height: 22px;
        @include f-style(14px, 400,rgb(131, 131, 131));
    }
    .content-btns{
        column-gap: 1.8rem;
        margin-top: 20px;
        button{
            padding: 12px 30px;
            @include f-style(13px, 400, #7F837F);
           
        }
    }
}
.hero__main-image{
    display: none;
}

}


@media only screen and (max-width: 400px) {
    .hero__main-contents{

        .content-top{
        max-width: 320px;
        height: 40px;
        p{
            @include f-style(13px, 400, var(--light-color));
        }
        .feature-text{
            padding: 3px 8px;
        }
    }
    .content-title{
        @include f-style(30px, 500, var(--light-color));
        line-height: 42px;
    }
    .content-description{
        line-height: 22px;
        @include f-style(13px, 400,rgb(131, 131, 131));
    }
    .content-btns{
        column-gap: 1.8rem;
        margin-top: 20px;
        flex-direction: column;
        row-gap: 1rem;
        button{
            padding: 10px 20px;
            width: 100%;
            @include f-style(13px, 400, #7F837F);
           i{
            margin-top: 3px;
            font-size: 10px;
           }
        }
    }
}
.hero__main-image{
    display: none;
}

}
</style>