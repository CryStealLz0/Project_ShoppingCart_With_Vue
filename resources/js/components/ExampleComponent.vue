<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <td>{{ item.product.name }}</td>
                    <td>{{ item.product.description }}</td>
                    <td>{{ item.product.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            list: [
                {
                    product: {
                        name: "Product 1",
                        description: "Description for Product 1",
                        price: 100,
                    },
                },
                {
                    product: {
                        name: "Product 2",
                        description: "Description for Product 2",
                        price: 150,
                    },
                },
                {
                    product: {
                        name: "Product 3",
                        description: "Description for Product 3",
                        price: 200,
                    },
                },
                {
                    product: {
                        name: "Product 4",
                        description: "Description for Product 4",
                        price: 75,
                    },
                },
                {
                    product: {
                        name: "Product 5",
                        description: "Description for Product 5",
                        price: 120,
                    },
                },
            ],
        };
    },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
