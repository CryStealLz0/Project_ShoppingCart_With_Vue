<template>
    <tbody>
        <tr v-for="(item, index) in product" :key="index" class="isiTable">
            <td class="col-3">{{ item.detailProduct.name }}</td>
            <td class="col-4">{{ item.detailProduct.description }}</td>
            <td class="col-1">{{ item.detailProduct.stock }}</td>
            <td class="col-2">{{ item.detailProduct.price }}</td>
            <td class="col-2">
                <button-form
                    class="atc"
                    :label="buttonProps.addToCartLabel"
                    :disabled="item.detailProduct.stock === 0"
                    @button-click="addToCartFunction(index)"
                    :style="{
                        display:
                            item.detailProduct.stock === 0 ? 'none' : 'block',
                    }"
                />
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        product: Array, // Prop untuk data produk
        buttonProps: Object, // Prop untuk properti tombol
    },
    methods: {
        addToCartFunction(index) {
            // Method untuk menambahkan produk ke keranjang
            this.$emit("add-to-cart", index);
        },
    },
};
</script>

<style scoped>
.atc {
    background: rgb(71, 71, 255);
    color: white;
    transition: 0.3s;
}

.atc:hover {
    background: rgb(12, 12, 143);
}
</style>
