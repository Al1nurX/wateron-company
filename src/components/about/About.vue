<script setup>
import Counter from './Counter.vue'
</script>

<template>
  <div
    id="about"
    class="relative flex w-screen flex-col justify-center xs:h-min xs:px-10 sm:px-14 md:px-16 lg:px-24 xl:h-screen"
  >
    <div
      class="flex flex-col items-center justify-center font-roboto xs:mt-12 md:mt-16 md:flex-row md:gap-10 lg:gap-14 xl:mt-0"
    >
      <div
        class="relative w-full xs:order-last xs:mt-20 sm:flex sm:justify-center md:order-first md:mt-48 md:block md:w-auto md:justify-normal xl:mt-0"
      >
        <div
          class="absolute z-0 rounded-full bg-primaryColor sm:left-[-40px] sm:top-[-50px] sm:h-[350px] sm:w-[350px] md:top-[70px] md:h-[330px] md:w-[330px] lg:left-[-50px] lg:top-0 xl:left-[-70px] xl:h-[380px] xl:w-[380px]"
        ></div>
        <img
          src="@/assets/images/landscape-13.jpg"
          alt="Landscape"
          class="rounded-lg drop-shadow-xl xs:h-[480px] xs:w-full sm:h-[550px] sm:w-[90%] md:h-[450px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[500px]"
        />
      </div>
      <div class="flex w-full flex-col gap-3 md:w-3/5">
        <div
          class="flex flex-col gap-3 md:absolute md:left-0 md:top-12 md:px-20 md:text-center xl:relative xl:left-0 xl:top-0 xl:p-0 xl:text-left"
        >
          <h2 class="font-bold leading-tight text-gray-800 xs:text-[32px] lg:text-[36px]">О нас</h2>
          <p class="text-base text-gray-800 md:text-lg">
            Компания Wateron Irrigation System является компанией полного цикла и занимается
            проектированием, монтажом, пусконаладкой и техническим обслуживанием систем дождевания,
            капельного орошения, микроклимата, туманообразования как низкого, так и высокого
            давлений.
          </p>
        </div>
        <div class="flex flex-col gap-4 md:mt-36">
          <div class="mt-4 flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-full bg-primaryColor p-1 drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">
              Эффективность: Точная подача воды для максимальной эффективности.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-full bg-primaryColor p-1 drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">
              Экономично: Экономьте деньги на счетах за воду.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-full bg-primaryColor p-1 drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">
              Простота установки и эксплуатации для всех пользователей.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-full bg-primaryColor p-1 drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">
              Экспертная поддержка: Наша команда знающих профессионалов.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="counters" class="mt-14 grid gap-4 xs:mb-14 xs:grid-cols-2 md:grid-cols-4 xl:mb-0">
      <Counter :target-count="12" :startFrom="0" label="Специалисты" />
      <Counter :target-count="9" :startFrom="0" label="Завершенные проекты" />
      <Counter :target-count="220" :startFrom="300" label="Удовлетворенные клиенты" />
      <Counter :target-count="5" :startFrom="59" label="Полученные награды" />
    </div>
  </div>
</template>
