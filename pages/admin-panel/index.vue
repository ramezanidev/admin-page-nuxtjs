<template>
  <div class="overflow-y-scroll scrollbar flex justify-center">
    <div class="w-full relative mt-12 mx-4" style="max-width: 1150px;">

      <section>
        <div
          class="bg-gradient-to-b flex from-gray-900 via-gray-900 border-t-2 border-blue-600 border-opacity-25 rounded shadow p-2">

          <nuxt-link to="/admin-panel/comments/new"
                     class="h-12 w-12 flex relative rounded-full mx-1 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all">
            <span class="absolute top-2.5 right-2.5 block w-1.5 h-1.5 bg-opacity-70 rounded-full bg-red-600">
              <span class="block w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-blue-300 m-auto"
                 viewBox="0 0 576 512">
              <path
                d="M569.9 441.1c-.5-.4-22.6-24.2-37.9-54.9 27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.4 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.1 2.1 18.4 3.7 28 4.8 31.5 57.5 105.5 98 191.8 98 20.8 0 40.8-2.4 59.8-6.8 28.5 18.5 71.6 38.8 125.2 38.8 9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25zM155.4 314l-13.2-3-11.4 7.4c-20.1 13.1-50.5 28.2-87.7 32.5 8.8-11.3 20.2-27.6 29.5-46.4L83 283.7l-16.5-16.3C50.7 251.9 32 226.2 32 192c0-70.6 79-128 176-128s176 57.4 176 128-79 128-176 128c-17.7 0-35.4-2-52.6-6zm289.8 100.4l-11.4-7.4-13.2 3.1c-17.2 4-34.9 6-52.6 6-65.1 0-122-25.9-152.4-64.3C326.9 348.6 416 278.4 416 192c0-9.5-1.3-18.7-3.3-27.7C488.1 178.8 544 228.7 544 288c0 34.2-18.7 59.9-34.5 75.4L493 379.7l10.3 20.7c9.4 18.9 20.8 35.2 29.5 46.4-37.1-4.2-67.5-19.4-87.6-32.4z"/>
            </svg>
          </nuxt-link>

          <nuxt-link to="/admin-panel/notification"
                     class="h-12 w-12 flex relative rounded-full mx-1 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all">
            <span class="absolute top-2.5 right-2.5 block w-1.5 h-1.5 bg-opacity-70 rounded-full bg-red-600">
              <span class="block w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                 class="w-6 h-6 fill-current text-blue-300 m-auto">
              <path
                d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"/>
            </svg>
          </nuxt-link>

          <nuxt-link to="/admin-panel/email"
                     class="h-12 w-12 flex relative rounded-full mx-1 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all">
            <span class="absolute top-2.5 right-2.5 block w-1.5 h-1.5 bg-opacity-70 rounded-full bg-red-600">
              <span class="block w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 class="w-6 h-6 fill-current text-blue-300 m-auto">
              <path
                d="M352 248v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8zm-184-56h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm326.59-27.48c-1.98-1.63-22.19-17.91-46.59-37.53V96c0-17.67-14.33-32-32-32h-46.47c-4.13-3.31-7.71-6.16-10.2-8.14C337.23 38.19 299.44 0 256 0c-43.21 0-80.64 37.72-103.34 55.86-2.53 2.01-6.1 4.87-10.2 8.14H96c-17.67 0-32 14.33-32 32v30.98c-24.52 19.71-44.75 36.01-46.48 37.43A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM256 32c21.77 0 44.64 16.72 63.14 32H192.9c18.53-15.27 41.42-32 63.1-32zM96 96h320v173.35c-32.33 26-65.3 52.44-86.59 69.34-16.85 13.43-50.19 45.68-73.41 45.31-23.21.38-56.56-31.88-73.41-45.32-21.29-16.9-54.24-43.33-86.59-69.34V96zM32 201.48c0-4.8 2.13-9.31 5.84-12.36 1.24-1.02 11.62-9.38 26.16-21.08v75.55c-11.53-9.28-22.51-18.13-32-25.78v-16.33zM480 464c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V258.91c42.75 34.44 99.31 79.92 130.68 104.82 20.49 16.36 56.74 52.53 93.32 52.26 36.45.26 72.27-35.46 93.31-52.26C380.72 338.8 437.24 293.34 480 258.9V464zm0-246.19c-9.62 7.75-20.27 16.34-32 25.79v-75.54c14.44 11.62 24.8 19.97 26.2 21.12 3.69 3.05 5.8 7.54 5.8 12.33v16.3z"/>
            </svg>
          </nuxt-link>

          <nuxt-link to="/admin-panel/sms"
                     class="h-12 w-12 flex relative rounded-full mx-1 bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all">
            <span class="absolute top-2.5 right-2.5 block w-1.5 h-1.5 bg-opacity-70 rounded-full bg-red-600">
              <span class="block w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current text-blue-300 m-auto">
              <path
                d="M304 176h-16c-6.1 0-11.6 3.4-14.3 8.8L256 220.2l-17.7-35.4c-2.7-5.4-8.2-8.8-14.3-8.8h-16c-8.8 0-16 7.2-16 16v104c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-68.2l24.8 55.8c2.9 5.9 11.4 5.9 14.3 0l24.8-55.8V296c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V192c.1-8.8-7.1-16-15.9-16zm-168.6 42.5c-1.4-1.2-2.1-2.5-2.1-3.8 0-3.1 4.5-6.6 10.4-6.6H156c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-12.2c-23.4 0-42.4 17.3-42.4 38.6 0 10.7 4.9 20.9 13.3 28.1l21.9 18.8c1.4 1.2 2.1 2.5 2.1 3.8 0 3.1-4.5 6.6-10.4 6.6H116c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h12.3c23.4 0 42.4-17.3 42.4-38.6 0-10.7-4.9-20.9-13.3-28.1l-22-18.8zm240 0c-1.4-1.2-2.1-2.5-2.1-3.8 0-3.1 4.5-6.6 10.4-6.6H396c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-12.3c-23.4 0-42.4 17.3-42.4 38.6 0 10.7 4.9 20.9 13.3 28.1l21.9 18.8c1.4 1.2 2.1 2.5 2.1 3.8 0 3.1-4.5 6.6-10.4 6.6H356c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h12.3c23.4 0 42.4-17.3 42.4-38.6 0-10.7-4.9-20.9-13.3-28.1l-22-18.8zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.4 313.7 32.1 277.6 32.1 240c0-97 100.5-176 224-176s224 79 224 176S379.5 416 256 416z"/>
            </svg>
          </nuxt-link>

        </div>
      </section>


      <section class="grid grid-cols-12 gap-2 sm:grid-cols-1 sm:grid-rows-2 mt-4">

        <div class="grid grid-cols-2 grid-rows-2 gap-2 text-white col-start-1 col-end-5 sm:col-end-2 h-64">
          <div
            class="flex-col justify-between relative flex bg-gradient-to-t from-gray-900 via-gray-900 bg-red-900 bg-opacity-20 border-t border-red-600 border-opacity-50 rounded shadow p-2">
            <span class="text-blue-200 text-lg mt-2">Users:</span>
            <div>
              <span class="font-bold">100,354</span>
              <span class="text-red-500 text-xs">-52</span>
            </div>
            <svg class="fill-current text-blue-600 w-5 h-5 absolute bottom-3.5 right-3.5"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
              />
            </svg>
          </div>

          <div
            class="flex-col justify-between relative flex bg-gradient-to-t from-gray-900 via-gray-900 bg-green-900 bg-opacity-20 border-t border-green-600 border-opacity-50 rounded shadow p-2">
            <span class="text-blue-200 text-lg mt-2">Visits:</span>
            <div>
              <span class="font-bold">14,542,456</span>
              <span class="text-green-500 text-xs">+502</span>
            </div>
            <svg class="fill-current text-blue-600 w-5 h-5 absolute bottom-3.5 right-3.5"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"/>
            </svg>
          </div>


          <div
            class="flex-col justify-between relative flex bg-gradient-to-t from-gray-900 via-gray-900 bg-green-900 bg-opacity-20 border-t border-green-600 border-opacity-50 rounded shadow p-2">
            <span class="text-blue-200 text-lg mt-2">Course:</span>
            <div>
              <span class="font-bold">104</span>
              <span class="text-green-500 text-xs">+0</span>
            </div>
            <svg class="fill-current text-blue-600 w-5 h-5 absolute bottom-3.5 right-3.5"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v296zm96-32c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"/>
            </svg>
          </div>


          <div
            class="flex-col justify-between relative flex bg-gradient-to-t from-gray-900 via-gray-900 bg-green-900 bg-opacity-20 border-t border-green-600 border-opacity-50 rounded shadow p-2">
            <span class="text-blue-200 text-lg mt-2">Article:</span>
            <div>
              <span class="font-bold">1,024</span>
              <span class="text-green-500 text-xs">+8</span>
            </div>
            <svg class="fill-current text-blue-600 w-5 h-5 absolute bottom-3.5 right-3.5"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"/>
            </svg>
          </div>


        </div>
        <div
          class="bg-gradient-to-b from-gray-900 via-gray-900 bg-blue-900 bg-opacity-0 hover:bg-opacity-20 transition-all duration-500 p-2.5 border-t border-blue-600 border-opacity-25 col-start-5 col-end-13 rounded shadow sm:col-start-1 sm:col-end-2 h-64">
          <chart-js :chartData="chart.a"/>
        </div>
      </section>


      <h2 class="text-white text-lg mb-1 mt-6 font-bold">Visits:</h2>
      <section class="grid grid-cols-12 sm:grid-cols-1 sm:grid-rows-2 gap-2">
        <div
          class="bg-gradient-to-b from-gray-900 via-gray-900 bg-green-900 bg-opacity-0 hover:bg-opacity-20 transition-all duration-500 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow col-start-1 col-end-10 sm:col-end-2 h-96">
          <chart-js :chartData="chart.b"/>
        </div>
        <div
          class="bg-gradient-to-b from-gray-900 via-gray-900 bg-green-900 bg-opacity-0 hover:bg-opacity-20 transition-all duration-500 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow col-start-10 col-end-13 sm:col-start-1 sm:col-end-2 h-96">
          <div class="grid w-full text-white text-sm">
            <div class="grid grid-cols-8 py-1.5">
              <span class="col-end-6 col-start-1 text-gray-300 flex">
              <svg class="fill-current text-blue-600 w-4 h-4 mr-1.5"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
              <span>Online Users:</span>
            </span>
              <span class="col-start-6 col-end-9">{{ '1,207' }}</span>
            </div>
            <div class="grid grid-cols-8 py-1.5">
              <span class="col-end-6 col-start-1 text-gray-300 flex">
              <svg class="fill-current text-blue-600 w-4 h-4 mr-1.5"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
              <span>Total Users:</span>
            </span>
              <span class="col-start-6 col-end-9">{{ '12,987' }}</span>
            </div>
            <div class="grid grid-cols-8 py-1.5">
              <span class="col-end-6 col-start-1 text-gray-300 flex">
              <svg class="fill-current text-blue-600 w-4 h-4 mr-1.5"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
              <span>Admins:</span>
            </span>
              <span class="col-start-6 col-end-9">{{ '15' }}</span>
            </div>
            <hr class="my-2 border-blue-600 border-opacity-40">
            <div class="grid grid-cols-8 py-1.5">
              <span class="col-end-6 col-start-1 text-gray-300 flex">
              <svg class="fill-current text-blue-600 w-4 h-4 mr-1.5"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
              <span>Admins:</span>
            </span>
              <span class="col-start-6 col-end-9">{{ '15' }}</span>
            </div>
            <hr class="my-2 border-blue-600 border-opacity-40">
            <div class="grid grid-cols-8 py-1.5">
              <span class="col-end-6 col-start-1 text-gray-300 flex">
              <svg class="fill-current text-blue-600 w-4 h-4 mr-1.5"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
              <span>Admins:</span>
            </span>
              <span class="col-start-6 col-end-9">{{ '15' }}</span>
            </div>
          </div>
          <chart-js :chartData="chart"/>
        </div>
      </section>


      <section class="mt-4">
        <div
          class="bg-gradient-to-b from-gray-900 h-auto p-2 rounded shadow mt-2 border-t border-blue-600 border-opacity-20">
          <span class="text-white p-2 cursor-pointer flex justify-between w-full"
                @click="$event.target.parentElement.classList.toggle('drop-down')">
            <span>new Users</span>
            <svg
              class="fill-current cursor-pointer text-blue-600 w-3 transform -rotate-90 group-hover:scale-110 duration-500 group-hover:rotate-0 transition-all"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path
              d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"/></svg>
          </span>
          <transition-group name="users" tag="ul" style="background-color: #0c111c"
                            class="text-white p-0 mt-1 rounded overflow-hidden h-0 transition-all duration-300">
            <li
              v-for="(user, i) in users"
              :key="user.email"
              class="h-14 flex p-2 my-2 hover:mb-3 from-gray-800 duration-500 cursor-pointer bg-gradient-to-b group transition-all hover:h-20"
            >
              <nuxt-link class="flex justify-between w-full" :to="`/manage-users/${user.username}`">
                <div class="flex">
                  <img
                    class="w-9 h-9 group-hover:w-16 duration-500 group-hover:h-16 transition-all ml-1 mr-3 object-cover rounded-full ring-1 ring-blue-600 ring-offset-gray-900 ring-offset-2"
                    :src="user.profile"/>
                  <div class="flex flex-col justify-center">
                    <span class="text-lg leading-5">{{ user.name }}</span>
                    <span class="text-sm text-blue-200">{{ user.username }}</span>
                  </div>
                </div>
                <div class="flex flex-col text-center sm:text-right justify-center">
                  <p class="text-gray-400 text-sm">{{ user.email }}</p>
                  <p class="text-blue-200 text-sm">{{ user.phone }}</p>
                </div>
                <div class="flex items-center sm:hidden">
                  <div class="flex flex-col text-center">
                    <p class="text-gray-400 text-xs">last seen: {{ user.lastSeen }}</p>
                    <p class="text-gray-400 text-xs">last seen: {{ user.lastSeen }}</p>
                  </div>
                  <span class="flex sm:hidden ml-3 group-hover:ml-5 transition-all h-full">
                  <svg
                    class="fill-current cursor-pointer text-blue-600 w-3 transform -rotate-90 group-hover:scale-110 duration-500 group-hover:rotate-0 transition-all"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path
                      d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"/>
                  </svg>
                </span>
                </div>
              </nuxt-link>
            </li>
          </transition-group>
        </div>
      </section>


      <section class="mt-4">
        <h2 class="text-white text-lg mb-1 mt-2 font-bold">Server Information:</h2>
        <div
          class="grid grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 gap-2 bg-gradient-to-b from-gray-900 via-gray-900 bg-green-900 bg-opacity-0 hover:bg-opacity-20 transition-all duration-500 p-2.5 border-t border-blue-600 border-opacity-25 rounded shadow">
          <div class="h-52 p-2">
            <chart-js :chartData="chart.d"/>
          </div>
          <div class="h-52 p-2">
            <chart-js :chartData="chart.e"/>
          </div>
          <div class="h-52 p-2">
            <chart-js :chartData="chart.f"/>
          </div>
          <div class="h-52 p-2">
            <chart-js :chartData="chart.g"/>
          </div>
        </div>
      </section>


    </div>
  </div>
</template>

<script>
import ChartJs from "../../components/chart-js";
import {chartDATA} from "../../assets/chartDATA.js"

export default {
  components: {ChartJs},
  data: () => ({
    chart: chartDATA,
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
      }, {
        name: 'mahdi',
        username: 'mohamddmadi',
        lastSeen: '2020/15/10',
        phone: '09978545563',
        email: 'mahdi@grmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
      {
        name: 'milad',
        username: 'hosedyni',
        lastSeen: '2020/15/10',
        phone: '099535781',
        email: 'miladg@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },
      {
        name: 'sajgjad',
        username: 'rad',
        lastSeen: '2020/15/10',
        phone: '099564587545',
        email: 'sajjasd@gmail.com',
        profile: 'http://picsum.photos/500/500?image'
      },

    ],
  }),
}
</script>

<style lang="scss">
.drop-down {
  ul {
    @apply h-96 p-2;
  }

  & > span > svg {
    @apply rotate-0;
  }
}

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
