<script setup>

const drawer = ref(false);
const shoppingCart = useShoppingCart();
const itemsCount = computed(() => shoppingCart.itemsCount)
const totalCost = computed(() => shoppingCart.totalCost)
</script>

<template>
  <div class="cart">
    <div class="cart__badge">
      <img
        class="cart__icon"
        src="/images/icons/cart.svg"
        alt="Cart"
        @click="drawer = true"
      />
      <div class="cart__item-count">{{ itemsCount }}</div>
    </div>
    <Transition>
      <div class="cart__wrapper" v-show="drawer">
        <div class="cart__overlay" @click="drawer = false" />
        <div class="cart__drawer">
          <div class="cart__content">
            <div v-if="!shoppingCart.items.length" class="cart__message">Nie posiadasz produktów w koszyku.</div>
            <div v-else>
                <div class="items-total">
                  <span class="label">Cart contents ({{ itemsCount }})</span>
                </div>
                <div class="cart__item" v-for="item in shoppingCart.items" :key="item.id">
                  <div class="cart__item-image">
                    <img :src="item.imagePath" :alt="item.name" />
                  </div>
                  <div class="cart__item-details">
                    <div class="cart__item-name">{{ item.name }}</div>
                    <div class="cart__item-price">{{ item.price }}</div>
                    <div class="cart__item-quantity">Ilość: {{ item.quantity }}</div>
                  </div>
                </div>
                <div class="cart__total-cost">Razem: {{ String(totalCost).replace('.',',') }} zł</div>
            </div>
          </div>
          <div class="cart__close" @click="drawer = false" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cart {
  height: 26px;
}

.cart__icon {
  cursor: pointer;
  padding-left: 26px;
  border-left: 1px solid #d8d8d8;
}

.cart__wrapper {
  position: fixed;
  z-index: 999;
}

.cart__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.4s ease-in-out;
}

.cart__drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 355px;
  background-color: white;
  transition: transform 0.4s ease-in-out;
}

.cart__content {
  height: 100%;
  width: 100%;
  padding: 30px 20px 30px 30px;
  overflow-y: auto;
}

.cart__message {
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  padding: 30px 0;
  color: black;
}

.cart__close {
  position: absolute;
  height: 40px;
  width: 40px;
  top: 16px;
  right: 8px;
  cursor: pointer;
}
.cart__close:before,
.cart__close:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  height: 18px;
  width: 1px;
  background-color: #111111;
}
.cart__close:before {
  transform: translate(-50%, -50%) rotate(45deg);
}
.cart__close:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.v-enter-active .cart__overlay,
.v-leave-active .cart__overlay {
  transition: opacity 0.4s ease-in-out;
}

.v-enter-from .cart__overlay,
.v-leave-to .cart__overlay {
  opacity: 0;
}

.v-enter-active .cart__drawer,
.v-leave-active .cart__drawer {
  transition: transform 0.4s ease-in-out;
}

.v-enter-from .cart__drawer,
.v-leave-to .cart__drawer {
  transform: translateX(300%);
}

.cart__badge {
  position: relative;
}

.cart__item-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

@media only screen and (max-width: 1024px) {
  .cart__icon {
    padding-left: 0;
    border-left: 0;
  }
}
</style>
