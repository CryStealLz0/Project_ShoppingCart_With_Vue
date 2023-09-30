<template>
    <div class="container">
        <div class="container-shop">
            <h1>Semua Produk</h1>
            <div class="product">
                <table class="col-12">
                    <tr>
                        <th class="col-3">Name</th>
                        <th class="col-4">Description</th>
                        <th class="col-1">Stock</th>
                        <th class="col-2">Price</th>
                        <th class="col-2"></th>
                    </tr>
                    <tr
                        class="isiTable"
                        v-for="(item, index) in product"
                        :key="index"
                    >
                        <td class="col-3">
                            {{ item.detailProduct.name }}
                        </td>
                        <td class="col-4">
                            {{ item.detailProduct.description }}
                        </td>
                        <td class="col-1">
                            {{ item.detailProduct.stock }}
                        </td>
                        <td class="col-2">
                            {{ item.detailProduct.price }}
                        </td>
                        <td class="col-2">
                            <button
                                @click="addToCart(index)"
                                :disabled="item.detailProduct.stock === 0"
                            >
                                Add to cart
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="container-shop">
            <h1>Keranjang Belanjaan</h1>
            <div class="product">
                <table class="col-12">
                    <tr>
                        <th class="col-3">Name</th>
                        <th class="col-3">Quantity</th>
                        <th class="col-2">Price</th>
                        <th class="col-4"></th>
                    </tr>
                    <tr
                        v-for="(cartItem, index) in cart"
                        :key="index"
                        class="isiTable"
                    >
                        <td class="col-3">{{ cartItem.isiProduct.name }}</td>
                        <td class="col-3">{{ cartItem.isiProduct.stock }}</td>
                        <td class="col-2">
                            Rp.{{ cartItem.isiProduct.price }}
                        </td>
                        <td class="col-4">
                            <button @click="deleteItem(index)">Delete</button>
                        </td>
                    </tr>
                </table>
                <table class="col-12" style="line-height: 40px">
                    <th class="col-6">Total:</th>
                    <th class="col-6">Rp.{{ total }}</th>
                </table>
            </div>
            <button @click="checkout">Checkout</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data: function () {
        return {
            cart: [],
            total: 0,
        };
    },
    methods: {
        addToCart(index) {
            const selectedProduct = this.products[index];
            const cartItemIndex = this.cart.findIndex(
                (item) => item.isiProduct.name === selectedProduct.name
            );

            if (selectedProduct.stock > 0) {
                if (cartItemIndex === -1) {
                    // Jika produk belum ada di keranjang, tambahkan sebagai objek baru
                    this.cart.push({
                        isiProduct: {
                            name: selectedProduct.name,
                            stock: 1,
                            price: selectedProduct.price,
                        },
                    });
                } else {
                    // Jika produk sudah ada di keranjang, tambahkan jumlah stok dan menggandakan harga
                    const existingCartItem = this.cart[cartItemIndex];
                    existingCartItem.isiProduct.stock++;
                    existingCartItem.isiProduct.price =
                        existingCartItem.isiProduct.stock *
                        selectedProduct.price;
                }

                // Kurangi stok produk di Vuex
                this.$store.commit("products/decrementStock", index);

                // Update total checkout
                this.calculateTotal();
            }
        },
        deleteItem(index) {
            const deletedCartItem = this.cart[index];
            const productIndex = this.products.findIndex(
                (item) => item.name === deletedCartItem.isiProduct.name
            );

            if (productIndex !== -1) {
                // Kembalikan stok produk di Vuex
                this.$store.commit("products/incrementStock", {
                    index: productIndex,
                    quantity: deletedCartItem.isiProduct.stock,
                });
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
        checkout() {
            if (this.total > 0) {
                // Tampilkan alert dengan total harga
                alert(`Total Harga: Rp.${this.total}`);
            } else {
                // Tampilkan pesan jika keranjang kosong
                alert("Keranjang Anda kosong.");
            }
        },
    },
    computed: {
        ...mapGetters("products", ["total"]), // Menggunakan getter total dari modul produk
    },
    mounted() {
        console.log("Component mounted");
    },
};
</script>

<style></style>
