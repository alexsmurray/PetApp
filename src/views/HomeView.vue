<script setup>
    import pets from "../data/pets.json"
    import { RouterLink } from "vue-router";
    import { Image } from "primevue";

    const getImageUrl = (image) => new URL(`../assets/images/${image}`, import .meta.url).href;
</script>

<template>
    <div>
        <h1>Home</h1>
            <div class="pets">
                <div v-for="pet in pets" :key="pet.id">
                    <Image :src="getImageUrl(pet.image)" />
                    <RouterLink :to="`/pets/${pet.id}`" href="">
                        {{ pet.name }}
                    </RouterLink>
                </div>
        </div>
    </div>
</template>

<style scoped>
    :global(body) {
        background-color: rgb(22, 158, 158);
        text-align: center;
    }
    .pets {
        justify-content: center;
        display: grid;
        padding: 50px;
        gap: 50px;
    }

    .pets a {
        text-decoration: none;
        background-color: white;
        color: black;
        width: 100%;
        box-shadow: 1px 1px 10px black;
        margin: 100px;
        border-radius: 10px;
        padding: 8px;
    }
    
</style>