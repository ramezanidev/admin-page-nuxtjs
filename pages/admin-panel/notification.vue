<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div class="w-full relative mt-12 mx-4" style="max-width: 980px;">
      <div
        class="bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow h-16"></div>
      <section>
        <h2 class="text-white text-lg mb-1 mt-6 font-bold">Notification Panel:</h2>
        <div
          class="bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow">

          <transition name="sendToList">
            <div v-if="err"
                 class="bg-red-500 border-t border-red-700 bg-opacity-30 mb-4 py-1.5 rounded text-red-100 font-bold px-2">
              {{ err }}
            </div>
          </transition>

          <div>
            <div class="flex sm:flex-col">
              <div class="mr-3 sm:mr-0 sm:mb-8">
                <div class="sm:w-full sm:flex">
                  <input @keydown.enter="addUser" placeholder="Enter userName..." v-model.trim="notification.to.input"
                         type="text" class="bg-gray-700 flex-auto rounded text-white px-3 py-1 sm:flex-auto">
                  <button @click="addUser"
                          class="rounded text-green-100 ml-2 py-1 px-3 bg-green-600 active:bg-green-700">Add
                  </button>
                </div>
                <transition name="sendToList">
                  <transition-group tag="div" name="sendToList" class="p-2 rounded mt-2 bg-gray-800"
                                    v-if="notification.to.list.length">
                    <p class="text-gray-300 flex justify-between my-1 h-6" v-for="user in notification.to.list"
                       :key="user">
                      <span>{{ user }}</span>
                      <span class="w-3 flex cursor-pointer"
                            @click="notification.to.list = notification.to.list.filter(users => (users !== user))">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-current text-red-500"
                       viewBox="0 0 320 512"><path
                    d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
                </span>
                    </p>
                  </transition-group>
                </transition>
              </div>
              <div class="flex-auto">
                <input
                  class="w-full bg-gray-800 p-2 rounded border-t border-blue-600 border-opacity-60 text-white mb-2"
                  placeholder="Title ..."
                  v-model="notification.title"
                  dir="auto">
                <textarea
                  placeholder="Massage body ..."
                  v-model="notification.body"
                  class="w-full bg-gray-700 p-2 rounded border-t border-blue-600 border-opacity-60 text-white m-0 h-40"
                  dir="auto"
                  @input="$event.target.nextElementSibling.children[1].textContent = $event.target.value.length"></textarea>
                <div class="flex justify-between text-green-300 text-xs p-0 mt-1 mb-2">
                  <span>letters:</span>
                  <span>0</span>
                </div>
                <p class="text-sm text-white mb-1">Notification Type:</p>
                <div class="mb-2" @click="notificationType">
                  <button
                    class="inline-block text-sm bg-blue-600 text-blue-100 font-bold py-1 px-2 select-none cursor-pointer rounded-full shadow hover:bg-blue-700 opacity-50 opacity-100">
                    Info
                  </button>

                  <button
                    class="inline-block text-sm bg-green-600 text-green-100 font-bold py-1 px-2 rounded-full shadow hover:bg-green-700 select-none cursor-pointer opacity-50">
                    Success
                  </button>

                  <button
                    class="inline-block text-sm bg-yellow-600 text-yellow-100 font-bold py-1 px-2 rounded-full shadow hover:bg-yellow-700 select-none cursor-pointer opacity-50">
                    Warning
                  </button>

                  <button
                    class="inline-block text-sm bg-red-600 text-red-100 font-bold py-1 px-2 rounded-full shadow hover:bg-red-700 select-none cursor-pointer opacity-50">
                    Error
                  </button>
                </div>
                <button
                  @click="sendNotification"
                  class="w-full bg-green-700 text-white font-bold py-2 px-3 border border-green-500 rounded active:bg-green-600">
                  Send Notification
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    notification: {
      title: '',
      body: '',
      type: 'info',
      to: {
        input: '',
        list: [],
      }
    },
    err: ''
  }),
  methods: {
    notificationType(event) {
      const type = event.target;
      const parent = event.currentTarget;
      if (type !== parent) {
        this.notification.type = type.textContent.toLowerCase().trim();
        parent.querySelector('.opacity-100').classList.remove('opacity-100');
        type.classList.add('opacity-100');
      }
    },
    sendNotification() {
      if (this.notification.body.length && this.notification.title.length && this.notification.to.list.length) {
        this.err = '';
        console.table(this.notification);
        this.$router.go(-1)
      } else {
        this.err = 'Fill in all the fields';
      }
    },
    addUser() {
      if (this.notification.to.input.length && !(this.notification.to.list.includes(this.notification.to.input))) {
        this.notification.to.list.unshift(this.notification.to.input);
        this.notification.to.input = "";
      }
    }
  },
  created() {
    if (this.$route.query.user) {
      this.notification.to.list.unshift(this.$route.query.user)
    }
  },
}
</script>

<style scoped>
.sendToList-enter-active, .sendToList-leave-active {
  transition: opacity .5s;
}

.sendToList-enter, .sendToList-leave-to {
  opacity: 0;
}
</style>
