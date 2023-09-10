<template>
    <table class="col-12">
        <thead>
            <tr>
                <th class="col-3">Name</th>
                <th class="col-4">Description</th>
                <th class="col-1">Stock</th>
                <th class="col-2">Price</th>
                <th class="col-2"></th>
            </tr>
        </thead>
        <table-product
            :product="product"
            :buttonProps="buttonProps"
            @add-to-cart="addToCartFunction"
        />
    </table>
</template>

<script>
export default {
    props: {
        product: Array, // Data produk
        buttonProps: Object, // Properti tombol yang digunakan dalam tabel
    },
    methods: {
        addToCartFunction(index) {
            // Metode ini sekarang berada dalam komponen induk
            this.$emit("add-to-cart", index);
        },
    },
};
</script>

<style scoped></style>
