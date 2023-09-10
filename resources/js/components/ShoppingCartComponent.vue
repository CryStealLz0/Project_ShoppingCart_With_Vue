<template>
    <div class="container">
        <div class="container-shop">
            <h1>Semua Produk</h1>
            <div class="product">
                <table-all-product
                    :product="product"
                    :button-props="buttonProps"
                    @add-to-cart="addToCartFunction"
                />
            </div>
        </div>

        <div class="container-shop">
            <h1>Keranjang Belanjaan</h1>
            <div class="product">
                <whistlist-product
                    :cart="cart"
                    :total="total"
                    :button-props="buttonProps"
                    @delete-label="deleteLabelFunction"
                    @checkout="checkoutFunction"
                />
            </div>
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
                        price: 9000,
                    },
                },
                {
                    detailProduct: {
                        name: "Indomie bakar",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 1020000,
                    },
                },
                {
                    detailProduct: {
                        name: "Indomie bakar",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 1020000,
                    },
                },
                {
                    detailProduct: {
                        name: "Indomie bakar",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 1020000,
                    },
                },
            ],
            cart: [],
            total: 0,
            buttonProps: {
                addToCartLabel: "Tambah ke Keranjang",
                isAddToCartDisabled: false,
                deleteLabel: "Hapus",
                isDeleteDisabled: false,
                checkoutLabel: "Checkout",
                isCheckoutDisabled: false,
            },
        };
    },
    methods: {
        addToCartFunction(index) {
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

                // Update total checkout
                this.calculateTotal();

                // Aktifkan tombol "Add to Cart" jika stok kembali tersedia
                if (selectedProduct.detailProduct.stock === 0) {
                    const addButton =
                        document.querySelectorAll("button")[index];
                    addButton.setAttribute("disabled", "disabled");
                }
            }
        },

        deleteLabelFunction(index) {
            const deletedCartItem = this.cart[index];
            const productIndex = this.product.findIndex(
                (item) =>
                    item.detailProduct.name === deletedCartItem.isiProduct.name
            );

            if (productIndex !== -1) {
                // Kembalikan stok produk ke nilai awal
                this.product[productIndex].detailProduct.stock +=
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
    },
    mounted() {
        console.log("Component mounted");
    },
};
</script>

<style></style>
