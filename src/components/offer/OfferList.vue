<script setup>
const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <img
      src="@/assets/images/double-checked.svg"
      alt="Checkmark"
      class="h-[35px] w-[35px] rounded-[50%] bg-[#F9F9F9] p-[5px] drop-shadow-md"
    />
    <h4 class="text-[22px] font-medium text-[#333333]">{{ props.heading }}</h4>
    <p class="text-[17px] text-[#333333]">{{ props.text }}</p>
  </div>
</template>
