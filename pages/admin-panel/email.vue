<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div class="w-full relative mt-12 mx-4" style="max-width: 1150px;">
      <div
        class="bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow h-16">

      </div>
      <section>
        <h2 class="text-white text-lg mb-1 mt-6 font-bold">Email Panel:</h2>
        <div
          class="bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow">
          <div class="flex w-full sm:flex-col">
            <div class="sm:mb-4 sm:flex-col flex">
              <span class="w-24 text-white font-bold">to :</span>
              <div>
                <div class="flex">
                  <input @keydown.enter="addEmail" placeholder="Enter Email..." v-model.trim="email.to.input"
                         type="text" class="bg-gray-700 flex-auto rounded text-white px-3 py-1">
                  <button @click="addEmail"
                          class="bg-green-600 rounded text-green-100 ml-2 py-1 px-3 active:bg-green-700">Add
                  </button>
                </div>
                <transition name="sendToList">
                  <transition-group tag="div" name="sendToList" class="p-2 rounded mt-2 bg-gray-800"
                                    v-if="email.to.list.length">
                    <p class="text-gray-300 flex justify-between my-1 h-6" v-for="email in email.to.list" :key="email">
                      <span>{{ email }}</span>
                      <span class="w-3 flex cursor-pointer"
                            @click="email.to.list = email.to.list.filter(number => (number !== email))">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-current text-red-500"
                       viewBox="0 0 320 512"><path
                    d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
                </span>
                    </p>
                  </transition-group>
                </transition>
              </div>
            </div>
            <div class="flex-auto flex ml-4 sm:ml-0 sm:flex-col h-96">
              <span class="w-24 text-white flex font-bold">massage :</span>
              <div class="flex flex-col flex-auto">
                <input
                  class="w-full bg-gray-800 p-2 rounded border-t border-blue-600 border-opacity-60 text-white mb-2"
                  placeholder="Title ..."
                  dir="auto">
                <textarea
                  placeholder="Body ..."
                  class="w-full bg-gray-700 p-2 rounded border-t border-blue-600 border-opacity-60 text-white flex-auto m-0"
                  dir="auto"
                  @input="$event.target.nextElementSibling.children[1].textContent = $event.target.value.length"></textarea>
                <div class="flex justify-between text-green-300 text-xs p-0 my-1">
                  <span>letters:</span>
                  <span>0</span>
                </div>
                <label
                  class="flex px-2 py-3 rounded border-t border-blue-600 border-opacity-60 mb-4 cursor-pointer bg-gray-800 active:bg-gray-900">
                  <input type="file" class="hidden" @change="selectFile">
                  <span class="text-sm text-blue-100">Select a file</span>
                </label>
                <button
                  class="w-full bg-green-700 text-white font-bold py-1 px-3 border border-green-500 rounded active:bg-green-600">
                  Send Email
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
    email: {
      to: {
        input: '',
        list: []
      }
    }
  }),
  created() {
    if (this.$route.query.email && /^[a-z\d-]+@\w{3,7}\.\w{2,5}$/i.test(this.$route.query.email)) {
      this.email.to.list.unshift(this.$route.query.email)
    }
  },
  methods: {
    addEmail() {
      if (this.email.to.input.length && /^[a-z\d-]+@\w{3,7}\.\w{2,5}$/i.test(this.email.to.input) && !this.email.to.list.includes(this.email.to.input)) {
        this.email.to.list.unshift(this.email.to.input);
        this.email.to.input = "";
      }
    },
    selectFile(event) {
      const el = event.currentTarget;
      el.nextElementSibling.textContent = (el.files[0] && el.files[0].name) || 'Select a file';
      if (el.files[0]){
        el.parentElement.classList.add('border-green-700');
      }else {
        el.parentElement.classList.remove('border-green-700');
      }
    }
  }
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
