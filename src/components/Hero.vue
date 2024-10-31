<script setup lang="ts">

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

@media only screen  and (max-width: 710px) {
    .hero__navbar-wrapper {
        display: none;
    }
    
}
</style>