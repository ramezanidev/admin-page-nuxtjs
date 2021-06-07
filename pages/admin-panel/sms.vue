<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div class="w-full relative mt-12 mx-4" style="max-width: 1150px;">
      <div
        class="bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow h-16">

      </div>
      <section>
        <h2 class="text-white text-lg mb-1 mt-6 font-bold">SMS Panel:</h2>
        <div
          class="bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow">
          <div class="flex w-full sm:flex-col">
            <div class="sm:mb-4 sm:flex-col">
              <span class="w-24 text-white font-bold">to :</span>
              <div>
                <div class="flex">
                  <input @keydown.enter="addPhone" placeholder="Enter Phone Number..." v-model.trim="sms.to.input"
                         type="text" class="bg-gray-700 flex-auto rounded text-white px-3 py-1">
                  <button @click="addPhone"
                          class="bg-green-600 rounded text-green-100 ml-2 py-1 px-3 active:bg-green-700">
                    Add
                  </button>
                </div>
                <transition name="sendToList">
                  <transition-group tag="div" name="sendToList" class="p-2 rounded mt-2 bg-gray-800"
                                    v-if="sms.to.list.length">
                    <p class="text-gray-300 flex justify-between my-1 h-6" v-for="phone in sms.to.list" :key="phone">
                      <span>{{ phone }}</span>
                      <span class="w-3 flex cursor-pointer"
                            @click="sms.to.list = sms.to.list.filter(number => (number !== phone))">
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
                <textarea
                  class="w-full bg-gray-700 p-2 rounded border-t border-blue-600 border-opacity-60 text-white flex-auto m-0"
                  dir="auto"
                  @input="$event.target.nextElementSibling.children[1].textContent = $event.target.value.length"></textarea>
                <div class="flex justify-between text-green-300 text-xs p-0 my-1">
                  <span>letters:</span>
                  <span>0</span>
                </div>
                <button
                  class="w-full bg-green-700 text-white font-bold py-1 px-3 border border-green-500 rounded active:bg-green-600">
                  Send Massage
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
    sms: {
      to: {
        input: '',
        list: []
      }
    }
  }),
  created() {
    if (this.$route.query.phone && /^(09|\+989|989|9)\d{9}$/.test(this.$route.query.phone)) {
      this.sms.to.list.unshift(this.$route.query.phone)
    }
  },
  methods: {
    addPhone() {
      if (this.sms.to.input.length && /^(09|\+989|989|9)\d{9}$/.test(this.sms.to.input) && !this.sms.to.list.includes(this.sms.to.input)) {
        this.sms.to.list.unshift(this.sms.to.input);
        this.sms.to.input = "";
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
