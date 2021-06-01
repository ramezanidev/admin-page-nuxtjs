<template>
  <div class="flex h-full" style="background-color: #0c111c">
    <div>
      <app-aside />
    </div>
    <div class="flex flex-auto flex-col w-full">
      <app-header class="w-full" />
      <transition name="bounce">
        <Nuxt class="flex flex-auto"/>
      </transition>
    </div>
  </div>
</template>

<style>

html,body,#__layout,#__nuxt{
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'IRANSans';
}
@media (hover: none) {
  *{
    -webkit-tap-highlight-color: transparent !important;
  }
}
button,input,textarea,a{
  outline: none !important;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in 500ms;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
