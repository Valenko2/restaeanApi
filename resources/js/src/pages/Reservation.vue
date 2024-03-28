<script setup>

</script>

<template>
    <div class="block-content form-reservation">
        <form>

            <div class="input-block">
                <label>Фамилия и имя </label>
                <input name="name" type="text">
            </div>
            <div class="input-block">
                <label>Номер телефона</label>
                <input name="name" type="text">
            </div>

            <div class="input-block">
                <label>Какое количество людей</label>
                <input name="peopleCount" type="number">
            </div>
            <div class="input-block">
                <label>На какое время</label>
                <input name="whatTime" type="time">
            </div>
            <div class="input-block">
                <label>До скольки</label>
                <input name="untilTime" type="time">
            </div>
            <button>Резервация столика</button>

        </form>
        <img src="@/food/1111.jpg" alt="">
    </div>
</template>

<style scoped>
    .form-reservation{
        @apply h-100 w-2/3 mx-auto mt-5 p-8 grid grid-cols-2 gap-5
    }
    .form-reservation img {
        @apply rounded brightness-75
    }
    .input-block {
        @apply mb-3
    }
    .input-block label {
        @apply text-lg text-slate-500 mr-5
    }
    .input-block input {
        @apply text-lg
        focus:outline-none w-full focus:text-green-500 focus:border-green-500
    }
    .input-block input[type="text"]{
        @apply border-b-2 border-green-300
    }
    .input-block input[type="number"]{
        @apply border border-green-300 p-1 rounded
    }
    button {
        @apply bg-green-600 px-5 py-1 text-xl shadow rounded text-white hover:bg-green-500 transition-all
    }
</style>
