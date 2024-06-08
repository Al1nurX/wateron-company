<script setup>
import { SmoothScroll } from '@morev/smooth-scroll'

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
</script>

<template>
  <div
    id="home"
    class="flex w-screen items-center justify-center gap-12 bg-primaryColor font-roboto xs:h-min xs:flex-col xs:px-10 sm:px-14 md:h-screen md:flex-row md:px-16 lg:px-24"
  >
    <div class="flex flex-col xs:gap-5 md:w-[50%] lg:gap-7">
      <h2
        class="font-bold leading-tight text-[#333333] xs:mt-28 xs:text-[32px] md:mt-0 md:text-[36px] xl:text-[44px]"
      >
        Wateron: Лучший Друг Вашего Ландшафта
      </h2>
      <p class="text-[17px] text-[#333333]">
        Обновите свой ландшафт с помощью инновационных систем полива Wateron. Экономьте время и
        деньги, создавая красивый и здоровый сад. Свяжитесь с нами сегодня, чтобы получить
        дополнительную информацию!
      </p>
      <button
        @click="smoothScrollTo('#about')"
        class="rounded-lg bg-black text-[17px] uppercase text-neutral2 transition-all duration-500 hover:bg-secondaryColor xs:h-[38px] xs:w-[160px] sm:h-[45px] sm:w-[206px]"
      >
        Подробнее
      </button>
    </div>
    <div class="relative w-full xs:mb-16 md:mb-0 md:w-[55%] xl:w-[45%]">
      <div
        class="absolute top-0 z-0 rounded-[50%] bg-[#F9F9F9] md:right-[-40px] md:h-[300px] md:w-[300px] lg:right-[-70px] lg:h-[380px] lg:w-[380px]"
      ></div>
      <img
        src="@/assets/images/irrigation system.jpg"
        alt="Landscape"
        class="rounded-lg drop-shadow-xl xs:h-[400px] xs:w-full sm:h-[550px] sm:w-[95%] md:h-[500px] md:w-[600px] lg:h-[580px] lg:w-[500px] xl:h-[630px] xl:w-[550px]"
      />
    </div>
  </div>
</template>
