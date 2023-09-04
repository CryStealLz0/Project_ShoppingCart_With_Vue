<template>
    <ul class="list">
        <li ul v-for="(item, index) in listdata" :key="index">
            <input type="checkbox" :id="'list' + index" v-model="item.status" />
            <label :class="item.status ? 'done' : ''"> {{ item.title }}</label>
            <button-form
                text="Hapus"
                @emit-click="deleteList(index)"
                color="transparent"
            />
        </li>
    </ul>
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
