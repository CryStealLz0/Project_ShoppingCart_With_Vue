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
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.price }}</td>
                <td>
                    <!-- Komponen table-product digunakan untuk setiap produk -->
                    <table-product
                        :product="product"
                        :buttonProps="buttonProps"
                        @add-to-cart="addToCartFunction"
                    />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        products: Array, // Data produk
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
