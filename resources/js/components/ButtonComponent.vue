<template>
    <button @click="handleButtonClick" :disabled="disabled">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: String, // Label untuk tombol
        disabled: Boolean, // Status tombol (dinonaktifkan atau tidak)
    },
    methods: {
        handleButtonClick() {
            // Emit event 'button-click' saat tombol diklik
            this.$emit("button-click");
        },
    },
};
</script>

<style scoped>
/* CSS styling untuk tombol (opsional) */
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
