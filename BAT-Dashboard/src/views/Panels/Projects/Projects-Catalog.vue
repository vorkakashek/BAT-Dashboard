<script>
import { inject } from "vue";

export default {
    inject: ["navItems", "updateItems"],
    data() {
        return {};
    },
    methods: {
        importPhoto(photo) {
            return new URL(
                `./../../../assets/images/${photo}.jpg`,
                import.meta.url
            ).href;
        },
    },
    computed: {
        ProjectsOptions() {
            const { itemOptions } = this.navItems.find(({ name }) => name === 'Projects');
            return itemOptions;
        },
    },
};
</script>

<template lang="pug">
.panel
    .project-list
        router-link.project-item(
            v-for="project in ProjectsOptions",
            to="/panel/Projects/Delivery-Execution"
            @click="updateItems('Projects', [project.value])"
        )
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

.project-item {
    text-decoration: none;
    color: var(--blue-medium);
    img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        border-radius: var(--radius-8);
    }

    &:hover {
        color: var(--blue-light);
    }
}

.project-item-name {
    text-align: center;
    font-weight: 700;
}
</style>