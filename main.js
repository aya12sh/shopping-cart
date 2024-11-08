import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { productsDataFetcher } from './api.js'
import { htmlContent } from './html.js'

const productsData = await productsDataFetcher()
const {products} = productsData

document.querySelector('#app').innerHTML = htmlContent


  const productListEl = document.querySelector("#products-list")
  products.map(product => {
    productListEl.innerHTML = `<!-- start card -->
    <div class="sh-card border">
      <div class="sh-card-img-container">
        <img src="./public/imgs/image-removebg-preview(54) 1.png" alt="">
      </div>
      <div class="sh-card-body px-4 py-4">
        <div class="flex gap-x-4 items-center">
          <p class="font-bold">$1,854</p>
          <s class="text-sm text-gray-400">$1,914</s>
        </div>
        <p class="text-sm font-semibold mt-3 max-w-48">${product.title}</p>
      </div>
      <div class="sh-card-footer px-4 mb-4 flex justify-between">
        <div class="flex items-center gap-x-3">
          <div class="flex items-center space-x-2 h-6 w-16 px-2 bg-primary rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.00001 12.1833L5.23334 13.85C5.11112 13.9278 4.98334 13.9611 4.85001 13.95C4.71667 13.9389 4.60001 13.8944 4.50001 13.8167C4.40001 13.7389 4.32223 13.6416 4.26667 13.5247C4.21112 13.4078 4.20001 13.2773 4.23334 13.1333L4.96667 9.98333L2.51667 7.86667C2.40556 7.76667 2.33623 7.65267 2.30867 7.52467C2.28112 7.39667 2.28934 7.27178 2.33334 7.15C2.37778 7.02778 2.44445 6.92778 2.53334 6.85C2.62223 6.77222 2.74445 6.72222 2.90001 6.7L6.13334 6.41667L7.38334 3.45C7.43889 3.31667 7.52512 3.21667 7.64201 3.15C7.75889 3.08333 7.87823 3.05 8.00001 3.05C8.12223 3.05 8.24156 3.08333 8.35801 3.15C8.47445 3.21667 8.56067 3.31667 8.61667 3.45L9.86667 6.41667L13.1 6.7C13.2556 6.72222 13.3778 6.77222 13.4667 6.85C13.5556 6.92778 13.6222 7.02778 13.6667 7.15C13.7111 7.27222 13.7196 7.39733 13.692 7.52533C13.6644 7.65333 13.5949 7.76711 13.4833 7.86667L11.0333 9.98333L11.7667 13.1333C11.8 13.2778 11.7889 13.4084 11.7333 13.5253C11.6778 13.6422 11.6 13.7393 11.5 13.8167C11.4 13.8944 11.2833 13.9389 11.15 13.95C11.0167 13.9611 10.8889 13.9278 10.7667 13.85L8.00001 12.1833Z"
                fill="#F8F8F8" />
            </svg>
            <span class="text-xs text-white font-semibold">5.0</span>
          </div>
          <div class="h-5 w-[2px] bg-primary bg-opacity-50"></div>
          <span class="text-gray-400 text-xs pl-1">sold 120</span>
        </div>
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#FF69D4" />
            <g clip-path="url(#clip0_22_271)">
              <path
                d="M11.6667 8.66667C11.1133 8.66667 10.6667 8.22 10.6667 7.66667V4.33333C10.6667 3.78 11.1133 3.33333 11.6667 3.33333C12.22 3.33333 12.6667 3.78 12.6667 4.33333V7.66667C12.6667 8.22 12.22 8.66667 11.6667 8.66667Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M15.6667 8.66667H14.6667V7.66667C14.6667 7.11333 15.1133 6.66667 15.6667 6.66667C16.22 6.66667 16.6667 7.11333 16.6667 7.66667C16.6667 8.22 16.22 8.66667 15.6667 8.66667Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.33333 11.3333C8.88666 11.3333 9.33333 11.78 9.33333 12.3333V15.6667C9.33333 16.22 8.88666 16.6667 8.33333 16.6667C7.77999 16.6667 7.33333 16.22 7.33333 15.6667V12.3333C7.33333 11.78 7.77999 11.3333 8.33333 11.3333Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M4.33333 11.3333H5.33333V12.3333C5.33333 12.8867 4.88666 13.3333 4.33333 13.3333C3.77999 13.3333 3.33333 12.8867 3.33333 12.3333C3.33333 11.78 3.77999 11.3333 4.33333 11.3333Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M11.3333 11.6667C11.3333 11.1133 11.78 10.6667 12.3333 10.6667H15.6667C16.22 10.6667 16.6667 11.1133 16.6667 11.6667C16.6667 12.22 16.22 12.6667 15.6667 12.6667H12.3333C11.78 12.6667 11.3333 12.22 11.3333 11.6667Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12.3333 14.6667H11.3333V15.6667C11.3333 16.22 11.78 16.6667 12.3333 16.6667C12.8867 16.6667 13.3333 16.22 13.3333 15.6667C13.3333 15.1133 12.8867 14.6667 12.3333 14.6667Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.66666 8.33333C8.66666 7.78 8.22 7.33333 7.66666 7.33333H4.33333C3.77999 7.33333 3.33333 7.78 3.33333 8.33333C3.33333 8.88667 3.77999 9.33333 4.33333 9.33333H7.66666C8.22 9.33333 8.66666 8.88667 8.66666 8.33333Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M7.66667 5.33333H8.66667V4.33333C8.66667 3.78 8.22001 3.33333 7.66667 3.33333C7.11334 3.33333 6.66667 3.78 6.66667 4.33333C6.66667 4.88667 7.11334 5.33333 7.66667 5.33333Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_22_271">
                <rect width="16" height="16" fill="white" transform="translate(2 2)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <!-- end card -->`
  });

