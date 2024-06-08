<script setup>
import OfferList from './OfferList.vue'
</script>

<template>
  <div
    id="offer"
    class="flex h-min w-screen flex-col items-center bg-primaryColor font-roboto xs:px-10 sm:px-14 md:px-16 lg:px-24"
  >
    <div class="mt-[60px] flex w-full flex-col items-center gap-4">
      <div class="flex flex-col gap-4 md:w-[80%] md:text-center lg:w-[70%]">
        <h2 class="font-bold leading-tight text-[#333333] xs:text-[32px] lg:text-[36px]">
          Предложения
        </h2>
        <p class="mb-12 text-[17px] text-[#333333]">
          Высококачественные системы орошения для эффективного полива, экономии времени и денег.
          Свяжитесь с нами сегодня!
        </p>
      </div>
      <div
        id="default-carousel"
        class="relative w-full xs:my-[-80px] xsm:my-[-50px] sm:my-0 sm:mt-0"
        data-carousel="slide"
      >
        <div class="relative h-56 overflow-hidden rounded-lg xs:h-[300px] md:h-[400px]">
          <div class="duration-800 ease-in-out" data-carousel-item>
            <img
              src="@/assets/images/landscape-3.jpg"
              class="absolute left-1/2 top-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="Landscape"
            />
          </div>
          <div class="duration-800 ease-in-out" data-carousel-item>
            <img
              src="@/assets/images/landscape-6.jpg"
              class="absolute left-1/2 top-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="Landscape"
            />
          </div>
          <div class="duration-800 ease-in-out" data-carousel-item>
            <img
              src="@/assets/images/landscape-4.jpg"
              class="absolute left-1/2 top-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="Landscape"
            />
          </div>
        </div>
        <div
          class="absolute left-1/2 z-30 flex -translate-x-1/2 space-x-3 xs:hidden sm:bottom-5 sm:block rtl:space-x-reverse"
        >
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-white/50 group-focus:outline-none group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
          >
            <svg
              class="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Предыдущий</span>
          </span>
        </button>
        <button
          type="button"
          class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-white/50 group-focus:outline-none group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
          >
            <svg
              class="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Следующий</span>
          </span>
        </button>
      </div>
    </div>
    <div
      class="mb-24 mt-24 grid w-full xs:grid-cols-1 xs:gap-10 md:grid-cols-2 md:gap-14 xl:grid-cols-3 xl:gap-20"
    >
      <OfferList
        heading="Эффективная технология орошения"
        text="Наши передовые системы орошения эффективно поливают растения и ландшафт, экономя время и
          деньги на счетах за воду."
      />
      <OfferList
        heading="Высококачественные продукты"
        text="Компания Wateron Irrigation System предлагает высококачественные системы дождевания для
          газонов, цветников, теплиц и полей."
      />
      <OfferList
        heading="Исключительное обслуживание"
        text="Мы предлагаем обслуживание и поддержку для всех наших систем, включая системы низкого и
          высокого давления."
      />
      <OfferList
        heading="Системы туманообразования"
        text="Наши системы туманообразования создают комфортный микроклимат в помещениях и на открытых
          площадках, будь то кафе, ресторан или производственная площадь."
      />
      <OfferList
        heading="Технологии низкого давления"
        text="Наши системы низкого давления подходят для создания микроклимата в любых условиях, включая
          кафе и рестораны."
      />
      <OfferList
        heading="Технологии высокого давления"
        text="Системы высокого давления идеально подходят для охлаждения и пылеподавления, а также для
          борьбы с запахами."
      />
    </div>
  </div>
</template>
