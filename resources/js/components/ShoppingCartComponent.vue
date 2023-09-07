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
                            <button @click="addToCart(index)">
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
                    <th class="col-6">Rp.5.000</th>
                </table>
            </div>
            <button>Checkout</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            product: [
                {
                    detailProduct: {
                        name: "Indomie rebus",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 4000,
                    },
                },
                {
                    detailProduct: {
                        name: "Indomie goreng",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 4000,
                    },
                },
                {
                    detailProduct: {
                        name: "Indomie bakar",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 4000,
                    },
                },
            ],
            product2: [
                {
                    isiProduct: {
                        name: String,
                        description: String,
                        stock: Number,
                        price: Number,
                    },
                },
            ],
            cart: [],
        };
    },
    methods: {
        addToCart(index) {
            const selectedProduct = this.product[index];
            const cartItemIndex = this.cart.findIndex(
                (item) =>
                    item.isiProduct.name === selectedProduct.detailProduct.name
            );

            if (selectedProduct.detailProduct.stock > 0) {
                if (cartItemIndex === -1) {
                    // Jika produk belum ada di keranjang, tambahkan sebagai objek baru
                    this.cart.push({
                        isiProduct: {
                            name: selectedProduct.detailProduct.name,
                            stock: 1,
                            price: selectedProduct.detailProduct.price,
                        },
                    });
                } else {
                    // Jika produk sudah ada di keranjang, tambahkan jumlah stok dan menggandakan harga
                    const existingCartItem = this.cart[cartItemIndex];
                    existingCartItem.isiProduct.stock++;
                    existingCartItem.isiProduct.price =
                        existingCartItem.isiProduct.stock *
                        selectedProduct.detailProduct.price;
                }

                // Kurangi stok produk
                selectedProduct.detailProduct.stock--;
            }
        },
        deleteItem(index) {
            // Hapus produk dari keranjang
            this.cart.splice(index, 1);
        },
    },
    mounted() {
        console.log("Component mounted");
    },
};
</script>

<style></style>
