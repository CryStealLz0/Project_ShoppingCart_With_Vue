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
                <table class="col-12 isiTable">
                    <td class="col-3">Indomie Goreng Rendang</td>
                    <td class="col-4">Masakan Terenak Di Dunia</td>
                    <td class="col-1">20</td>
                    <td class="col-2">Rp.5.000</td>
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
                <table class="col-12 isiTable">
                    <td class="col-3">Indomie Goreng Rendang</td>
                    <td class="col-3">20</td>
                    <td class="col-2">Rp.5.000</td>
                    <td class="col-4"><button>Delete</button></td>
                </table>
                <table class="col-12">
                    <th class="col-6">Total:</th>
                    <th class="col-6">Rp.5.000</th>
                </table>
            </div>
            <button>Checkout</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
