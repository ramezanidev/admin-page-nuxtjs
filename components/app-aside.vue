<template>
  <aside class="bg-gray-900 menu close-menu w-60 h-screen transition-all" ref="menu">


    <span class="menu-btn transition-all" @click="$refs.menu.classList.toggle('close-menu')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 184c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm176-112c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM80 184c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 112c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
        />
      </svg>
    </span>

    <div class="w-full" @dblclick="$refs.menu.classList.toggle('close-menu')">
      <nuxt-link class="link" draggable="false" to="/my-profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
          />
        </svg>
        <span>My Profile</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/account-information">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"
            />
          </svg>
        </svg>
        <span>Account Information</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/manage-users">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm244 192h-40c-15.2 0-29.3 4.8-41.1 12.9 9.4 6.4 17.9 13.9 25.4 22.4 4.9-2.1 10.2-3.3 15.7-3.3h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm304.1 180c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM480 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zM157.1 268.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4z"
          />
        </svg>
        <span>Manage Users</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/admin-panel">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"
          />
        </svg>
        <span>Admin Panel</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/manage-customer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm240-16v176H32V80c0-8.837 7.163-16 16-16h192zM32 432V272h208v176H48c-8.837 0-16-7.163-16-16zm240 16V272h208v160c0 8.837-7.163 16-16 16H272zm208-208H272V64h192c8.837 0 16 7.163 16 16v160z"
          />
        </svg>
        <span>Manage Customer</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/reports">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"
          />
        </svg>
        <span>Reports</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/data-sharing">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M508.485 184.485l-92.485 92c-4.687 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.687-4.686-4.687-12.284 0-16.971L452.893 192H12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h440.905l-60.946-60.444c-4.687-4.686-4.687-12.284 0-16.971l7.07-7.07c4.687-4.686 12.284-4.686 16.971 0l92.485 92c4.687 4.686 4.686 12.284 0 16.97zm-504.97 160l92.485 92c4.687 4.686 12.284 4.686 16.971 0l7.07-7.07c4.687-4.686 4.687-12.284 0-16.971L59.095 352H500c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H59.107l60.934-60.444c4.687-4.686 4.687-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.687-16.97 0l-92.485 92c-4.686 4.686-4.687 12.284 0 16.97z"
          />
        </svg>
        <span>Data Sharing</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/upload-data">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"
          />
        </svg>
        <span>Upload Data</span>
      </nuxt-link>

      <nuxt-link class="link" draggable="false" to="/delete-all-hydrants">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
          />
        </svg>

        <span>Delete All Hydrants</span>
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
export default {
  watch:{
    $route(){
      if(window.innerWidth <= 868){
        this.$refs.menu.classList.add('close-menu')
      }
    }
  }
};
</script>

<style scoped lang="scss">
.link {
  @apply h-10 transition-all relative w-full text-sm select-none flex items-center text-gray-500 transition-all pl-10 hover:pl-11;
  &::before {
    content: " ";
    @apply h-10 absolute top-0 left-0 rounded-r w-0 bg-blue-600 block transition-all;
  }

  &.nuxt-link-exact-active, &.nuxt-link-active {
    @apply text-blue-500 pl-11;
    & > svg {
      fill: theme("colors.blue.600");
    }

    &::before {
      @apply w-1;
    }
  }

  & > svg {
    @apply h-4 w-4 mr-4;
    fill: rgba(107, 114, 128, 1);
  }
}

.menu-btn {
  @apply pt-3 transition-all bg-gray-800 bg-opacity-60 h-16 cursor-pointer mb-6 items-center justify-center pb-5 border-b border-gray-500 flex;
  & > svg {
    @apply h-5 w-5 transition-all;
    transform: rotate(0deg);
    fill: theme("colors.blue.600");
  }
}

.close-menu {
  @apply w-12;
  .link {
    @apply p-0 justify-center;
    span {
      display: none;
    }

    svg {
      @apply m-0 h-5 w-5;
    }
  }

  .menu-btn {
    & > svg {
      transform: rotate(270deg);
    }
  }
}

@media (max-width: 999px) {
  .menu {
    @apply w-12;
    .link {
      @apply p-0 justify-center;
      span {
        display: none;
      }

      svg {
        @apply m-0 h-5 w-5;
      }
    }

    .menu-btn {
      & > svg {
        transform: rotate(270deg);
      }
    }
  }
}


@media (max-width: 868px) {
  .menu{
    @apply fixed top-16 bottom-16 left-0 rounded-r-xl h-auto;
    z-index: 2;
    .menu-btn{
      transform: rotate(90deg);
    }
  }
  .menu-btn {
    @apply fixed h-12 w-12 border-0 bg-gray-900 shadow border border-blue-600 border-opacity-20 bg-opacity-80 rounded-full right-5 bottom-5 p-0 m-0 bg-opacity-100;
  }
  .close-menu{
    @apply -left-16;
    .menu-btn{
      transform: rotate(0deg);
    }
  }
}
</style>
