<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const selectedLang = ref<string>("en");
const isNavbarVisible = ref<boolean>(true);
const closeSidebar = ref<boolean>(false)
let lastScrollY = window.scrollY;

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    isNavbarVisible.value = currentScrollY < lastScrollY || currentScrollY < 10;
    lastScrollY = currentScrollY;
};
const handleResize = () => {
    closeSidebar.value = window.innerWidth > 698 && false ;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);    
    handleResize();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
});



</script>

<template>
    <nav :style="{ 'transform': isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)' }">
        <div class="nav-wrapper container">
            <div class="nav__menu-logo">

                <ul class="nav-menu">
                    <li>
                        <RouterLink class="item-link" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="item-link" to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="item-link" to="/contact">Contact</RouterLink>
                    </li>
                </ul>
                <RouterLink to="/" class="logo-link">Alieevwatch</RouterLink>
            </div>
            <div class="nav-actions">
                <RouterLink class="login-link" to="/login"><i class="pi pi-user"></i></RouterLink>
                <RouterLink class="search-link" to="/search"><i class="pi pi-search"></i></RouterLink>
                <select v-model="selectedLang" class="language-select">
                    <option value="en">ENG</option>
                    <option value="ru">RU</option>
                </select>
                <div class="cart-amount">
                    <span>My Cart:</span><strong>0.00 USD</strong>
                </div>
                <div class="cart-action">
                    <i class="pi pi-shopping-cart"></i>
                    <span class="cart-number">0</span>
                </div>
                <button @click="closeSidebar = !closeSidebar" class="menu-btn"><i class="pi pi-bars"></i></button>
            </div>
        </div>
        <div :style="{ 'transform': closeSidebar ? 'translateX(0%)' : 'translateX(100%)',  display: closeSidebar ? 'block' : 'none'  }"
            class="responsive__menu-sidebar">
            <div class="sidebar-header" :style="{  display: closeSidebar ? 'block' : 'none'}">
                <button @click="closeSidebar = !closeSidebar"><i class="pi pi-times"></i></button>
            </div>
            <ul class="nav-menu" :style="{ display: closeSidebar ? 'block' : 'none'}">
                <li>
                    <RouterLink class="item-link" to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink class="item-link" to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink class="item-link" to="/contact">Contact</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@mixin f-style($size, $weight, $color) {
    font-size: $size;
    font-weight: $weight;
    color: $color;
}

nav {
    width: 100%;
    position: sticky;
    top: 0;
    transition: transform 0.3s ease-in-out;
    background-color: var(--dark-color);
}

.responsive__menu-sidebar {
    max-width: 100%;
    width: 100%;
    height: 100vh !important;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    background: var(--light-color);
    transform: translateX(100%);
    .sidebar-header {
        width: 100%;
        background-color: #6400B2;
        padding: 1rem 2rem;

        button {
            @include f-style(20px, 600, var(--light-color))
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        align-items: start;
        padding: 1rem 2rem;

        .item-link {
            @include f-style(20px, 400, var(--gray-second))
        }
    }
}

.nav-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.4rem;
}

.nav__menu-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55%;

    .nav-menu {
        display: flex;
        align-items: center;
        column-gap: 2rem;

        .item-link {
            @include f-style(16px, 600, var(--light-color));
            letter-spacing: 0.5px;
        }
    }

    .logo-link {
        @include f-style(30px, 600, var(--light-second));
        letter-spacing: 1px;
    }
}

.nav-actions {
    display: flex;
    align-items: center;
    column-gap: 1.8rem;

    .login-link, .search-link {
        @include f-style(18px, 500, var(--light-color));
    }
    .search-link{
        display: none;
    }

    .language-select {
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 3px 4px;
        background-color: var(--dark-color);
        border: 1px solid var(--light-color);
        color: var(--light-color);
        @include f-style(14px, 500, var(--light-color));
    }

    .cart-amount {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        span,
        strong {
            @include f-style(14px, 600, var(--light-color));
        }
    }

    .cart-action {
        position: relative;

        i {
            @include f-style(22px, 500, var(--light-color));
        }

        .cart-number {
            position: absolute;
            top: -10px;
            right: -10px;
            border-radius: 5px;
            padding: 1px 5px;
            background-color: #45007B;
            @include f-style(13px, 500, var(--light-color));
        }
    }

    .menu-btn {
        background: transparent;
        border: none;
        display: none;
        align-self: center;
        justify-content: center;
        @include f-style(19px, 400, var(--light-color))
    }
}

// RESPONSIVE STYLES
@media only screen and (max-width:978px) {
    .nav__menu-logo {
        width: auto;
        column-gap: 2rem;
        justify-content: flex-start;
        flex-direction: row-reverse;

        .logo-link {
            @include f-style(24px, 600, var(--light-second));
        }
    }
}

@media only screen and (max-width:766px) {
    .nav__menu-logo {
        .nav-menu {
            column-gap: 1.8rem;

            .item-link {
                @include f-style(16px, 500, var(--light-color));
                letter-spacing: 0.5px;
            }
        }
    }

    .nav-actions {
        column-gap: 1.6rem;

        .login-link {
            @include f-style(17px, 500, var(--light-color));
        }

        .language-select {
            padding: 2px 3px;
            @include f-style(14px, 500, var(--light-color));
        }

        .cart-amount {

            span,
            strong {
                @include f-style(13px, 500, var(--light-color));
            }
        }

        .cart-action {
            i {
                @include f-style(18px, 500, var(--light-color));
            }

            .cart-number {
                padding: 1px 4px;
                @include f-style(13px, 500, var(--light-color));
            }
        }
    }
}

@media only screen and (max-width:710px) {
    .nav__menu-logo {
        .nav-menu {
            display: none;
        }
    }

    .nav-actions {
        column-gap: 1.4rem;

        .menu-btn {
            display: flex;
        }
        .search-link{
            display: block;
        }
    }
}

@media only screen and (max-width:502px){
    .nav-actions {
        .language-select {
            padding: 2px;
            @include f-style(13px, 500, var(--light-color));
        }
        .cart-amount{
            display: none;
        }
    }
}


@media only screen and (max-width:398px){
    .nav-wrapper{
    padding: 1rem .7rem;

    }
    .nav__menu-logo {
        .logo-link {
            @include f-style(20px, 600, var(--light-second));
        }
    }
    .nav-actions{
        column-gap: 1rem;
        .search-link{
            @include f-style(15px, 500, var(--light-color));
        }
        .cart-action {
            i {
                @include f-style(17px, 500, var(--light-color));
            }

            .cart-number {
                padding: 0px 3px;
                @include f-style(13px, 500, var(--light-color));
            }
        }
    }
}
</style>
