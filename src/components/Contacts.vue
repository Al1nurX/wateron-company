<script>
import bgImage from './../assets/images/landscape-10.jpg'

export default {
  data() {
    return {
      bgImage
    }
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${this.bgImage})`
      }
    }
  }
}
</script>

<template>
  <div
    id="contacts"
    class="contacts flex w-screen items-center justify-center bg-cover bg-center bg-no-repeat font-roboto xs:h-min xs:flex-col xs:gap-10 xs:px-10 xs:py-20 sm:px-14 md:px-16 xl:h-screen xl:flex-row xl:gap-28 xl:px-20"
    :style="backgroundImage"
  >
    <div
      class="relative flex flex-col gap-4 md:items-center xl:top-[-100px] xl:w-[40%] xl:items-start"
    >
      <span class="font-bold text-[#F9F9F9] xs:text-[32px] xl:text-[36px]">Контактные данные</span>
      <span class="w-[70%] text-[17px] text-[#F9F9F9] md:text-center xl:text-left"
        >Оставьте свои контактные данные и мы свяжемся с вами</span
      >
      <div class="mt-8 flex flex-col gap-4">
        <div class="flex items-center gap-4 md:flex-col xl:flex-row">
          <img
            src="@/assets/images/location.svg"
            alt="Location"
            class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
          />
          <span class="text-[17px] text-[#F9F9F9]">Ташкент, улица Катта халка йули</span>
        </div>
        <!-- <div class="flex items-center gap-4 md:flex-col xl:flex-row">
          <img
            src="@/assets/images/mail.svg"
            alt="Email"
            class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
          />
          <span class="text-[17px] text-[#F9F9F9]">hello@contact.com</span>
        </div> -->
        <div class="flex items-center gap-4 md:flex-col xl:flex-row">
          <img
            src="@/assets/images/call.svg"
            alt="Phone"
            class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
          />
          <span class="text-[17px] text-[#F9F9F9]">+ 998 99 863 00 40</span>
        </div>
        <div class="flex items-center gap-4 md:flex-col xl:flex-row">
          <img
            src="@/assets/images/call.svg"
            alt="Phone"
            class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
          />
          <span class="text-[17px] text-[#F9F9F9]">+ 998 98 308 11 81</span>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col xs:w-full sm:w-[80%] xl:w-[35%]">
      <form action="">
        <div class="flex flex-wrap gap-4">
          <div class="flex w-full flex-col gap-3 sm:flex-[0.5]">
            <span class="text-[17px] text-[#F9F9F9]">Имя</span>
            <input class="h-9 rounded-lg bg-[#FFFFFF] p-2" type="text" />
          </div>
          <div class="flex w-full flex-col gap-3 sm:flex-[0.5]">
            <span class="text-[17px] text-[#F9F9F9]">Фамилия</span>
            <input class="h-9 rounded-lg bg-[#FFFFFF] p-2" type="text" />
          </div>
        </div>
        <div class="mt-6 flex flex-1 flex-col gap-3">
          <span class="text-[17px] text-[#F9F9F9]">Телефон</span>
          <input class="h-9 rounded-lg bg-[#FFFFFF] p-2" type="tel" />
        </div>
        <div class="mt-6 flex flex-1 flex-col gap-3">
          <span class="text-[17px] text-[#F9F9F9]">Электронная почта</span>
          <input
            class="h-9 rounded-lg bg-[#FFFFFF] p-2 placeholder:opacity-50"
            type="email"
            placeholder="ваш@email.com"
          />
        </div>
        <div class="mt-6 flex flex-1 flex-col gap-3">
          <span class="text-[17px] text-[#F9F9F9]">Ваше сообщение</span>
          <textarea
            class="rounded-lg bg-[#FFFFFF] p-2 outline-none placeholder:opacity-50"
            name="message"
            cols="30"
            rows="5"
            placeholder="Введите ваше сообщение..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="mt-6 w-full rounded-lg bg-[#000000] py-[10px] text-[17px] uppercase text-neutral2 transition-all duration-500 hover:bg-secondaryColor"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>
