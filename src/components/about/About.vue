<script setup>
import Counter from './Counter.vue'
</script>

<template>
  <div
    id="about"
    class="relative flex h-screen w-screen flex-col justify-center xs:px-16 md:px-16 lg:px-24"
  >
    <div
      class="flex flex-col items-center justify-center gap-14 font-roboto xs:mt-12 md:mt-0 md:flex-row"
    >
      <div class="relative w-full md:w-1/2">
        <div
          class="absolute top-0 z-0 rounded-full bg-primaryColor lg:left-[-50px] lg:h-[300px] lg:w-[300px] xl:left-[-70px] xl:h-[380px] xl:w-[380px]"
        ></div>
        <img
          src="@/assets/images/landscape-2.jpg"
          alt="Landscape"
          class="w-full rounded-lg drop-shadow-xl md:h-[300px] lg:h-[400px] xl:h-[500px]"
        />
      </div>
      <div class="flex w-full flex-col gap-3 md:w-1/2">
        <div
        class="md:absolute md:block md:isolate] md:left-0 md:top-0 md:px-16 lg:px-24 xl:relative xl:px-0 xl:pt-0"
        >
          <h2 class="text-2xl font-bold leading-tight text-gray-800 md:text-4xl">О нас</h2>
          <p class="text-base text-gray-800 md:text-lg">
            Компания Wateron предлагает инновационные решения для полива пышных ландшафтов. Мы
            стремимся к совершенству, эффективности и рентабельности, предлагая удобные системы и
            экспертную поддержку для удовлетворения всех ваших потребностей в поливе.
          </p>
        </div>
        <div class="flex flex-col gap-4">
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
    <div
      id="counters"
      class="mt-14 grid gap-4 text-center xs:mb-14 xs:grid-cols-2 md:grid-cols-4"
    >
      <Counter :target-count="12" :startFrom="0" label="Специалисты" />
      <Counter :target-count="9" :startFrom="0" label="Завершенные проекты" />
      <Counter :target-count="220" :startFrom="300" label="Удовлетворенные клиенты" />
      <Counter :target-count="5" :startFrom="59" label="Полученные награды" />
    </div>
  </div>
</template>
