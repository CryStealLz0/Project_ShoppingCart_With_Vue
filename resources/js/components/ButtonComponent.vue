<template>
    <button class="buttons" @click="handleButtonClick" :disabled="disabled">
        {{ label }}
    </button>
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
.buttons {
    margin: 6px 0px;
    height: 40px;
}

.buttons {
    border-radius: 5px;
}
</style>
