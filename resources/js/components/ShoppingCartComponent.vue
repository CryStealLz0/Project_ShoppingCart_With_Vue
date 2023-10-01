<template>
    <div class="container">
        <div class="container-shop">
            <h1>Semua Produk</h1>
            <div class="product">
                <table-all-product
                    :products="products"
                    :button-props="buttonProps"
                />
            </div>
            <button @click="chartComponent">Chart</button>
        </div>
        <div class="container-shop">
            <h1>Keranjang Belanjaan</h1>
            <div class="product">
                <whistlist-product
                    :cart="cart"
                    :total="total"
                    :button-props="buttonProps"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data: function () {
        return {
            cart: [],
            total: 0,
            buttonProps: {
                addToCartLabel: "Add to cart",
                isAddToCartDisabled: false,
                deleteLabel: "Delete",
                isDeleteDisabled: false,
                checkoutLabel: "Checkout",
                isCheckoutDisabled: false,
            },
        };
    },
    computed: {
        ...mapState(["products"]), // Menggunakan state langsung tanpa namespace
    },
    methods: {
        addToCartFunction(index) {
            // Memanggil action addToCart dengan mengirimkan indeks produk
            this.$store.dispatch("addToCart", index);
        },

        deleteLabelFunction(index) {
            const deletedCartItem = this.cart[index];
            const productIndex = this.products.findIndex(
                (item) =>
                    item.detailProduct.name === deletedCartItem.isiProduct.name
            );

            if (productIndex !== -1) {
                // Kembalikan stok produk ke nilai awal
                this.products[productIndex].detailProduct.stock +=
                    deletedCartItem.isiProduct.stock;
            }

            // Hapus produk dari keranjang
            this.cart.splice(index, 1);

            // Update total checkout
            this.calculateTotal();
        },
        calculateTotal() {
            // Hitung total checkout
            this.total = this.cart.reduce(
                (total, item) => total + item.isiProduct.price,
                0
            );
        },
        checkoutFunction() {
            if (this.total > 0) {
                // Tampilkan alert dengan total harga
                alert(`Total Harga: Rp.${this.total}`);
            } else {
                // Tampilkan pesan jika keranjang kosong
                alert("Keranjang Anda kosong.");
            }
        },
        chartComponent() {
            this.$router.push("/chart");
        },
    },
    mounted() {
        console.log("Komponen dimuat");
        console.log(this.$store.state.products);
    },
};
</script>

<style>
.product table tr {
    border-bottom: 1px solid grey;
    height: 40px;
}

.product tablel tr th {
    font-size: xx-large;
}

.product table tr td {
    font-weight: 300;
    height: 30px;
    line-height: 30px;
}
</style>
