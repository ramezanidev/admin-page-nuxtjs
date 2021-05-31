<template>
  <header
    class="h-16 px-3 flex justify-between bg-gray-800 bg-opacity-60 border-b border-gray-500"
  >
    <div class="navbar">
<!--      <nuxt-link to="#Dashbord">Dashbord</nuxt-link>-->
<!--      <nuxt-link to="#Analytice">Analytice</nuxt-link>-->
<!--      <nuxt-link to="#Reports">Reports</nuxt-link>-->
<!--      <nuxt-link to="#Settings">Settings</nuxt-link>-->
    </div>
    <div
      class="block group px-3 hover:bg-gray-800 h-16 transition-all hover:h-48 z-10 rounded-b hover:shadow"
    >
      <div class="flex items-center h-16">
        <span class="w-3 mx-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgba(37, 99, 235)"
            viewBox="0 0 256 512"
          >
            <path
              d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
            />
          </svg>
        </span>
        <p class="text-gray-400 mx-1 text-sm">Welcome</p>
        <p class="text-white">Reza</p>
        <img
          class="w-9 ml-3 cursor-pointer h-9 ring-1 ring-blue-600 ring-offset-gray-900 ring-offset-2 rounded-full"
          src="http://picsum.photos/500/500?image"
        />
      </div>
      <div class="hidden group-hover:block py-2">
        <nuxt-link
          to="/my-profile"
          class="flex text-gray-300 text-sm items-center py-2 border-b border-gray-700 transition-all pl-0 hover:pl-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 mr-3 fill-current text-blue-600"
            viewBox="0 0 448 512"
          >
            <path
              d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
            />
          </svg>
          <span>My Profile</span>
        </nuxt-link>

        <nuxt-link
          to="/my-profile"
          class="flex text-gray-300 text-sm items-center py-2 border-b border-gray-700 transition-all pl-0 hover:pl-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mr-3 fill-current text-blue-600" viewBox="0 0 512 512">
            <path
              d="M336 32c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.661-10.339L240 352h-48v64h-64v64H32v-80l170.339-170.339C195.675 213.076 192 194.968 192 176c0-79.529 64.471-144 144-144m0-32c-97.184 0-176 78.769-176 176 0 15.307 1.945 30.352 5.798 44.947L7.029 379.716A24.003 24.003 0 0 0 0 396.686V488c0 13.255 10.745 24 24 24h112c13.255 0 24-10.745 24-24v-40h40c13.255 0 24-10.745 24-24v-40h19.314c6.365 0 12.47-2.529 16.971-7.029l30.769-30.769C305.648 350.055 320.693 352 336 352c97.184 0 176-78.769 176-176C512 78.816 433.231 0 336 0zm48 108c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
            />
          </svg>
          <span>Change password</span>
        </nuxt-link>

        <nuxt-link
          to="/my-profile"
          class="flex text-gray-300 text-sm items-center py-2 transition-all pl-0 hover:pl-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 mr-3 fill-current text-blue-600"
            viewBox="0 0 512 512"
          >
            <path
              d="M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z"
            />
          </svg>
          <span>Log out</span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.navbar {
  @apply flex text-gray-300;
  & > a {
    @apply px-4 h-full flex items-center relative mx-1 select-none cursor-pointer;
    &::before {
      content: " ";
      @apply absolute transition-all h-0 rounded-t w-full bg-blue-600 bottom-0 left-0;
    }

    &:nth-child(2) {
      @apply text-blue-500;
      &::before {
        @apply h-0.5;
      }
    }
  }
}
</style>
