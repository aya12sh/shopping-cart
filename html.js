export const htmlContent = `
  <div class="sh-inner">
      <header class="sh-header h-20 border-b flex justify-between items-center px-12">
        <a href="/" class="flex items-center space-x-2">
          <img src="/imgs/image-removebg-preview(52)-5rB8KdZqR6-transformed 1.svg" alt="" />
          <span class="text-lg font-semibold capitalize text-purple-500">shop</span>
        </a>
        <div class="sh-search-bar border rounded-full p-1 h-11 hidden lg:flex">
          <button class="flex items-center gap-x-4 h-full border-r px-4">
            <img src="imgs/map-pin 1.svg" alt="" />
            <span class="font-semibold capitalize">new york</span>
            <img src="imgs/chevron-down(1) 1.svg" alt="" />
          </button>
          <input type="text" placeholder="asus"
            class="w-80 h-full focus:outline-none placeholder:capitalize placeholder:text-gray-800 placeholder:text-sm placeholder:font-semibold px-4" />
          <button class="flex bg-purple-500 items-center h-full rounded-full gap-x-3 px-4">
            <img src="imgs/search(2) 1.svg" alt="" class="object-cover" />
            <span class="text-white font-medium m-1.5 capitalize">search</span>
          </button>
        </div>
        <div class="sh-actions items-center space-x-6 hidden lg:flex">
          <button class="sh-language flex items-center space-x-2">
            <img src="imgs/Ellipse 1.png" alt="" />
            <span class="uppercase text-gray-300 font-medium">en</span>
            <img src="imgs/chevron-down(1) 1.svg" alt="" />
          </button>
          <div class="flex items-center space-x-4 border-r-2 h-8 pr-6">
            <button>
              <img src="imgs/shopping-cart 1.svg" alt="" />
            </button>
            <button>
              <img src="imgs/bell(1) 1.svg" alt="" />
            </button>
            <button>
              <img src="imgs/mail 1.svg" alt="" />
            </button>
          </div>
          <button>
            <img src="./public/imgs/Ellipse 2.png" alt="" />
          </button>
        </div>
      </header>
      <div class="sh-filter h-20 border-b flex items-center px-12 space-x-6">
        <div class="">
          <button class="sh-category flex items-center space-x-2">
            <img src="./public/imgs/list(1) 1.svg" alt="" />
            <span class="capitalize font-medium text-gray-600">categories</span>
            <img src="imgs/chevron-down(1) 1 dark.svg" alt="" />
          </button>
        </div>
        <div class="h-8 w-0.5 bg-gray-400"></div>
        <div class="flex space-x-7">
          <button class="capitalize font-medium text-gray-600">
            ready to ship
          </button>
          <button class="capitalize font-medium text-gray-600">
            presonel protective
          </button>
          <button class="sh-category flex items-center space-x-2">
            <span class="capitalize font-medium text-gray-600">buyer centrale</span>
            <img src="imgs/chevron-down(1) 1 dark.svg" alt="" />
          </button>
          <button class="sh-category flex items-center space-x-2">
            <span class="capitalize font-medium text-gray-600">sell on shop.com</span>
            <img src="imgs/chevron-down(1) 1 dark.svg" alt="" />
          </button>
          <button class="sh-category flex items-center space-x-2">
            <span class="capitalize font-medium text-gray-600">help</span>
            <img src="imgs/chevron-down(1) 1 dark.svg" alt="" />
          </button>
        </div>
      </div>
      <main class="sh-main flex px-12 py-8 gap-x-8">
        <aside class="sh-sidebar w-72 min-h-screen border rounded-lg p-6 flex flex-col space-y-6">
          <header>
            <h5 class="capitalize font-semibold text-lg text-gray-500">
              filter
            </h5>
          </header>
          <div class="flex flex-col gap-y-6">
            <div class="flex flex-col gap-y-4 pb-2">
              <p class="capitalize font-medium">suppliers types</p>
              <label for="suppliers" class="flex items-center gap-x-4">
                <input type="checkbox" id="suppliers" class="w-5 h-5 !border-gray-200 rounded-md" />
                <img src="./public/imgs/image 1.png" alt="" />
                <span class="capitalize text-gray-600">trade assurance</span>
              </label>

              <label for="suppliers" class="flex items-center gap-x-4">
                <input type="checkbox" id="suppliers" class="w-5 h-5 !border-gray-200 rounded-md" />
                <img src="./public/imgs/image-removebg-preview(53) 1 (1).png" alt="" />
                <span class="capitalize text-gray-600">verfied suppliers</span>
              </label>
            </div>
            <div class="flex flex-col gap-y-4 pb-2">
              <p class="capitalize font-medium">suppliers types</p>
              <label for="suppliers" class="flex items-center gap-x-4">
                <input type="checkbox" id="suppliers" class="w-5 h-5 !border-gray-200 rounded-md checked:!bg-purple-500"
                  checked />
                <span class="capitalize text-gray-600">ready to ship</span>
              </label>

              <label for="suppliers" class="flex items-center gap-x-4">
                <input type="checkbox" id="suppliers" class="w-5 h-5 !border-gray-200 rounded-md" checked />
                <span class="capitalize text-gray-600">paid samples</span>
              </label>
            </div>
            <div class="flex flex-col gap-y-4 pb-2">
              <p class="capitalize font-medium">suppliers types</p>
              <label for="suppliers" class="flex items-center gap-x-4">
                <input type="checkbox" id="suppliers" class="w-5 h-5 !border-gray-200 rounded-md" />
                <span class="capitalize text-gray-600">new stuff</span>
              </label>

              <label for="suppliers" class="flex items-center gap-x-4">
                <input type="checkbox" id="suppliers" class="w-5 h-5 !border-gray-200 rounded-md" />
                <span class="capitalize text-gray-600">second hand</span>
              </label>
            </div>
            <div class="flex flex-col gap-y-4 pb-2">
              <p class="capitalize font-medium">min order</p>
              <label for="order" class="flex flex-col gap-x-4">
                <input type="range" id="order" class="" />
                <div class="flex justify-between">
                  <span class="capitalize text-gray-600">10</span><span>1000</span>
                </div>
              </label>
            </div>
            <div class="flex flex-col gap-y-4 pb-2">
              <p class="capitalize font-medium">price</p>
              <label for="order"
                class="flex items-center border rounded-md h-10 overflow-hidden w-full focus-within:border-primary ">
                <span class="h-full w-16 bg-muted flex items-center justify-center flex-shrink-0">
                  <img src="./public/imgs/tabler_coin.png" alt="" /></span>
                <input type="number" id="order"
                  class="block h-full flex-grow px-4 w-32 placeholder:text-gray-800 placeholder:text-sm focus:outline-none"
                  placeholder="100" />
              </label>
              <label for="order"
                class="flex items-center border rounded-md h-10 overflow-hidden w-full focus-within:border-primary ">
                <span class="h-full w-16 bg-muted flex items-center justify-center flex-shrink-0">
                  <img src="./public/imgs/tabler_coin.png" alt="" /></span>
                <input type="number" id="order"
                  class="block h-full flex-grow px-4 w-32 placeholder:text-gray-800 placeholder:text-sm focus:outline-none"
                  placeholder="6000" />
              </label>
              <label for="order" class="block">
                <!-- TODO:: To fix the width  -->
                <input type="number" id="order"
                  class="block h-10 w-60 border rounded-md px-4 placeholder:text-gray-800 placeholder:text-sm focus:outline-none"
                  placeholder="under $500 " />
              </label>
              <label for="order" class="flex items-center gap-x-4 p-4 border rounded-md h-10">
                <input type="number" id="order"
                  class="block h-10 w-60 border rounded-md px-4 placeholder:text-gray-800 placeholder:text-sm focus:outline-none"
                  placeholder="$500-$1000" />
              </label>
              <label for="order" class="flex items-center gap-x-4 p-4 border rounded-md h-10">

                <input type="number" id="order"
                  class="block h-10 w-60 border rounded-md px-4 placeholder:text-gray-800 placeholder:text-sm focus:outline-none"
                  placeholder="$1000-$1500" />
              </label>
            </div>
          </div>
        </aside>
        <div class="sh-content flex-1 flex flex-col space-y-6 mr-12 gap-4">
          <div class="flex justify-between items-center">
            <div>
              <span class="text-xl font-semibold capitalize">1 - 16 over 7,000 result for</span>
              <span class="text-xl font-semibold capitalize text-primary">“asus”</span>
            </div>
            <div class="flex justify-between items-center gap-4">
              <span class="text-xl font-semibold capitalize text-gray-600">sort by :</span>
              <button class="flex items-center gap-2 border rounded-xl p-6 h-14">
                <span class="text-xl font-semibold capitalize text-gray-600">best match</span>
                <img src="./public/imgs/chevron-down(1) 1 dark.svg" alt="" height="25" width="25">
              </button>
              <button class="border rounded-xl w-14 h-14 p-4">
                <img src="./public/imgs/grid(1) 1.svg" alt="" height="20" width="20">
              </button>
            </div>
          </div>
          <!-- <div class="flex flex-col space-y-3"> -->
          <div class="flex gap-5">
            <!-- btn 1 -->
            <button class="flex gap-2 items-center border rounded-full py-2 px-4 w-75">
              <span class="capitalize text-mutedpro text-lg">ready to ship</span>
              <img src="./public/imgs/heroicons_x-circle-20-solid.png" alt="">
            </button>
            <!-- btn 2 -->
            <button class="flex gap-2 items-center border rounded-full py-2 px-4 w-75">
              <span class="capitalize text-mutedpro text-lg">paid samples</span>
              <img src="./public/imgs/heroicons_x-circle-20-solid.png" alt="">
            </button>
            <!-- btn 3 -->
            <button class="flex gap-2 items-center border rounded-full py-2 px-4 w-75">
              <span class="capitalize text-mutedpro text-lg">price minimum</span>
              <img src="./public/imgs/heroicons_x-circle-20-solid.png" alt="">
            </button>
            <!-- btn 4 -->
            <button class="flex gap-2 items-center border rounded-full py-2 px-4 w-75">
              <span class="capitalize text-mutedpro text-lg">price maximum</span>
              <img src="./public/imgs/heroicons_x-circle-20-solid.png" alt="">
            </button>
            <!-- btn 5 -->
            <button class="flex gap-2 items-center border rounded-full py-2 px-4 w-75">
              <span class="capitalize text-mutedpro text-lg">minimal order</span>
              <img src="./public/imgs/heroicons_x-circle-20-solid.png" alt="">
            </button>
            <!-- btn s 6 -->
            <button class="w-75">
              <span class="capitalize text-primary text-lg font-semibold">clear all filters</span>
            </button>
          </div>
          <div class="grid grid-cols-4 gap-16" id="products-list">
         
            
          </div>
          <!-- </div> -->
        </div>
      </main>
    </div>
`