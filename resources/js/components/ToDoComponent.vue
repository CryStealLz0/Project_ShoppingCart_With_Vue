<template>
    <div class="container">
        <h1>To-Do</h1>
        <input-form @emit-submit="addList" />
        <list :listdata="list" @emit-delete="deleteList" />
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            list: [
                { title: "Menyapu Rumah", status: false },
                { title: "Mengepel Lantai", status: false },
                { title: "Melap Kaca", status: false },
            ],
        };
    },
    methods: {
        addList(datainput) {
            let newList = {
                title: datainput,
            };
            this.list.push(newList);
        },
        deleteList(index) {
            this.list.splice(index, 1);
        },
    },
    mounted() {
        console.log("Component Mounted");
    },
};
</script>
