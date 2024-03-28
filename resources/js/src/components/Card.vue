<script setup>
defineProps({
    imageUrl: String,
    title: String,
    price: Number
})
</script>

<template>
    <div class="position-menu">
        <h3>{{title}}</h3>
        <img src="@/food/soup1.jpg" :alt="imageUrl">
        <p class="desc">Описание
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </p>
        <p class="price">{{price}} Р</p>
    </div>
</template>

<style scoped>
    .position-menu {
        @apply border border-green-200 rounded h-84 px-2 py-2 text-center inline-block
        hover:-translate-y-1 hover:shadow transition-all
    }
    .position-menu h3 {
        @apply font-bold text-2xl
    }
    .position-menu img {
        @apply mt-3 rounded
    }
    .position-menu .desc {
        @apply inline-block text-slate-500
    }
    .position-menu svg {
        @apply w-6 h-6 inline-block
    }
    .position-menu .price {
        @apply text-lg
    }
</style>
