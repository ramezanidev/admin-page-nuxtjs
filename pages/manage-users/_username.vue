<template>
  <div class="overflow-y-scroll overflow-x-hidden scrollbar flex justify-center">
    <div
      class="w-full relative mt-12 mx-4"
      style="max-width: 950px; min-height: 250px"
    >
      <div class="w-full p-3 text-white from-gray-800 bg-gradient-to-b rounded-t pb-8">
        <div class="flex sm:flex-col justify-between h-20 sm:h-auto">
          <div class="flex">
            <img
              class="w-20 h-20 sm:w-32 sm:h-32 ml-1 mr-3 object-cover rounded-full ring-1 ring-blue-600 ring-offset-gray-900 ring-offset-2"
              :src="user.profile"
              alt=""/>
            <div class="flex flex-col justify-start">
              <span class="text-3xl">{{ user.name }}</span>
              <span class="text-sm text-blue-200">{{ user.username }}</span>
            </div>
          </div>
          <hr class="mt-4 hidden sm:block border-gray-600 border-opacity-50">
          <div class="flex flex-col text-center sm:mt-3 sm:text-left justify-start">
            <p class="text-gray-400 text-sm">{{ user.email }}</p>
            <p class="text-blue-200 text-sm">{{ user.phone }}</p>
          </div>
          <div class="flex items-start sm:mt-2">
            <div class="flex flex-col text-center sm:text-left">
              <p class="text-gray-400 text-xs">last seen: {{ user.lastSeen }}</p>
              <p class="text-gray-400 text-xs">last seen: {{ user.lastSeen }}</p>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-end p-1.5">
          <nuxt-link :to="{path: '/admin-panel/sms', query:{phone: user.phone}}" class="h-12 w-12 flex rounded-full mx-1 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current text-blue-300 m-auto">
              <path
                d="M304 176h-16c-6.1 0-11.6 3.4-14.3 8.8L256 220.2l-17.7-35.4c-2.7-5.4-8.2-8.8-14.3-8.8h-16c-8.8 0-16 7.2-16 16v104c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-68.2l24.8 55.8c2.9 5.9 11.4 5.9 14.3 0l24.8-55.8V296c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V192c.1-8.8-7.1-16-15.9-16zm-168.6 42.5c-1.4-1.2-2.1-2.5-2.1-3.8 0-3.1 4.5-6.6 10.4-6.6H156c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-12.2c-23.4 0-42.4 17.3-42.4 38.6 0 10.7 4.9 20.9 13.3 28.1l21.9 18.8c1.4 1.2 2.1 2.5 2.1 3.8 0 3.1-4.5 6.6-10.4 6.6H116c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h12.3c23.4 0 42.4-17.3 42.4-38.6 0-10.7-4.9-20.9-13.3-28.1l-22-18.8zm240 0c-1.4-1.2-2.1-2.5-2.1-3.8 0-3.1 4.5-6.6 10.4-6.6H396c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-12.3c-23.4 0-42.4 17.3-42.4 38.6 0 10.7 4.9 20.9 13.3 28.1l21.9 18.8c1.4 1.2 2.1 2.5 2.1 3.8 0 3.1-4.5 6.6-10.4 6.6H356c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h12.3c23.4 0 42.4-17.3 42.4-38.6 0-10.7-4.9-20.9-13.3-28.1l-22-18.8zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.4 313.7 32.1 277.6 32.1 240c0-97 100.5-176 224-176s224 79 224 176S379.5 416 256 416z"/>
            </svg>
          </nuxt-link>

          <nuxt-link :to="{path: '/admin-panel/email', query:{email: user.email}}" class="h-12 w-12 flex relative rounded-full mx-1 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current text-blue-300 m-auto">
              <path d="M352 248v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8zm-184-56h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm326.59-27.48c-1.98-1.63-22.19-17.91-46.59-37.53V96c0-17.67-14.33-32-32-32h-46.47c-4.13-3.31-7.71-6.16-10.2-8.14C337.23 38.19 299.44 0 256 0c-43.21 0-80.64 37.72-103.34 55.86-2.53 2.01-6.1 4.87-10.2 8.14H96c-17.67 0-32 14.33-32 32v30.98c-24.52 19.71-44.75 36.01-46.48 37.43A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM256 32c21.77 0 44.64 16.72 63.14 32H192.9c18.53-15.27 41.42-32 63.1-32zM96 96h320v173.35c-32.33 26-65.3 52.44-86.59 69.34-16.85 13.43-50.19 45.68-73.41 45.31-23.21.38-56.56-31.88-73.41-45.32-21.29-16.9-54.24-43.33-86.59-69.34V96zM32 201.48c0-4.8 2.13-9.31 5.84-12.36 1.24-1.02 11.62-9.38 26.16-21.08v75.55c-11.53-9.28-22.51-18.13-32-25.78v-16.33zM480 464c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V258.91c42.75 34.44 99.31 79.92 130.68 104.82 20.49 16.36 56.74 52.53 93.32 52.26 36.45.26 72.27-35.46 93.31-52.26C380.72 338.8 437.24 293.34 480 258.9V464zm0-246.19c-9.62 7.75-20.27 16.34-32 25.79v-75.54c14.44 11.62 24.8 19.97 26.2 21.12 3.69 3.05 5.8 7.54 5.8 12.33v16.3z"/>
            </svg>
          </nuxt-link>


        </div>
        <div class="w-full bg-gray-800 shadow-md bg-opacity-75 rounded p-1.5 my-5">
          <div class="mb-3">
            <h2 class="font-bold text-xl">Course</h2>
          </div>
          <ul class="lists sm:shadow-inner">
            <div class="px-1 grid grid-cols-5 text-blue-300 border-b border-blue-600 pb-1.5 select-none cursor-default border-opacity-60">
              <span>course</span>
              <span>Date</span>
              <span>Price</span>
              <span>Status</span>
              <span>Remove</span>
            </div>
            <li v-for="i in 8" :key="i"
                class="px-1 grid items-center text-sm text-white font-bold grid-cols-5 text-gray-300 border-b border-gray-600 py-1.5 select-none cursor-default border-opacity-40">
              <span>JavaScript</span>
              <span>2020/01/13-13:17</span>
              <span>200,000</span>
              <span>use</span>
              <button class="bg-red-600 rounded text-sm active:bg-red-800 hover:bg-red-700 h-7">remove</button>
            </li>
          </ul>
          </div>
        <div class="w-full bg-gray-800 shadow-md bg-opacity-75 rounded p-1.5 my-5">
          <div class="mb-3">
            <h2 class="font-bold text-xl">Comments</h2>
          </div>
          <ul class="lists sm:shadow-inner">

            <div
              class="px-1 grid grid-cols-5 text-blue-300 border-b border-blue-600 pb-1.5 select-none cursor-default border-opacity-60">
              <span>Comment</span>
              <span>Date</span>
              <span>Page</span>
              <span>Status</span>
              <div class="grid grid-cols-2 gap-1">
                <span>Remove</span>
                <span>Edit</span>
              </div>
            </div>
            <li v-for="i in 8" :key="i"
                class="px-1 grid items-center text-sm text-white font-bold grid-cols-5 text-gray-300 border-b border-gray-600 py-1.5 select-none cursor-default border-opacity-40">
              <span>lorem lorem lorem lorem lorem lorem lorem lorem lorem</span>
              <span>2020/01/13-13:17</span>
              <span>200,000</span>
              <span>use</span>
              <div class="grid grid-cols-2 gap-1">
                <button class="bg-red-600 rounded text-sm active:bg-red-800 hover:bg-red-700 h-7">remove</button>
                <button class="bg-green-600 rounded text-sm active:bg-green-800 hover:bg-green-700 h-7">edit</button>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [
      {
        name: 'reza',
        username: 'ramezani',
        lastSeen: '2020/15/10',
        phone: '09904064153',
        email: 'rezaaa555scr@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
      {
        name: 'ali',
        username: 'alizadeh',
        lastSeen: '2020/15/10',
        phone: '09916223724',
        email: 'ali@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
      {
        name: 'mahdi',
        username: 'mohammadi',
        lastSeen: '2020/15/10',
        phone: '09978545563',
        email: 'mahdi@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
      {
        name: 'milad',
        username: 'hoseyni',
        lastSeen: '2020/15/10',
        phone: '099535781',
        email: 'milad@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
      {
        name: 'sajjad',
        username: 'rad',
        lastSeen: '2020/15/10',
        phone: '099564587545',
        email: 'sajjad@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
    ],
  }),
  computed: {
    user() {
      return this.users.filter(e => e.username === this.$route.params.username)[0]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>


<style lang="scss" scoped>
.lists > li{
  transition: .2s all ease-in-out;
}
.lists:hover > li{
  opacity: .5;
}
.lists > li:hover{
  opacity: 1;
  margin-bottom: 10px;
}
.lists > li:last-of-type{
  border-bottom: none !important;
}

@media (max-width: 868px) {
  .lists{
    overflow-x: scroll;
    & > * {
      min-width: 1000px;
    }
    &:hover > li{
      opacity: 1;
    }
  }
}
</style>
