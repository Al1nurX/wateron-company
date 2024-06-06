<script setup>
const scrollToAbout = () => {
  const aboutSection = document.querySelector('#about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div
    id="home"
    class="xs:flex-col xs:h-min flex w-screen items-center justify-center gap-12 bg-primaryColor font-roboto md:h-screen md:flex-row"
  >
    <div class="xs:w-[70%] xs:gap-5 flex flex-col md:w-[40%] lg:gap-7">
      <h2
        class="xs:mt-28 xs:text-[32px] font-bold leading-tight text-[#333333] md:mt-0 md:text-[36px] xl:text-[44px]"
      >
        Wateron: Лучший Друг Вашего Ландшафта
      </h2>
      <p class="text-[17px] text-[#333333]">
        Обновите свой ландшафт с помощью инновационных систем полива Wateron. Экономьте время и
        деньги, создавая красивый и здоровый сад. Свяжитесь с нами сегодня, чтобы получить
        дополнительную информацию!
      </p>
      <button
        @click="scrollToAbout"
        class="xs:h-[38px] xs:w-[160px] rounded-lg bg-black text-[17px] uppercase text-neutral2 transition-all duration-500 hover:bg-secondaryColor sm:h-[45px] sm:w-[206px]"
      >
        Подробнее
      </button>
    </div>
    <div class="xs:w-[70%] xs:mb-16 relative md:mb-0 md:w-[40%]">
      <div
        class="absolute top-0 z-0 rounded-[50%] bg-[#F9F9F9] md:right-[-40px] md:h-[300px] md:w-[300px] lg:right-[-70px] lg:h-[380px] lg:w-[380px]"
      ></div>
      <img
        src="./../assets/images/landscape-13.jpg"
        alt="Landscape"
        class="xs:h-[400px] xs:w-auto rounded-lg text-center drop-shadow-xl sm:h-[500px] md:h-[500px] md:w-[450px] lg:h-[580px] lg:w-[500px] xl:h-[630px] xl:w-[550px]"
      />
    </div>
  </div>
</template>
