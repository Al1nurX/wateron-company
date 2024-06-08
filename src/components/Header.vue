<script setup>
import { ref, nextTick } from 'vue'
import { SmoothScroll } from '@morev/smooth-scroll'

const menuOpen = ref(false)
const menuTransitioning = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  menuTransitioning.value = true
  nextTick(() => {
    const menu = document.getElementById('menu')
    if (menuOpen.value) {
      menu.style.height = menu.scrollHeight + 'px'
    } else {
      menu.style.height = '0px'
    }
  })
}

function beforeEnter(el) {
  el.style.height = '0px'
  el.style.opacity = '1'
}

function enter(el, done) {
  el.style.transition = 'height 0.8s ease, opacity 0.8s ease'
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
  setTimeout(() => {
    done()
    menuTransitioning.value = false
  }, 800)
}

function leave(el, done) {
  el.style.transition = 'height 0.8s ease, opacity 0.8s ease'
  el.style.height = '0px'
  el.style.opacity = '1'
  setTimeout(() => {
    done()
    menuTransitioning.value = false
  }, 800)
}

const smoothScrollTo = (target) => {
  const targetPosition = document.querySelector(target)

  const scroll = new SmoothScroll({
    duration: 900,
    offset: {
      x: 0,
      y: -50
    }
  })

  scroll.to(targetPosition)
}
const handleClick = (target) => {
  toggleMenu()
  smoothScrollTo(target)
}
</script>

<template>
  <header
    class="fixed z-[100] flex h-[75px] w-full items-center justify-between border-b bg-[#F9F9F9] xs:px-8 sm:px-12 font-roboto"
    :class="{ 'drop-shadow-lg': !menuOpen && !menuTransitioning }"
  >
    <div>
      <a href="/"
        ><img src="@/assets/logo.svg" alt="Logo" class="h-auto xs:w-[120px] sm:w-[160px]"
      /></a>
    </div>
    <div>
      <ul class="gap-6 text-[17px] font-bold xs:hidden xl:flex">
        <li class="cursor-pointer hover:text-secondaryColor" @click="smoothScrollTo('#home')">
          Главная
        </li>
        <li class="cursor-pointer hover:text-secondaryColor" @click="smoothScrollTo('#about')">
          О нас
        </li>
        <li class="cursor-pointer hover:text-secondaryColor" @click="smoothScrollTo('#offer')">
          Предложения
        </li>
        <li class="cursor-pointer hover:text-secondaryColor" @click="smoothScrollTo('#gallery')">
          Галлерея
        </li>
        <li class="cursor-pointer hover:text-secondaryColor" @click="smoothScrollTo('#projects')">
          Проекты
        </li>
        <li class="cursor-pointer hover:text-secondaryColor" @click="smoothScrollTo('#contacts')">
          Контакты
        </li>
      </ul>
      <div
        class="relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-2 xl:hidden"
        @click="toggleMenu"
      >
        <div
          class="w-8 rounded-lg bg-current transition-transform duration-500 ease-in-out xs:h-[2px] sm:h-1"
          :class="{
            'transform xs:translate-y-2.5 xs:rotate-45 sm:translate-y-3 sm:rotate-45': menuOpen,
            'translate-y-0 transform': !menuOpen
          }"
        ></div>
        <div
          class="w-8 rounded-lg bg-current transition-opacity duration-500 ease-in-out xs:h-[2px] sm:h-1"
          :class="{
            'opacity-0': menuOpen,
            'opacity-100': !menuOpen
          }"
        ></div>
        <div
          class="w-8 rounded-lg bg-current transition-transform duration-500 ease-in-out xs:h-[2px] sm:h-1"
          :class="{
            'transform xs:-translate-y-2.5 xs:-rotate-45 sm:-translate-y-3 sm:-rotate-45': menuOpen,
            'translate-y-0 transform': !menuOpen
          }"
        ></div>
      </div>
    </div>
  </header>
  <transition name="expand" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div
      v-if="menuOpen"
      id="menu"
      class="fixed left-0 right-0 top-[75px] z-[99] overflow-hidden bg-[#F9F9F9]"
    >
      <ul class="flex flex-col gap-8 px-8 py-8 text-[17px] font-bold">
        <li class="hover:text-secondaryColor" @click="handleClick('#home')">Главная</li>
        <li class="hover:text-secondaryColor" @click="handleClick('#about')">О нас</li>
        <li class="hover:text-secondaryColor" @click="handleClick('#offer')">Предложения</li>
        <li class="hover:text-secondaryColor" @click="handleClick('#gallery')">Галлерея</li>
        <li class="hover:text-secondaryColor" @click="handleClick('#projects')">Проекты</li>
        <li class="hover:text-secondaryColor" @click="handleClick('#contacts')">Контакты</li>
      </ul>
    </div>
  </transition>
</template>

<style>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
}
.expand-enter-to,
.expand-leave-from {
  height: auto;
  opacity: 1;
}
</style>
