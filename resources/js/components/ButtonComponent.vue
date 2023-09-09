<template>
    <button @click="deleteList(index)">HAPUS</button>
</template>

<script>
export default {
    emits: ["emit-delete"],
    props: {
        listdata: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    methods: {
        deleteList(index) {
            this.$emit("emit-delete", index);
        },
    },
};
</script>

<style></style>
