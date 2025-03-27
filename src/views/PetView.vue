<script setup>
    import Nav from '@/components/Nav.vue';
    import { useRoute } from 'vue-router';
    import pets from "../data/pets.json"

    const route = useRoute()

    const pet = pets.find(p => p.id === parseInt(route.params.id))
</script>

<template>
    <div class="grid">
        <Nav />
        <h1>{{ pet.name }}'s Feedings</h1>
        <h2>Upcoming Feeding</h2>
        <p>{{ pet.upcoming }}</p>
        <h2>Future Feeding</h2>
        <p>{{ pet.next }}</p>
        <h2>Previous Feeding</h2>
        <p>{{ pet.previous }}</p>
        <div class="enclosures">
            <RouterLink :to="`/enclosures/${pet.id}`" href="">
                {{ pet.name }}'s Enclosure
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .grid {
        display: grid;
        gap: 30px;
    }
</style>