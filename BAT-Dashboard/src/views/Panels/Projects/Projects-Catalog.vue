<script setup>
import { computed } from "vue";

const props = defineProps({
    modelValue: {
        type: Array,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const ProjectsOptions = computed(() => {
    return props.options.filter(({ value }) => value !== 0);
});

function importPhoto(photo) {
    return new URL(
        `./../../../assets/images/${photo}.jpg`,
        import.meta.url
    ).href;
};

</script>

<template lang="pug">
.panel
    .project-list
        router-link.project-item(
            v-for="project in ProjectsOptions",
            to="/panel/Projects/Delivery-Execution",
            @click="emit('update:modelValue', [project.value])"
        )
            .project-item-img
                img(:src="importPhoto(project.photo)")
            .project-item-name {{ project.label }}

</template>

<style lang="scss" scoped>
.project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    width: 100%;
    height: 100%;
    gap: 16px;
    align-content: stretch;
}

.project-item-img {
    width: 100%;
    height: 230px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-4);
    background-color: #fff;

    img {
        width: 100%;
        height: auto;
        transition: all .1s ease;
        object-fit: contain;
        object-position: center;
        border-radius: var(--radius-4);
    }
}

.project-item {
    text-decoration: none;
    color: var(--blue-medium);
    padding: var(--pdsm);
    border-radius: var(--radius-4);

    background-color: var(--grey);

    &:hover {
        color: var(--blue-light);

        img {
            width: 94%;
        }
    }
}

.project-item-name {
    text-align: center;
    font-weight: 700;
    margin-top: var(--pdsm);
}
</style>