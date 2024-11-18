<template>
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 160px;">
        Danh Mục
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
        <a class="dropdown-item" href="#" v-for="(category, index) in categories" :key="category._id"
            @click="setSelected(category)" :class="{
                active: selectedCategory && category._id === selectedCategory._id,
            }">
            {{ category.name }}
        </a>
    </div>
</div>

</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
    props: {
        categories: { type: Object, required: true },
        selectedCategory: { type: Object },
    },

    emits: ["filter:category"],

    setup(props, context) {
        const setSelected = (category) => {
            context.emit("filter:category", category);
        };
        return {
            setSelected,
        };
    },
});
</script>

<style>
.category-list .active {
    background-color: blue;
    border-color: blue;
}
</style>
