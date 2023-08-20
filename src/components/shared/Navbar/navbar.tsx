import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (<>
    <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-400 to-blue-500 p-6 my-2 mx-2 rounded-md">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <svg fill="#06459f" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 193.658 193.658" xml:space="preserve" stroke="#06459f">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M96.829,193.658C43.438,193.658,0,150.22,0,96.829S43.438,0,96.829,0s96.828,43.437,96.828,96.829 S150.221,193.658,96.829,193.658z M4.384,105.308c4.297,47.227,44.118,84.35,92.445,84.35s88.147-37.123,92.444-84.35h-62.802 c-3.692,12.89-15.583,22.35-29.643,22.35s-25.951-9.46-29.644-22.35H4.384z M70.629,91.039C70.217,92.904,70,94.841,70,96.829 c0,14.793,12.035,26.829,26.829,26.829c14.793,0,26.828-12.036,26.828-26.829S111.622,70,96.829,70 c-12.634,0-23.256,8.778-26.089,20.556C70.724,90.724,70.686,90.886,70.629,91.039z M127.333,101.308h62.218 c0.07-1.485,0.106-2.977,0.106-4.479s-0.036-2.994-0.106-4.479h-62.218c0.214,1.462,0.324,2.958,0.324,4.479 S127.547,99.845,127.333,101.308z M4.107,101.308h62.218C66.111,99.845,66,98.35,66,96.829s0.11-3.017,0.324-4.479H4.107 C4.036,93.835,4,95.326,4,96.829S4.036,99.823,4.107,101.308z M126.472,88.35h62.802C184.977,41.123,145.156,4,96.829,4 S8.681,41.123,4.384,88.35h7.03c2.048-20.872,11.643-40.184,27.115-54.511C54.435,19.111,75.14,11,96.829,11c1.104,0,2,0.896,2,2 s-0.896,2-2,2c-41.712,0-77.133,32.081-81.395,73.35h51.751C70.878,75.46,82.77,66,96.829,66S122.781,75.46,126.472,88.35z M96.829,112.446c-8.611,0-15.617-7.006-15.617-15.617c0-8.611,7.006-15.617,15.617-15.617s15.617,7.006,15.617,15.617 C112.447,105.44,105.441,112.446,96.829,112.446z M96.829,85.212c-6.405,0-11.617,5.211-11.617,11.617 c0,6.406,5.212,11.617,11.617,11.617s11.617-5.211,11.617-11.617C108.447,90.423,103.235,85.212,96.829,85.212z"></path>
              </g>
            </svg>
          </Link>
        </div>
        <div>
          <Link href="/pokemons/list-ssr/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">SSR-List</Link>
          <Link href="/pokemons/list-client/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Client-List</Link>
        </div>
      </div>
    </nav>
  </>)
});