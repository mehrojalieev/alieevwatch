<script setup lang="ts">
import { reactive } from "vue"
import ArticleImg1 from "../assets/images/articles/article1.webp"
import ArticleImg2 from "../assets/images/articles/article2.webp"
import ArticleImg3 from "../assets/images/articles/article3.webp"
import ArticleImg4 from "../assets/images/articles/article4.webp"
import ArticleImg5 from "../assets/images/articles/article5.webp"
import ArticleImg6 from "../assets/images/articles/article6.webp"
import ArticleImg7 from "../assets/images/articles/article7.webp"
import ArticleImg8 from "../assets/images/articles/article8.webp"
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
                    <div class="card-bottom">
                        <h4 class="author-title">AUTHOR: ALIEEV</h4>
                        <button class="read-btn">READ MORE</button>
                    </div>
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
            background: linear-gradient(75deg, #6400b2 0%, #000000 100%);
            ;
            color: var(--light-color);
        }

        .date-text {
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

// RESPONSIVE STYLES
@media only screen and (max-width:986px) {
    .article__cards-wrapper {
        .article-card {
            max-width: 280px;

            .watch-text {
                @include f-style(14px, 400, var(--light-color));
                padding: 3px 8px;
            }

            .date-text {

                @include f-style(14px, 400, var(--light-color));
            }

            img {
                height: 170px;
            }

            .article-title {
                margin-top: 1rem;
                @include f-style(20px, 500, var(--light-color));
            }

            .author-title {
                @include f-style(14px, 400, var(--light-color));
            }

            .read-btn {
                @include f-style(14px, 400, var(--light-color));
                padding: 7px 15px;
            }
        }
    }
}

@media only screen and (max-width:896px) {
    .article__cards-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (max-width:776px) {
    .article__cards-wrapper {
        grid-template-columns: repeat(2, 1fr);

        .article-card {
            max-width: 100%;

            .watch-text {
                @include f-style(14px, 400, var(--light-color));
                padding: 3px 8px;
            }

            .date-text {

                @include f-style(14px, 400, var(--light-color));
            }

            img {
                height: 200px;
            }

            .article-title {
                margin-top: 1rem;
                @include f-style(20px, 500, var(--light-color));
            }
                .card-bottom{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 8px;
                }
            .author-title {
                @include f-style(14px, 400, var(--light-color));
            }

            .read-btn {
                @include f-style(14px, 400, var(--light-color));
                padding: 7px 15px;
            }
        }
    }
}


@media only screen and (max-width:594px) {
    .articles-header {
    .title {
        @include f-style(34px, 500, var(--light-color));
    }

    .show-link {
        @include f-style(14px, 500, #838383);
        padding: 10px 32px;
    }
}
    .article__cards-wrapper {
        grid-template-columns: repeat(1, 1fr);

        .article-card {
            max-width: 100%;
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6),
            &:nth-child(7),
            &:nth-child(8) {
        display: none !important;
    }

            .watch-text {
                @include f-style(14px, 400, var(--light-color));
                padding: 3px 12px;
            }

            .date-text {

                @include f-style(14px, 400, var(--light-color));
            }

            img {
                height: 320px;
            }

            .article-title {
                margin-top: 1rem;
                @include f-style(22px, 500, var(--light-color));
            }
                .card-bottom{
                    flex-direction: column;
                    align-items: start;
                }
            .author-title {
                @include f-style(15px, 400, var(--light-color));
            }

            .read-btn {
                @include f-style(15px, 400, var(--light-color));
                padding: 8px 30px;
            }
        }
    }
}

@media only screen and (max-width:400px) {
    .article__cards-wrapper {
        .article-card {
            img {
                height: 230px;
            }
            
            .article-title {
                margin-top: 1rem;
                @include f-style(20px, 500, var(--light-color));
            }
            .author-title {
                @include f-style(14px, 400, var(--light-color));
            }

            .read-btn {
                @include f-style(14px, 400, var(--light-color));
                padding: 6px 28px;
            }
        }
    }
}
</style>