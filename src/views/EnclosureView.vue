<script setup>
    import Nav from '@/components/Nav.vue';
    import { useRoute } from 'vue-router';
    import enclosures from "../data/enclosures.json"
    import { Checkbox } from 'primevue';

    import { ref } from 'vue';

    const route = useRoute()

    const enclosure = enclosures.find(e => e.id === parseInt(route.params.id))

</script>

<template>
    <div class="grid">
        <Nav />
        <h1>{{ enclosure.name }}'s Enclosure</h1>
        <h2>Check List</h2>
        <label>
            <input type="checkbox">
                {{ enclosure.checkList.item1 }}
        </label>
        <label>
            <input type="checkbox">
                {{ enclosure.checkList.item2 }}
        </label>
        <label>
            <input type="checkbox">
                {{ enclosure.checkList.item3 }}
        </label>
        <label>
            <input type="checkbox">
                {{ enclosure.checkList.item4 }}
        </label>
        <h2>Next Cleaning</h2>
        <p>{{ enclosure.next }}</p>
        <h2>Previous Cleaning</h2>
        <p>{{ enclosure.previous }}</p>
        <div class="pets">
            <RouterLink :to="`/pets/${enclosure.id}`" href="">
                {{ enclosure.name }}'s Feedings
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .grid {
        display: grid;
        gap: 20px;
    }
</style>