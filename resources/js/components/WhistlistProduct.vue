<template>
    <div>
        <table class="col-12">
            <thead>
                <tr>
                    <th class="col-3">Name</th>
                    <th class="col-3">Quantity</th>
                    <th class="col-2">Price</th>
                    <th class="col-4"></th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(cartItem, index) in cart"
                    :key="index"
                    class="isiTable"
                >
                    <td class="col-3">{{ cartItem.isiProduct.name }}</td>
                    <td class="col-3">{{ cartItem.isiProduct.stock }}</td>
                    <td class="col-2">Rp.{{ cartItem.isiProduct.price }}</td>
                    <td class="col-4">
                        <button-form
                            class="dc"
                            :label="buttonProps.deleteLabel"
                            :is-disabled="buttonProps.isDeleteDisabled"
                            @button-click="deleteItem(index)"
                        />
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="col-12 total" style="line-height: 40px">
            <th class="col-6">Total:</th>
            <th class="col-6">Rp.{{ total }}</th>
        </table>

        <button-form
            class="cc"
            :label="buttonProps.checkoutLabel"
            :is-disabled="buttonProps.isCheckoutDisabled"
            @button-click="checkout"
        />
    </div>
</template>

<script>
export default {
    props: {
        cart: Array, // Menyimpan daftar produk dalam keranjang
        total: Number, // Menyimpan total harga
        buttonProps: Object, // Properti untuk tombol
    },
    emits: ["delete-label", "checkout"], // Mendengarkan event delete-label dan checkout
    methods: {
        deleteItem(index) {
            // Emit event 'delete-label' dengan index produk yang akan dihapus
            this.$emit("delete-label", index);
        },
        checkout() {
            // Emit event 'checkout' untuk menampilkan total harga saat checkout
            this.$emit("checkout");
        },
    },
};
</script>

<style scoped>
.dc {
    color: white;
    background: rgb(192, 41, 41);
    transition: 0.3s;
}

.dc:hover {
    background: rgb(132, 14, 14);
}

.cc {
    color: white;
    background: rgb(16, 155, 16);
    transition: 0.3s;
}

.cc:hover {
    background: rgb(16, 106, 16);
}

.total {
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
    height: 50px;
}

.total th {
    line-height: 50px;
}
</style>
