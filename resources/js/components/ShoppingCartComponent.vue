<template>
    <div class="container">
        <div class="container-shop">
            <h1>Semua Produk</h1>
            <div class="product">
                <table class="col-12">
                    <th class="col-3">Name</th>
                    <th class="col-4">Description</th>
                    <th class="col-1">Stock</th>
                    <th class="col-2">Price</th>
                    <th class="col-2"></th>
                </table>
                <table
                    class="col-12 isiTable"
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
                    <td class="col-2"><button>Add to cart</button></td>
                </table>
            </div>
        </div>

        <div class="container-shop">
            <h1>Keranjang Belanjaan</h1>
            <div class="product">
                <table class="col-12">
                    <th class="col-3">Name</th>
                    <th class="col-3">Quantity</th>
                    <th class="col-3">Price</th>
                    <th class="col-3"></th>
                </table>
                <table
                    class="col-12 isiTable"
                    v-for="(productItem, index) in product2"
                    :key="index"
                >
                    <td class="col-3">{{ productItem.isiProduct.name }}</td>
                    <td class="col-3">{{ productItem.isiProduct.stock }}</td>
                    <td class="col-2">Rp.{{ productItem.isiProduct.price }}</td>
                    <td class="col-4">
                        <button @click="deleteItem(index)">Delete</button>
                    </td>
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
                        name: "Indomie rebus",
                        description: "Makanan sejuta umat",
                        stock: 10,
                        price: 4000,
                    },
                },
            ],
        };
    },
    mounted() {
        console.log("Component mounted");
    },
};
</script>

<style></style>
