<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div
      class="w-full relative mt-12 mx-4"
      style="max-width: 950px; min-height: 250px"
    >
      <div class="text-white">
        <div class="flex justify-between">
          <h2 class="text-2xl">Users</h2>
          <div>
            <input v-model="search.input" @input="searchUser" class="py-1 px-2 mx-1 w-56 bg-gray-800 text-sm rounded text-gray-100" placeholder="search user ...">
          </div>
        </div>
        <transition-group name="users" tag="ul" class="rounded-md mt-3 overflow-hidden flex flex-col table-user">
          <li
            v-for="(user, i) in users"
            :key="user.email"
            class="h-14 flex p-2 my-2 hover:mb-3 from-gray-800 duration-500 cursor-pointer bg-gradient-to-b group transition-all hover:h-20"
          >
            <nuxt-link class="flex justify-between w-full" :to="`/manage-users/${user.username}`">
              <div class="flex">
                <img
                  class="w-9 h-9 group-hover:w-16 duration-500 group-hover:h-16 transition-all ml-1 mr-3 object-cover rounded-full ring-1 ring-blue-600 ring-offset-gray-900 ring-offset-2"
                  :src="user.profile"
                />
                <div class="flex flex-col justify-center">
                  <span class="text-lg leading-5">{{user.name}}</span>
                  <span class="text-sm text-blue-200">{{user.username}}</span>
                </div>
              </div>
              <div class="flex flex-col text-center sm:text-right justify-center">
                <p class="text-gray-400 text-sm">{{user.email}}</p>
                <p class="text-blue-200 text-sm">{{user.phone}}</p>
              </div>
              <div class="flex items-center sm:hidden">
                <div class="flex flex-col text-center">
                  <p class="text-gray-400 text-xs">last seen: {{user.lastSeen}}</p>
                  <p class="text-gray-400 text-xs">last seen: {{user.lastSeen}}</p>
                </div>
                <span class="flex sm:hidden ml-3 group-hover:ml-5 transition-all h-full">
                  <svg
                    class="fill-current cursor-pointer text-blue-600 w-3 transform -rotate-90 group-hover:scale-110 duration-500 group-hover:rotate-0 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
                    />
                  </svg>
                </span>
              </div>
            </nuxt-link>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
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
    search:{
      input: '',
      template: ''
    }
  }),
  methods:{
    searchUser(){
      if(this.search.input){
        this.search.template || (this.search.template = this.users);
        this.users = this.search.template.filter(e=> (e.name.includes(this.search.input) || e.username.includes(this.search.input) || e.email.includes(this.search.input) || e.phone.includes(this.search.input)))
      }else{
        this.users = this.search.template;
        this.search.template = ''
      }
    }
  },
};
</script>

<style lang="scss">
.table-user:hover > li {
  opacity: 0.7;
}
.table-user > li:hover ~ li {
  opacity: 0.4;
}
.table-user > li:hover {
  opacity: 1;
}


.users-enter-active, .users-leave-active {
  transition: 500ms;
}
.users-enter, .users-leave-to {
  opacity: 0;
  @apply h-0 overflow-hidden my-0 p-0;
}
</style>
