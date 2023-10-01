import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            products: [
                {
                    name: "Indomie rebus",
                    description: "Makanan sejuta umat",
                    stock: 10,
                    price: 4000,
                },
                {
                    name: "Indomie goreng",
                    description: "Makanan sejuta umat",
                    stock: 10,
                    price: 9000,
                },
                {
                    name: "Indomie bakar",
                    description: "Makanan sejuta umat",
                    stock: 10,
                    price: 1020000,
                },
            ],
            cart: [], // Tambahkan state cart di sini
            total: 0, // Tambahkan state total di sini
        };
    },
    mutations: {
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },
        UPDATE_TOTAL(state, newTotal) {
            state.total = newTotal;
        },
        // Definisikan mutations Anda di sini
    },
    actions: {
        addToCart({ state, commit }, index) {
            const selectedProduct = state.products[index];

            if (selectedProduct.stock > 0) {
                const cartItemIndex = state.cart.findIndex(
                    (item) => item.name === selectedProduct.name
                );

                if (cartItemIndex === -1) {
                    // Jika produk belum ada di keranjang, tambahkan sebagai objek baru
                    commit("ADD_TO_CART", {
                        name: selectedProduct.name,
                        stock: 1,
                        price: selectedProduct.price,
                    });
                } else {
                    // Jika produk sudah ada di keranjang, tambahkan jumlah stok dan menggandakan harga
                    const existingCartItem = state.cart[cartItemIndex];
                    existingCartItem.stock++;
                    existingCartItem.price =
                        existingCartItem.stock * selectedProduct.price;
                }

                // Kurangi stok produk
                selectedProduct.stock--;

                // Update total checkout (anda dapat memanggil action lain atau memutakhirkan langsung state di sini)
                const newTotal = state.cart.reduce(
                    (total, item) => total + item.price,
                    0
                );
                commit("UPDATE_TOTAL", newTotal);
            }
        },
        // Definisikan actions Anda di sini
    },
    getters: {
        // Definisikan getters Anda di sini
    },
});

export default store;
