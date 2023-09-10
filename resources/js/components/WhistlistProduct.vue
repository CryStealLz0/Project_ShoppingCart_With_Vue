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
                            :label="buttonProps.deleteLabel"
                            :is-disabled="buttonProps.isDeleteDisabled"
                            @button-click="deleteItem(index)"
                        />
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="col-12" style="line-height: 40px">
            <th class="col-6">Total:</th>
            <th class="col-6">Rp.{{ total }}</th>
        </table>

        <button-form
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

<style></style>
