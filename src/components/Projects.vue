<template>
  <div
    id="projects"
    class="flex w-screen flex-col justify-center xs:h-min xs:px-10 sm:px-14 md:px-16 lg:px-24 xl:h-screen"
  >
    <div class="flex items-center justify-center gap-10 font-roboto xs:flex-col xl:flex-row">
      <div
        class="relative xs:order-last xs:mb-20 sm:mt-16 md:w-[90%] lg:mb-36 xl:order-first xl:mb-0 xl:w-[40%]"
      >
        <div
          class="absolute z-0 rounded-[50%] bg-primaryColor md:right-[-70px] md:top-[-70px] md:h-[380px] md:w-[380px] lg:h-[400px] lg:w-[400px] xl:left-[-100px] xl:top-[130px] xl:h-[450px] xl:w-[450px]"
        ></div>
        <img
          src="@/assets/images/landscape-2.jpg"
          alt="Landscape"
          class="rounded-lg drop-shadow-xl xs:h-auto xs:w-full xl:h-[500px] xl:w-[530px]"
        />
      </div>
      <div class="relative flex flex-col gap-3 xl:w-[50%]">
        <h2
          class="font-bold leading-tight text-[#333333] xs:mt-12 xs:text-[32px] md:mt-0 xl:text-[36px]"
        >
          Что мы делаем?
        </h2>
        <p class="text-[17px] text-[#333333]">
          Мы занимаемся проектированием, монтажом, пусконаладкой и техническим обслуживанием систем
          дождевания, капельного орошения, микроклимата, туманообразования как низкого, так и
          высокого давлений.
        </p>
        <div class="flex flex-col gap-4 xs:mt-8 md:mt-6">
          <div class="flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-[50%] bg-primaryColor p-[5px] drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">Мы предоставляем полный комплекс услуг.</p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-[50%] bg-primaryColor p-[5px] drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">
              Наши специалисты имеют многолетний опыт работы в данной области.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <img
              src="@/assets/images/double-checked.svg"
              alt="Checkmark"
              class="h-[35px] w-[35px] rounded-[50%] bg-primaryColor p-[5px] drop-shadow-md"
            />
            <p class="text-[17px] text-[#333333]">
              Мы гарантируем высокое качество всех наших услуг и продуктов.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
