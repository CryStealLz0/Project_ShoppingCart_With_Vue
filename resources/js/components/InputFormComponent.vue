<template>
    <div class="form">
        <input type="text" v-model="inputform" />
        <button-form text="Reset" @emit-click="reset" color="blue" />
        <button-form text="Submit" @emit-click="addList" />
    </div>
</template>

<script>
export default {
    emits: ["emit-submit"],
    data() {
        return {
            inputform: "",
        };
    },
    methods: {
        addList() {
            this.$emit("emit-submit", this.inputform);
            this.inputform = "";
        },
        reset() {
            this.inputform = "";
        },
    },
};
</script>

<style></style>
