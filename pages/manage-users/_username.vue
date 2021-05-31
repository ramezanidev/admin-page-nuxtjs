<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div
      class="w-full relative mt-12 mx-4"
      style="max-width: 950px; min-height: 250px"
    >
      <div class="w-full p-3 text-white from-gray-800 bg-gradient-to-b rounded-t pb-8">
        <div class="flex justify-between h-20">
          <div class="flex">
            <img
              class="w-20 h-20 ml-1 mr-3 object-cover rounded-full ring-1 ring-blue-600 ring-offset-gray-900 ring-offset-2"
              :src="user.profile"
              alt=""/>
            <div class="flex flex-col justify-start">
              <span class="text-3xl">{{ user.name }}</span>
              <span class="text-sm text-blue-200">{{ user.username }}</span>
            </div>
          </div>
          <div class="flex flex-col text-center justify-start">
            <p class="text-gray-400 text-sm">{{ user.email }}</p>
            <p class="text-blue-200 text-sm">{{ user.phone }}</p>
          </div>
          <div class="flex items-start">
            <div class="flex flex-col text-center">
              <p class="text-gray-400 text-xs">last seen: {{ user.lastSeen }}</p>
              <p class="text-gray-400 text-xs">last seen: {{ user.lastSeen }}</p>
            </div>
          </div>
        </div>
        <div class="w-full bg-gray-800 shadow-md bg-opacity-75 rounded p-1.5 my-5">
          <div class="mb-3">
            <h2 class="font-bold text-xl">Course</h2>
          </div>
          <ul class="lists">

            <div class="px-1 grid grid-cols-5 text-blue-300 border-b border-blue-600 pb-1.5 select-none cursor-default border-opacity-60">
              <span>course</span>
              <span>Date</span>
              <span>Price</span>
              <span>Status</span>
              <span>Remove</span>
            </div>
            <li v-for="i in 8" :key="i" class="px-1 grid items-center text-sm text-white font-bold grid-cols-5 text-gray-300 border-b border-gray-600 py-1.5 select-none cursor-default border-opacity-40">
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
          <ul class="lists">

            <div class="px-1 grid grid-cols-5 text-blue-300 border-b border-blue-600 pb-1.5 select-none cursor-default border-opacity-60">
              <span>Comment</span>
              <span>Date</span>
              <span>Page</span>
              <span>Status</span>
              <div class="grid grid-cols-2 gap-1">
                <span>Remove</span>
                <span>Edit</span>
              </div>
            </div>
            <li v-for="i in 8" :key="i" class="px-1 grid items-center text-sm text-white font-bold grid-cols-5 text-gray-300 border-b border-gray-600 py-1.5 select-none cursor-default border-opacity-40">
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


<style>
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
</style>
