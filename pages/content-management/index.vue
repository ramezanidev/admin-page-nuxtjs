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
        class="bg-gradient-to-b mt-5 from-gray-900 via-gray-900 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow">


        <div class="tab">
          <Tab :tabs="tabs"/>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        title: "courses",
        children: [
          {
            title: "ejs",
            children: [
              {
                title: "es"
              },
              {
                title: "ts"
              }
            ]
          },
          {
            title: "js"
          }
        ]
      }
    ]
  }),
  watchQuery: ['page'],
  async asyncData({query, data}) {
    const mountains = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('foo');
      }, 1);
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
      }, {
        course: 'js',
      }, {
        course: 'ts',
      }, {
        course: 'es',
      }, {
        course: 'ejs',
      }, {
        course: 'jsx',
      }, {
        course: 'js',
      }, {
        course: 'ts',
      }
    ];
    let num = 10
    return {mountains, num, courses}
  },
  computed: {
    page: {
      get() {
        return this.$route.query.page || '0'
      },
      set(page) {
        this.$router.push({path: this.$route.path, query: {page: page.toString()}})
      }
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

.tab {
  ul {
    background-color: rgba(255, 255, 255, 0.02);
    @apply pl-8;
    li {
      ul{
        display: none;
        svg{
          transform: rotate(0deg);
        }
      }
      @apply p-2 pr-0 my-0.5 mr-0;
      span {
        @apply text-white flex cursor-pointer select-none;
      }
    }

    li.open{
      & > ul{
        display: block;
        svg{
          @apply mr-4 ml-1;
          transform: rotate(90deg);
        }
      }
    }
  }
  & > ul {
    @apply pl-0
  }
}
</style>
