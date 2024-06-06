<script setup></script>

<template>
  <header
    class="fixed z-[100] flex h-[75px] w-full items-center justify-between bg-[#F9F9F9] px-14 font-roboto drop-shadow-md"
  >
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <ul class="xs:hidden gap-6 text-[17px] font-bold xl:flex">
        <li class="hover:text-secondaryColor"><a href="#home">Главная</a></li>
        <li class="hover:text-secondaryColor"><a href="#about">О нас</a></li>
        <li class="hover:text-secondaryColor"><a href="#offer">Предложения</a></li>
        <!-- <li class="hover:text-secondaryColor"><a href="#price">Ценники</a></li> -->
        <li class="hover:text-secondaryColor"><a href="#gallery">Галлерея</a></li>
        <li class="hover:text-secondaryColor"><a href="#projects">Проекты</a></li>
        <li class="hover:text-secondaryColor"><a href="#contacts">Контакты</a></li>
      </ul>
      <div class="xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </div>
  </header>
</template>
