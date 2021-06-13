<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div class="w-full relative mt-12 mx-4" style="max-width: 1150px;">

      <!--   header links   -->
      <div
        class="flex bg-gradient-to-b from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow h-16">

        <nuxt-link title="new" to="/content-management/new"
                   class="h-12 w-12 flex relative rounded-full mx-1 bg-green-600 bg-opacity-20 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
               class="w-6 h-6 fill-current text-green-300 m-auto">
            <path
              d="M432 256C432 264.8 424.8 272 416 272h-176V448c0 8.844-7.156 16.01-16 16.01S208 456.8 208 448V272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h176V64c0-8.844 7.156-15.99 16-15.99S240 55.16 240 64v176H416C424.8 240 432 247.2 432 256z"/>
          </svg>
        </nuxt-link>

        <nuxt-link title="edit" to="/content-management/edit"
                   class="h-12 w-12 flex relative rounded-full mx-1 bg-green-600 bg-opacity-20 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
               class="w-6 h-6 fill-current text-green-300 m-auto">
            <path
              d="M493.2 56.26l-37.51-37.51C443.2 6.252 426.8 0 410.5 0c-16.38 0-32.76 6.25-45.26 18.75L31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373L493.3 146.7C518.3 121.7 518.2 81.26 493.2 56.26zM112 317.2l203.3-203.3l82.76 82.76L194.7 400H112V317.2zM139.8 454.9l-103.4 20.69l20.68-103.4L80 349.2V432h82.74L139.8 454.9zM470.7 124l-49.1 50l-82.76-82.76l49.91-49.91C393.9 35.33 401.9 32 410.5 32s16.58 3.328 22.62 9.373L470.6 78.89C483.1 91.36 483.1 111.6 470.7 124z"/>
          </svg>
        </nuxt-link>


      </div>


      <div
        class="bg-gradient-to-b mt-5 from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow pb-40">
        <div class="flex justify-between w-full">
          <h1 class="text-white text-xl">Courses</h1>
          <div>
            <div class="h-6 flex">
              <span
                class="h-full rounded-l bg-red-600 text-red-100 px-1 pt-0.5 cursor-pointer w-4 select-none font-bold"
                :class="{'opacity-50' : num === 5}" @click="num<=5 ? null : num-=5">-</span>
              <span class="bg-gray-700 py-1 px-2 text-sm text-white w-10 h-full text-center"
                    @wheel="$event.deltaY < 0 ? (num>=100 ? null : num+=5) : (num<=5 ? null : num-=5)">{{ num }}</span>
              <span
                class="h-full rounded-r bg-green-600 text-green-100 px-1 pt-0.5 cursor-pointer w-4 select-none font-bold"
                :class="{'opacity-50' : num === 100}" @click="num>=100 ? null : num+=5">+</span>
            </div>
          </div>
        </div>
        <div class="w-full bg-gray-800 shadow-md bg-opacity-75 rounded p-1.5 my-5">
          <ul class="lists sm:shadow-inner">
            <div
              class="px-1 grid grid-cols-5 text-blue-300 border-b border-blue-600 pb-1.5 select-none cursor-default border-opacity-60">
              <span>course</span>
              <span>Date</span>
              <span>Price</span>
              <span>Status</span>
            </div>
            <li v-for="(i, index) in courses" :key="index"
                class="px-1 grid items-center text-sm text-white font-bold grid-cols-5 text-gray-300 border-b border-gray-600 py-1.5 select-none cursor-default border-opacity-40">
              <span>{{ i.course }}</span>
              <span>2020/01/13-13:17</span>
              <span>200,000</span>
              <span>use</span>
              <nuxt-link title="edit" :to="`/content-management/edit/${i}`"
                         class="h-8 w-8 flex justify-self-end relative rounded-full mx-1 bg-green-600 bg-opacity-20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                     class="w-4 h-4 fill-current text-green-300 m-auto">
                  <path
                    d="M493.2 56.26l-37.51-37.51C443.2 6.252 426.8 0 410.5 0c-16.38 0-32.76 6.25-45.26 18.75L31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373L493.3 146.7C518.3 121.7 518.2 81.26 493.2 56.26zM112 317.2l203.3-203.3l82.76 82.76L194.7 400H112V317.2zM139.8 454.9l-103.4 20.69l20.68-103.4L80 349.2V432h82.74L139.8 454.9zM470.7 124l-49.1 50l-82.76-82.76l49.91-49.91C393.9 35.33 401.9 32 410.5 32s16.58 3.328 22.62 9.373L470.6 78.89C483.1 91.36 483.1 111.6 470.7 124z"/>
                </svg>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!--page-->
        <div class="w-full flex justify-center">
          <span
            class="flex justify-center items-center w-8 h-8 rounded shadow text-gray-100 bg-gray-700 select-none cursor-pointer active:bg-gray-800 "
            :class="{'opacity-50' : page === 1}"
            @click="page--">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-3 h-3.5" viewBox="0 0 256 512">
              <path
                d="M203.9 405.3c5.877 6.594 5.361 16.69-1.188 22.62c-6.562 5.906-16.69 5.375-22.59-1.188L36.1 266.7c-5.469-6.125-5.469-15.31 0-21.44l144-159.1c5.906-6.562 16.03-7.094 22.59-1.188c6.918 6.271 6.783 16.39 1.188 22.62L69.53 256L203.9 405.3z"/></svg>
          </span>


          <div class="flex mx-1">
            <span v-for="(i, index) in range"
                  :key="`${index}`"
                  class="flex mx-0.5 justify-center items-center w-8 h-8 rounded shadow text-blue-100 bg-blue-800 select-none cursor-pointer active:bg-blue-900 opacity-50"
                  :class="{'opacity-100' : i === page}" @click="page = i">{{ i }}</span>
          </div>


          <span
            class="flex justify-center items-center w-8 h-8 rounded shadow text-gray-100 bg-gray-700 select-none cursor-pointer active:bg-gray-800 "
            @click="page++">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-3.5 w-3" viewBox="0 0 256 512">
              <path
                d="M219.9 266.7L75.89 426.7c-5.906 6.562-16.03 7.094-22.59 1.188c-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256L52.11 106.7C46.23 100.1 46.75 90.04 53.29 84.1C59.86 78.2 69.98 78.73 75.89 85.29l144 159.1C225.4 251.4 225.4 260.6 219.9 266.7z"/></svg>
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),


  watch: {
    page: 'changePage'
  },


  async asyncData({query, data}) {
    const mountains = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('foo');
      }, 1000);
    }).then(e => e)
    let courses = [
      {
        course: 'js',
      }, {
        course: 'ts',
      }, {
        course: 'es',
      }, {
        course: 'ejs',
      }, {
        course: 'jsx',
      }
    ];
    let num = 5
    return {mountains, num, courses}
  },


  computed: {
    page: {
      get() {
        return +(this.$route.query.page || '1')
      },
      set(page) {
        page = page < 1 ? 1 : page;
        this.$router.push({path: this.$route.path, query: {page: page.toString()}})
      }
    },

    range() {
      const start = (this.page - 3) <= 0 ? 1 : this.page - 3;
      const end = this.page + 4;
      return Array(Math.ceil(end - start)).fill(start).map((x, y) => x + y);
    }
  },

  methods: {
    async changePage() {
      const mountains = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('foo');
        }, 10000);
      }).then(e => e)
    }
  }
}
</script>

<style lang="scss">
.lists > li {
  transition: .2s all ease-in-out;
}

.lists > li:hover {
  margin-bottom: 10px;
}

.lists > li:last-of-type {
  border-bottom: none !important;
}

@media (max-width: 868px) {
  .lists {
    overflow-x: scroll;

    & > * {
      min-width: 1000px;
    }
  }
}

.flip-list-move {
  transition: transform 1s;
}
</style>
