<template>
    <div class="header">
        <nav>
            <ul>
                <li><router-link to="/about">О ресторане</router-link></li>
                <li><router-link to="/menu">Меню</router-link></li>
                <li><router-link to="/reservation">Резервация</router-link></li>
            </ul>
        </nav>
        <h2>Токио Сити</h2>
    </div>
</template>

<style>
    .header {
        @apply border border-slate-300  shadow-lg w-4/5 h-16 mx-auto flex items-center p-4 mt-4 rounded-xl relative
    }
    nav {
        @apply w-2/3 ml-10
    }
    nav ul {
        @apply flex items-center
    }
    nav li{
        @apply mr-5
    }
    nav a{
        @apply hover:text-green-700  transition-all text-lg
    }
    h2 {
        @apply absolute right-5 top-4
    }
    .active{
        @apply text-green-700
    }
</style>
<script setup>
</script>
