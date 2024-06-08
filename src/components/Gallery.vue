<template>
  <div
    id="gallery"
    class="flex w-screen flex-col items-center justify-center font-roboto xs:h-min xs:px-10 sm:px-14 md:h-screen md:px-12 lg:px-24"
  >
    <div class="flex flex-col gap-4 md:w-[80%] md:text-center lg:w-[70%]">
      <h2
        class="font-bold leading-tight text-[#333333] xs:mt-16 xs:text-[32px] md:mt-0 xl:text-[36px]"
      >
        Галлерея
      </h2>
      <p class="mb-16 text-[17px] text-[#333333]">
        Сфера применения нашей продукции частные дома, теплицы, продуктовые магазины, рестораны,
        фермы, промышленность.
      </p>
    </div>
    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-6.jpg"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-8.jpg"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-9.jpg"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-6.jpg"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-2.jpg"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-5.jpg"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-12.avif"
          alt="Landscape"
          class="delay-75 duration-500 hover:scale-110 sm:h-[250px] sm:w-auto lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="@/assets/images/irrigation-11.jpg"
          alt="Landscape"
          class="sm:w-autolg:h-[250px] delay-75 duration-500 hover:scale-110 sm:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
      </div>
    </div>
  </div>
</template>
