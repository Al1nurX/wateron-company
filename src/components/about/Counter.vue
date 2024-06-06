<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetCount: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  startFrom: {
    type: Number,
    required: true
  }
})

const count = ref(props.startFrom)
let activated = false
let observer

const updateCount = () => {
  if (props.startFrom === 0 && count.value < props.targetCount) {
    count.value++
  } else if (props.startFrom === 300 && count.value > props.targetCount) {
    count.value--
  } else if (props.startFrom === 59 && count.value > props.targetCount) {
    count.value--
  }
  if (props.startFrom === 0 && count.value < props.targetCount) {
    setTimeout(updateCount, 70)
  }
  if (props.startFrom === 300 && count.value > props.targetCount) {
    setTimeout(updateCount, 10)
  }
  if (props.startFrom === 59 && count.value > props.targetCount) {
    setTimeout(updateCount, 20)
  }
}

const handleVisibilityChange = (entries) => {
  const entry = entries[0]
  if (entry.isIntersecting && !activated) {
    updateCount()
    activated = true
  } else if (!entry.isIntersecting && activated) {
    count.value = props.startFrom
    activated = false
  }
}

onMounted(() => {
  const container = document.querySelector('#counters')
  observer = new IntersectionObserver(handleVisibilityChange, {
    root: null,
    threshold: 0.5
  })
  observer.observe(container)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="counters flex flex-col items-center gap-2">
    <div class="font-georgia text-[50px] font-bold text-secondaryColor">
      <span>{{ count }}</span>
    </div>
    <p class="font-roboto text-[15px] text-[#333333]">{{ label }}</p>
  </div>
</template>
