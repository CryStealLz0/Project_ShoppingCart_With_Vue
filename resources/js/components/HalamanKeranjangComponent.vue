<template>
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
</template>

<script>
export default {};
</script>

<style></style>
