<script setup>
    import Card from "@/components/Card.vue";
</script>

<template>
    <div class="content">
        <div class="points-menu">
            <ul>
                <li><a href="#">Супы</a></li>
                <li><a href="#">Горячие блюда</a></li>
                <li><a href="#">Закуски</a></li>
                <li><a href="#">WOK</a></li>
                <li><a href="#">Роллы</a></li>
                <li><a href="#">Горячие напитки</a></li>
                <li><a href="#">Лимонады</a></li>
            </ul>
        </div>
        <div class="block-content positions-menu">
            <Card  title="Домашний суп с цыплёнком" price="250"/>
            <Card  title="Борщ с курой" price="200"/>
            <Card  title="Рамен с цыплёнком" price="450"/>
            <Card  title="Сливочный суп с угрём" price="500"/>
        </div>
    </div>
</template>

<style scoped>
    .content {
        @apply mt-10 w-4/5 mx-auto flex items-start
    }
    .points-menu{
        @apply w-1/5 border border-green-200 shadow-2xl min-h-96 rounded-xl py-4 px-5
    }
    .points-menu li {
        @apply  text-xl hover:bg-green-400 p-2 rounded transition-colors
    }
    .positions-menu{
        @apply h-full w-4/5 ml-5 p-4 grid grid-cols-3 gap-4
    }


</style>
