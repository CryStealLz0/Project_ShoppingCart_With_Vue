// store.js
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
        };
    },
    mutations: {
        // Definisikan mutations Anda di sini
    },
    actions: {
        // Definisikan actions Anda di sini
    },
    getters: {
        // Definisikan getters Anda di sini
    },
});

export default store;
