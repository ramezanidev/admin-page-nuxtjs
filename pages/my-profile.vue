<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div
      class="w-full relative mt-48 mx-4"
      style="max-width: 950px; min-height: 250px"
    >
      <div
        class="w-64 h-64 group absolute top-0 left-0 transform -translate-y-1/2 rounded-full overflow-hidden ring-offset-4 cursor-pointer ring-offset-gray-900 ring-2 ring-blue-600"
      >
        <img
          class="w-full h-full object-cover rounded-full transition-all transform group-hover:scale-105"
          src="http://picsum.photos/500/500?image"
        />
        <span
          class="absolute bg-black bg-opacity-60 h-16 transition-all -bottom-16 group-hover:bottom-0 inset-x-0 flex justify-center"
        >
          <svg
            class="w-7 fill-current text-blue-600 hover:text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M324.3 64c3.3 0 6.3 2.1 7.5 5.2l22.1 58.8H464c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h110.2l20.1-53.6c2.3-6.2 8.3-10.4 15-10.4h131m0-32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"
            />
          </svg>
        </span>
      </div>
      <div class="p-3 rounded shadow bg-gradient-to-r from-gray-800 via-gray-900 mb-12 ml-72">
        <div class="pl-10 text-white">
          <span class="font-bold text-4xl">Reza</span>
          <span class="text-sm text-gray-300 mx-2.5">ramezani</span>
        </div>
      </div>
      <div class="items-center flex justify-around pl-44">
        <div class="flex flex-col items-center" v-for="i in 3" :key="i">
          <span class="text-sm text-gray-400">My Posts</span>
          <span class="font-bold text-blue-100 mt-1.5 text-xl">4646</span>
        </div>
      </div>


      <div class="text-blue-100 bg-gradient-to-b via-gray-800 from-gray-800 p-3 mt-6 rounded-t">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam doloremque aperiam temporibus quidem totam eaque aliquam non, aut odio optio labore praesentium. Quo consequuntur blanditiis modi voluptatum possimus mollitia?
      </div>


    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>