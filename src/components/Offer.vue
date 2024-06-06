<template>
  <div
    id="offer"
    class="flex h-min w-screen flex-col items-center bg-primaryColor font-roboto"
  >
    <div class="mt-[100px] flex w-full flex-col items-center gap-4 px-32">
      <div class="flex w-[70%] flex-col items-center gap-4 text-center">
        <h2 class="text-[36px] font-bold leading-tight text-[#333333]">Предложения</h2>
        <p class="mb-12 text-[17px] text-[#333333]">
          Высококачественные системы орошения для эффективного полива, экономии времени и денег.
          Свяжитесь с нами сегодня!
        </p>
      </div>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-[400px]">
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="./../assets/images/landscape-2.jpg"
              class="absolute left-1/2 top-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="Landscape"
            />
          </div>
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="./../assets/images/landscape-3.jpg"
              class="absolute left-1/2 top-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="Landscape"
            />
          </div>
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="./../assets/images/landscape-4.jpg"
              class="absolute left-1/2 top-1/2 z-0 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="Landscape"
            />
          </div>
        </div>
        <div
          class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
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
    <div class="mt-24 grid w-full grid-cols-3 mb-24 gap-20 px-32">
      <div class="flex flex-col gap-3">
        <img
          src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%280%2C%200%2C%200%29%27%20id%3D%27ww-set2-checkmark-done-circle-outline%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2032%2032%27%20%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M3%2016C3%208.82272%208.82272%203%2016%203C23.1773%203%2029%208.82272%2029%2016C29%2023.1773%2023.1773%2029%2016%2029C8.82272%2029%203%2023.1773%203%2016ZM16%205C9.92728%205%205%209.92728%205%2016C5%2022.0727%209.92728%2027%2016%2027C22.0727%2027%2027%2022.0727%2027%2016C27%209.92728%2022.0727%205%2016%205Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M23.6581%2011.2471C24.0739%2011.6105%2024.1164%2012.2422%2023.7529%2012.6581L16.7611%2020.6581C16.5788%2020.8666%2016.3182%2020.9902%2016.0414%2020.9995C15.7646%2021.0087%2015.4964%2020.9027%2015.3006%2020.7068L12.3038%2017.7068C11.9134%2017.316%2011.9138%2016.6829%2012.3045%2016.2925C12.6952%2015.9022%2013.3284%2015.9025%2013.7187%2016.2933L15.9593%2018.5362L22.247%2011.3419C22.6105%2010.9261%2023.2422%2010.8836%2023.6581%2011.2471Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M8.29326%2016.2925C8.68399%2015.9022%209.31715%2015.9025%209.70748%2016.2933L12.7043%2019.2933C13.0947%2019.684%2013.0943%2020.3172%2012.7036%2020.7075C12.3129%2021.0978%2011.6797%2021.0975%2011.2894%2020.7067L8.29252%2017.7067C7.9022%2017.316%207.90253%2016.6828%208.29326%2016.2925Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M19.7649%2011.247C20.1808%2011.6103%2020.2233%2012.2421%2019.8599%2012.658L16.6381%2016.3455C16.2747%2016.7614%2015.643%2016.8039%2015.2271%2016.4406C14.8112%2016.0772%2014.7686%2015.4455%2015.132%2015.0296L18.3538%2011.3421C18.7172%2010.9262%2019.349%2010.8836%2019.7649%2011.247Z%27%20%2F%3E%3C%2Fsvg%3E"
          alt="Checkmark"
          class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
        />
        <h4 class="text-[22px] font-medium text-[#333333]">Эффективная технология орошения</h4>
        <p class="text-[17px] text-[#333333]">
          Наши передовые системы орошения эффективно поливают растения и ландшафт, экономя время и
          деньги на счетах за воду.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <img
          src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%280%2C%200%2C%200%29%27%20id%3D%27ww-set2-checkmark-done-circle-outline%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2032%2032%27%20%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M3%2016C3%208.82272%208.82272%203%2016%203C23.1773%203%2029%208.82272%2029%2016C29%2023.1773%2023.1773%2029%2016%2029C8.82272%2029%203%2023.1773%203%2016ZM16%205C9.92728%205%205%209.92728%205%2016C5%2022.0727%209.92728%2027%2016%2027C22.0727%2027%2027%2022.0727%2027%2016C27%209.92728%2022.0727%205%2016%205Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M23.6581%2011.2471C24.0739%2011.6105%2024.1164%2012.2422%2023.7529%2012.6581L16.7611%2020.6581C16.5788%2020.8666%2016.3182%2020.9902%2016.0414%2020.9995C15.7646%2021.0087%2015.4964%2020.9027%2015.3006%2020.7068L12.3038%2017.7068C11.9134%2017.316%2011.9138%2016.6829%2012.3045%2016.2925C12.6952%2015.9022%2013.3284%2015.9025%2013.7187%2016.2933L15.9593%2018.5362L22.247%2011.3419C22.6105%2010.9261%2023.2422%2010.8836%2023.6581%2011.2471Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M8.29326%2016.2925C8.68399%2015.9022%209.31715%2015.9025%209.70748%2016.2933L12.7043%2019.2933C13.0947%2019.684%2013.0943%2020.3172%2012.7036%2020.7075C12.3129%2021.0978%2011.6797%2021.0975%2011.2894%2020.7067L8.29252%2017.7067C7.9022%2017.316%207.90253%2016.6828%208.29326%2016.2925Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M19.7649%2011.247C20.1808%2011.6103%2020.2233%2012.2421%2019.8599%2012.658L16.6381%2016.3455C16.2747%2016.7614%2015.643%2016.8039%2015.2271%2016.4406C14.8112%2016.0772%2014.7686%2015.4455%2015.132%2015.0296L18.3538%2011.3421C18.7172%2010.9262%2019.349%2010.8836%2019.7649%2011.247Z%27%20%2F%3E%3C%2Fsvg%3E"
          alt="Checkmark"
          class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
        />
        <h4 class="text-[22px] font-medium text-[#333333]">Высококачественные продукты</h4>
        <p class="text-[17px] text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <img
          src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%280%2C%200%2C%200%29%27%20id%3D%27ww-set2-checkmark-done-circle-outline%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2032%2032%27%20%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M3%2016C3%208.82272%208.82272%203%2016%203C23.1773%203%2029%208.82272%2029%2016C29%2023.1773%2023.1773%2029%2016%2029C8.82272%2029%203%2023.1773%203%2016ZM16%205C9.92728%205%205%209.92728%205%2016C5%2022.0727%209.92728%2027%2016%2027C22.0727%2027%2027%2022.0727%2027%2016C27%209.92728%2022.0727%205%2016%205Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M23.6581%2011.2471C24.0739%2011.6105%2024.1164%2012.2422%2023.7529%2012.6581L16.7611%2020.6581C16.5788%2020.8666%2016.3182%2020.9902%2016.0414%2020.9995C15.7646%2021.0087%2015.4964%2020.9027%2015.3006%2020.7068L12.3038%2017.7068C11.9134%2017.316%2011.9138%2016.6829%2012.3045%2016.2925C12.6952%2015.9022%2013.3284%2015.9025%2013.7187%2016.2933L15.9593%2018.5362L22.247%2011.3419C22.6105%2010.9261%2023.2422%2010.8836%2023.6581%2011.2471Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M8.29326%2016.2925C8.68399%2015.9022%209.31715%2015.9025%209.70748%2016.2933L12.7043%2019.2933C13.0947%2019.684%2013.0943%2020.3172%2012.7036%2020.7075C12.3129%2021.0978%2011.6797%2021.0975%2011.2894%2020.7067L8.29252%2017.7067C7.9022%2017.316%207.90253%2016.6828%208.29326%2016.2925Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M19.7649%2011.247C20.1808%2011.6103%2020.2233%2012.2421%2019.8599%2012.658L16.6381%2016.3455C16.2747%2016.7614%2015.643%2016.8039%2015.2271%2016.4406C14.8112%2016.0772%2014.7686%2015.4455%2015.132%2015.0296L18.3538%2011.3421C18.7172%2010.9262%2019.349%2010.8836%2019.7649%2011.247Z%27%20%2F%3E%3C%2Fsvg%3E"
          alt="Checkmark"
          class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
        />
        <h4 class="text-[22px] font-medium text-[#333333]">Исключительное обслуживание</h4>
        <p class="text-[17px] text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <img
          src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%280%2C%200%2C%200%29%27%20id%3D%27ww-set2-checkmark-done-circle-outline%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2032%2032%27%20%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M3%2016C3%208.82272%208.82272%203%2016%203C23.1773%203%2029%208.82272%2029%2016C29%2023.1773%2023.1773%2029%2016%2029C8.82272%2029%203%2023.1773%203%2016ZM16%205C9.92728%205%205%209.92728%205%2016C5%2022.0727%209.92728%2027%2016%2027C22.0727%2027%2027%2022.0727%2027%2016C27%209.92728%2022.0727%205%2016%205Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M23.6581%2011.2471C24.0739%2011.6105%2024.1164%2012.2422%2023.7529%2012.6581L16.7611%2020.6581C16.5788%2020.8666%2016.3182%2020.9902%2016.0414%2020.9995C15.7646%2021.0087%2015.4964%2020.9027%2015.3006%2020.7068L12.3038%2017.7068C11.9134%2017.316%2011.9138%2016.6829%2012.3045%2016.2925C12.6952%2015.9022%2013.3284%2015.9025%2013.7187%2016.2933L15.9593%2018.5362L22.247%2011.3419C22.6105%2010.9261%2023.2422%2010.8836%2023.6581%2011.2471Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M8.29326%2016.2925C8.68399%2015.9022%209.31715%2015.9025%209.70748%2016.2933L12.7043%2019.2933C13.0947%2019.684%2013.0943%2020.3172%2012.7036%2020.7075C12.3129%2021.0978%2011.6797%2021.0975%2011.2894%2020.7067L8.29252%2017.7067C7.9022%2017.316%207.90253%2016.6828%208.29326%2016.2925Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M19.7649%2011.247C20.1808%2011.6103%2020.2233%2012.2421%2019.8599%2012.658L16.6381%2016.3455C16.2747%2016.7614%2015.643%2016.8039%2015.2271%2016.4406C14.8112%2016.0772%2014.7686%2015.4455%2015.132%2015.0296L18.3538%2011.3421C18.7172%2010.9262%2019.349%2010.8836%2019.7649%2011.247Z%27%20%2F%3E%3C%2Fsvg%3E"
          alt="Checkmark"
          class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
        />
        <h4 class="text-[22px] font-medium text-[#333333]">Lorem ipsum dolor</h4>
        <p class="text-[17px] text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <img
          src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%280%2C%200%2C%200%29%27%20id%3D%27ww-set2-checkmark-done-circle-outline%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2032%2032%27%20%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M3%2016C3%208.82272%208.82272%203%2016%203C23.1773%203%2029%208.82272%2029%2016C29%2023.1773%2023.1773%2029%2016%2029C8.82272%2029%203%2023.1773%203%2016ZM16%205C9.92728%205%205%209.92728%205%2016C5%2022.0727%209.92728%2027%2016%2027C22.0727%2027%2027%2022.0727%2027%2016C27%209.92728%2022.0727%205%2016%205Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M23.6581%2011.2471C24.0739%2011.6105%2024.1164%2012.2422%2023.7529%2012.6581L16.7611%2020.6581C16.5788%2020.8666%2016.3182%2020.9902%2016.0414%2020.9995C15.7646%2021.0087%2015.4964%2020.9027%2015.3006%2020.7068L12.3038%2017.7068C11.9134%2017.316%2011.9138%2016.6829%2012.3045%2016.2925C12.6952%2015.9022%2013.3284%2015.9025%2013.7187%2016.2933L15.9593%2018.5362L22.247%2011.3419C22.6105%2010.9261%2023.2422%2010.8836%2023.6581%2011.2471Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M8.29326%2016.2925C8.68399%2015.9022%209.31715%2015.9025%209.70748%2016.2933L12.7043%2019.2933C13.0947%2019.684%2013.0943%2020.3172%2012.7036%2020.7075C12.3129%2021.0978%2011.6797%2021.0975%2011.2894%2020.7067L8.29252%2017.7067C7.9022%2017.316%207.90253%2016.6828%208.29326%2016.2925Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M19.7649%2011.247C20.1808%2011.6103%2020.2233%2012.2421%2019.8599%2012.658L16.6381%2016.3455C16.2747%2016.7614%2015.643%2016.8039%2015.2271%2016.4406C14.8112%2016.0772%2014.7686%2015.4455%2015.132%2015.0296L18.3538%2011.3421C18.7172%2010.9262%2019.349%2010.8836%2019.7649%2011.247Z%27%20%2F%3E%3C%2Fsvg%3E"
          alt="Checkmark"
          class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
        />
        <h4 class="text-[22px] font-medium text-[#333333]">Lorem ipsum dolor</h4>
        <p class="text-[17px] text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <img
          src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%280%2C%200%2C%200%29%27%20id%3D%27ww-set2-checkmark-done-circle-outline%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2032%2032%27%20%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M3%2016C3%208.82272%208.82272%203%2016%203C23.1773%203%2029%208.82272%2029%2016C29%2023.1773%2023.1773%2029%2016%2029C8.82272%2029%203%2023.1773%203%2016ZM16%205C9.92728%205%205%209.92728%205%2016C5%2022.0727%209.92728%2027%2016%2027C22.0727%2027%2027%2022.0727%2027%2016C27%209.92728%2022.0727%205%2016%205Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M23.6581%2011.2471C24.0739%2011.6105%2024.1164%2012.2422%2023.7529%2012.6581L16.7611%2020.6581C16.5788%2020.8666%2016.3182%2020.9902%2016.0414%2020.9995C15.7646%2021.0087%2015.4964%2020.9027%2015.3006%2020.7068L12.3038%2017.7068C11.9134%2017.316%2011.9138%2016.6829%2012.3045%2016.2925C12.6952%2015.9022%2013.3284%2015.9025%2013.7187%2016.2933L15.9593%2018.5362L22.247%2011.3419C22.6105%2010.9261%2023.2422%2010.8836%2023.6581%2011.2471Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M8.29326%2016.2925C8.68399%2015.9022%209.31715%2015.9025%209.70748%2016.2933L12.7043%2019.2933C13.0947%2019.684%2013.0943%2020.3172%2012.7036%2020.7075C12.3129%2021.0978%2011.6797%2021.0975%2011.2894%2020.7067L8.29252%2017.7067C7.9022%2017.316%207.90253%2016.6828%208.29326%2016.2925Z%27%20%2F%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M19.7649%2011.247C20.1808%2011.6103%2020.2233%2012.2421%2019.8599%2012.658L16.6381%2016.3455C16.2747%2016.7614%2015.643%2016.8039%2015.2271%2016.4406C14.8112%2016.0772%2014.7686%2015.4455%2015.132%2015.0296L18.3538%2011.3421C18.7172%2010.9262%2019.349%2010.8836%2019.7649%2011.247Z%27%20%2F%3E%3C%2Fsvg%3E"
          alt="Checkmark"
          class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
        />
        <h4 class="text-[22px] font-medium text-[#333333]">Lorem ipsum dolor</h4>
        <p class="text-[17px] text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
          sit amet dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur.
        </p>
      </div>
    </div>
  </div>
</template>
