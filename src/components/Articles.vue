<script setup lang="ts">
import { reactive } from "vue"
import ArticleImg1 from "../assets/images/article1.webp"
import ArticleImg2 from "../assets/images/article2.webp"
import ArticleImg3 from "../assets/images/article3.webp"
import ArticleImg4 from "../assets/images/article4.webp"
import ArticleImg5 from "../assets/images/article5.webp"
import ArticleImg6 from "../assets/images/article6.webp"
import ArticleImg7 from "../assets/images/article7.webp"
import ArticleImg8 from "../assets/images/article8.webp"
import { RouterLink } from 'vue-router';


const articlesData = reactive([
    {
        img: ArticleImg1,
        title: "The Ordinary Ticket",
    },
    {
        img: ArticleImg2,
        title: "Alieevwatch Luxury",
    },
    {
        img: ArticleImg3,
        title: "Businessman Ticket",
    },
    {
        img: ArticleImg4,
        title: "Divine Looks Gold",
    },
    {
        img: ArticleImg5,
        title: "Picture Elegant Young",
    },
    {
        img: ArticleImg6,
        title: "Swiss watches Black",
    },
    {
        img: ArticleImg7,
        title: "The Handsome Lookout",
    },
    {
        img: ArticleImg8,
        title: "Sleepless Observe Check",
    },
])

</script>

<template>
    <section class="articles">
        <div class="articles-wrapper container">
            <header class="articles-header">
                <h2 class="title">Articles</h2>
                <RouterLink to="/" class="show-link"> Show Nore </RouterLink>
            </header>
            <div class="article__cards-wrapper">
                
                <div class="article-card" v-for="article in articlesData">
                    <p class="watch-text">watch</p>
                    <p class="date-text">March 10, 2023</p>
                    <img :src="article.img" :alt="article.title">
                    <h3 class="article-title">{{ article.title }}</h3>
                    <h4 class="author-title">AUTHOR: ALIEEV</h4>
                    <button class="read-btn">READ MORE</button>
                </div>
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

.articles {
    width: 100%;
    padding: 90px 0;
    background-color: var(--dark-color);
}

.articles-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        @include f-style(41px, 500, var(--light-color));
    }

    .show-link {
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        @include f-style(14px, 500, #838383);
        border: 1px solid #838383;
        padding: 12px 35px;

        &:hover {
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);
            ;
            color: var(--light-color);
        }
    }
}

.article__cards-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 1.5rem;
    margin-top: 3rem;

    .article-card {
        max-width: 280px;
        width: 100%;
        height: fit-content;
        position: relative;

        .watch-text {
            position: absolute;
            top: 3%;
            left: 5%;
            @include f-style(14px, 400, var(--light-color));
            padding: 3px 8px;
            border-radius: 6px;
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);;
            color: var(--light-color);
        }
        .date-text{
            position: absolute;
            top: 3%;
            right: 5%;
            @include f-style(14px, 400, var(--light-color));
        }

        img {
            width: 100%;
            height: 190px;
            object-fit: cover;
            border: 1px solid #6400B2;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
        }

        .article-title {
            margin-top: 1rem;
            @include f-style(22px, 600, var(--light-color));
        }

        .author-title {
            @include f-style(14px, 400, var(--light-color));
            margin-top: 1rem;
        }

        .read-btn {
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            background-color: #323232;
            @include f-style(14px, 500, var(--light-color));
            padding: 9px 17px;
            margin-top: 1rem;
        }
    }
}
</style>