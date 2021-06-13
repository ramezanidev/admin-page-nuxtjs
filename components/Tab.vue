<template>
  <transition name="fade">
    <ul>
      <li v-for="tab in tabs" :key="tab.title">
        <span @click="$event.currentTarget.nextElementSibling && $event.currentTarget.parentElement.classList.toggle('open')" :class="{'pl-4' : !tab.children}" @dblclick="(tab.children || (tab.children = [])).push({title: 'ss'})">
          <svg v-if="tab.children" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="fill-current w-2 text-blue-500 mr-2 transition-all duration-300">
            <path d="M64 128v255.1c0 28.37 34.5 42.74 54.63 22.62l128-127.1c12.5-12.5 12.5-32.75 0-45.25l-128-127.1C98.5 85.27 64 99.52 64 128zM224 256l-128 127.1V128L224 256z"/>
          </svg>
          {{ tab.title }}</span>
        <Tab v-if="tab.children" :tabs="tab.children"/>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  props: ["tabs"],
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: .3s;
  transform-origin: top;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  transform: scaleY(0%);
  opacity: 0;
}
</style>
