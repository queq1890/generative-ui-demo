<script setup lang="ts">
const props = defineProps<{
  pollId: string
  height?: string
}>()
</script>

<template>
  <div class="slido-wrap">
    <iframe
      :src="`https://app.sli.do/event/${props.pollId}`"
      :style="{ height: props.height ?? '420px' }"
      frameborder="0"
      title="Slido"
    />
  </div>
</template>

<style scoped>
.slido-wrap {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
iframe {
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
  background: #fff;
}
</style>
