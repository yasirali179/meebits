
import '../css/main.css';
import '../css/tailwin.css'
import logo from '../images/images/logo.svg'


function List() {
    const dataArray = [{ id: "1", redData: "1000", greenData: "3.05", middleData: "", image: "meebitimages/00001-fulle22e.jpg", type: "Human" },
    { id: "2", redData: "900", greenData: "3.3", middleData: "1", image: "meebitimages/00002-full3d1b.jpg", type: "Human" },
    { id: "3", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00003-fullffc8.jpg", type: "Human" },
    { id: "4", redData: "", greenData: "3.07", middleData: "", image: "meebitimages/00004-fullb2d0.jpg", type: "Human" },
    { id: "5", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00005-fullf50c.jpg", type: "Human" },
    { id: "6", redData: "25", greenData: "3.23", middleData: "", image: "meebitimages/00006-fullcf85.jpg", type: "Human" },
    { id: "7", redData: "", greenData: "3.56", middleData: "", image: "meebitimages/00007-full1fc3.jpg", type: "Elephant" },
    { id: "8", redData: "", greenData: "3.09", middleData: "", image: "meebitimages/00008-fullddc6.jpg", type: "Human" },
    { id: "9", redData: "", greenData: "3.11", middleData: "", image: "meebitimages/00009-full1bd1.jpg", type: "Human" },
    { id: "10", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00010-full8c45.jpg", type: "Human" },
    { id: "11", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00011-full7f43.jpg", type: "Human" },
    { id: "12", redData: "84.25", greenData: "3.16", middleData: "", image: "meebitimages/00012-fullc43d.jpg", type: "Human" },
    { id: "13", redData: "50", greenData: "3.06", middleData: "", image: "meebitimages/00013-fullc518.jpg", type: "Human" },
    { id: "14", redData: "", greenData: "3.04", middleData: "", image: "meebitimages/00014-fullf275.jpg", type: "Human" },
    { id: "15", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00015-full48cd.jpg", type: "Human" },
    { id: "16", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00016-fulleda9.jpg", type: "Human" },
    { id: "17", redData: "", greenData: "3.06", middleData: "", image: "meebitimages/00017-full78d2.jpg", type: "Human" },
    { id: "18", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00018-fulleed0.jpg", type: "Human" },
    { id: "19", redData: "", greenData: "3.07", middleData: "", image: "meebitimages/00019-full8c05.jpg", type: "Human" },
    { id: "20", redData: "", greenData: "3.51", middleData: "", image: "meebitimages/00020-fullfd36.jpg", type: "Human" },
    { id: "21", redData: "210", greenData: "3.28", middleData: "1", image: "meebitimages/00021-fulleeea.jpg", type: "Human" },
    { id: "22", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00022-full463a.jpg", type: "Human" },
    { id: "23", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00023-full1d79.jpg", type: "Human" },
    { id: "24", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00024-full52fc.jpg", type: "Human" },
    { id: "25", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00025-full6f45.jpg", type: "Human" },
    { id: "26", redData: "20", greenData: "2.92", middleData: "", image: "meebitimages/00026-full743d.jpg", type: "Human" },
    { id: "27", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00027-fulle226.jpg", type: "Human" },
    { id: "28", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00028-fulld91d.jpg", type: "Human" },
    { id: "29", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00029-fullbb02.jpg", type: "Human" },
    { id: "30", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00030-fullbec2.jpg", type: "Human" },
    { id: "31", redData: "41.5", greenData: "3.32", middleData: "", image: "meebitimages/00031-full3244.jpg", type: "Human" },
    { id: "32", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00032-full2e68.jpg", type: "Human" },
    { id: "33", redData: "", greenData: "3.09", middleData: "", image: "meebitimages/00033-fullfe70.jpg", type: "Human" },
    { id: "34", redData: "", greenData: "3.1", middleData: "", image: "meebitimages/00034-fulle55a.jpg", type: "Human" },
    { id: "35", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00035-fulle5ce.jpg", type: "Human" },
    { id: "36", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00036-fullb547.jpg", type: "Human" },
    { id: "37", redData: "", greenData: "3.16", middleData: "", image: "meebitimages/00037-full9656.jpg", type: "Human" },
    { id: "38", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00038-full75f2.jpg", type: "Human" },
    { id: "39", redData: "", greenData: "3.63", middleData: "", image: "meebitimages/00039-fulla161.jpg", type: "Human" },
    { id: "40", redData: "", greenData: "3.18", middleData: "", image: "meebitimages/00040-full6f64.jpg", type: "Human" },
    { id: "41", redData: "", greenData: "3.28", middleData: "", image: "meebitimages/00041-fullb816.jpg", type: "Human" },
    { id: "42", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00042-full6716.jpg", type: "Human" },
    { id: "43", redData: "", greenData: "4.5", middleData: "", image: "meebitimages/00043-full8cf5.jpg", type: "Human" },
    { id: "44", redData: "", greenData: "3.12", middleData: "", image: "meebitimages/00044-fulle008.jpg", type: "Human" },
    { id: "45", redData: "", greenData: "10", middleData: "", image: "meebitimages/00045-full9ca1.jpg", type: "Human" },
    { id: "46", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00046-full9ed5.jpg", type: "Human" },
    { id: "47", redData: "", greenData: "2.92", middleData: "", image: "meebitimages/00047-fullc932.jpg", type: "Human" },
    { id: "48", redData: "", greenData: "3.03", middleData: "", image: "meebitimages/00048-full817d.jpg", type: "Human" },
    ]

    return (
        <div>
            <div class="bg-gray-800 pb-32">
                <nav class="bg-gray-800">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="border-b border-gray-700">
                            <div class="flex items-center justify-between h-16 px-4 sm:px-0">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="/" class="">
                                            <img class="h-8 w-8" src={logo} alt="Workflow" />
                                        </a>
                                    </div>
                                    <div class="hidden md:block">
                                        <div class="ml-10 flex items-baseline space-x-4">

                                            <a href="/list"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All
                                                Meebits</a>

                                            <a href="/list"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Attributes</a>

                                            <div id="activity_dropdown" class="relative inline-block text-left">
                                                <div>
                                                    <button type="button" onclick=""
                                                        class="inline-flex justify-center rounded-md w-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none "
                                                        id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                        Market Data

                                                        <svg v-show="!showing" class="-mr-1 ml-2 h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                            fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                        {/* <svg v-show="showing" v-cloak xmlns="http://www.w3.org/2000/svg"
                                                            class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path fill-rule="evenodd"
                                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                                clip-rule="evenodd" />
                                                        </svg> */}
                                                    </button>
                                                </div>

                                                {/* <div v-show="showing" v-cloak
                                                    class="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                                    tabindex="-1">
                                                    <div class="py-1" role="none">

                                                        <a href="meebits/forsale.html"
                                                            class="text-gray-300 hover:text-gray-50 block px-4 py-2 text-sm"
                                                            role="menuitem" tabindex="-1" id="menu-item-0">For Sale</a>
                                                        <a href="meebits/bids.html"
                                                            class="text-gray-300 hover:text-gray-50 block px-4 py-2 text-sm"
                                                            role="menuitem" tabindex="-1" id="menu-item-1">Bids</a>
                                                        <a href="meebits/sales.html"
                                                            class="text-gray-300 hover:text-gray-50 block px-4 py-2 text-sm"
                                                            role="menuitem" tabindex="-1" id="menu-item-2">Recent Sales</a>
                                                        <a href="meebits/owners.html"
                                                            class="text-gray-300 hover:text-gray-50 block px-4 py-2 text-sm"
                                                            role="menuitem" tabindex="-1" id="menu-item-2">Owners</a>
                                                    </div>
                                                </div> */}
                                            </div>

                                            <a href="/list"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>

                                            <a href="/list"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deposit
                                                / Withdraw</a>

                                            <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                                                <div class="max-w-lg w-full lg:max-w-xs">
                                                    <label for="search" class="sr-only">Search</label>
                                                    <div class="relative">
                                                        <div
                                                            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                                                            <svg class="h-5 w-5 text-gray-400"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                                fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd"
                                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                                    clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <form style={{ display: 'inline', margin: 0, padding: 0 }} method="get"
                                                            action="https://meebits.larvalabs.com/meebits/search">
                                                            <input id="search" name="search"
                                                                class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                                                                placeholder="Search" type="search" value="" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="hidden md:block">
                                    <div id="profile_medium" class="ml-4 flex items-center md:ml-6" v-cloak>
                                        <a v-show="accountNeedsUnlock" href="#" onclick='Project3.requestMetamaskAccess();'
                                            class="text-indigo-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Allow
                                            Wallet Access</a>
                                        <a v-show="state.account"
                                            class="text-indigo-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">shortAddress</a>
                                        <a v-show="hasAccountBalance" href="meebits/depositwithdraw.html"
                                            class="text-indigo-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">(state.accountBalanceInEtherTwoDecimals)</a>
                                    </div>
                                </div>
                                <div class="-mr-2 flex md:hidden">
                                    <div id="profile_mobile" class="flex items-center" v-cloak>
                                        <a v-show="accountNeedsUnlock" href="#" onclick='Project3.requestMetamaskAccess();'
                                            class="text-indigo-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Allow
                                            Wallet Access</a>
                                        <a v-show="state.account"
                                            class="text-indigo-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">shortAddress</a>
                                        <a v-show="hasAccountBalance" href="meebits/depositwithdraw.html"
                                            class="text-indigo-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">(state.accountBalanceInEtherTwoDecimals)</a>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>


                    <div class="border-b border-gray-700 md:hidden" id="mobile-menu">
                        <div class="px-2 py-3 space-y-1 sm:px-3 text-center">

                            <a href="/list" class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">All
                                Meebits</a>

                            <a href="/list"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Attributes</a>

                            <a href="/list"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">For
                                Sale</a>

                            <a href="/list"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bids</a>

                            <a href="/list"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Recent
                                Sales</a>

                            <a href="/list"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>

                            <a href="/list"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deposit
                                / Withdraw</a>

                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <form style={{ display: "inline", margin: 0, padding: 0, }} method="get"
                                    action="https://meebits.larvalabs.com/meebits/list">
                                    <input id="search" name="search"
                                        class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                                        placeholder="Search" type="search" value="" />
                                </form>
                            </div>

                        </div>
                    </div>
                </nav>
                <header class="py-10">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-white">
                        </h1>
                    </div>
                </header>
            </div>

            <main class="-mt-32">
                <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                    <ul class="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
                        {dataArray.map((data) => {
                            return (
                                <li class="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div class="flex-1 flex flex-col">
                                        <span class="inline-block relative">
                                            <a href="/detail">
                                                <img class="flex-shrink-0 mx-auto bg-black rounded-t-lg h-56 object-cover"
                                                    src={data.image} alt="" />
                                            </a>
                                            {data.redData != "" && <span
                                                class="absolute bottom-1 left-1 px-2 py-1 text-green-800 text-xs font-medium bg-red-100 rounded-full">{data.redData}&Xi;</span>}
                                            {data.greenData != "" && <span
                                                class="absolute bottom-1 right-1 px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{data.greenData}&Xi;</span>}
                                        </span>
                                        <div class="p-4">
                                            <h3 class="text-gray-900 text-xl font-medium"><a href="/detail">#{data.id}</a>
                                            </h3>
                                            <dl class="mt-1 flex-grow flex flex-col justify-between">
                                                <dt class="sr-only">Description</dt>
                                                <dd class="text-gray-500 text-sm">{data.type}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}


                    </ul>

                    <nav class="mt-10 border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
                        <div class="-mt-px w-0 flex-1 flex">
                        </div>
                        <div class="hidden md:-mt-px md:flex">
                            <a href="/list"
                                class="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                aria-current="page">
                                1
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                2
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                3
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                4
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                5
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                6
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                7
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                8
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                9
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                10
                            </a>
                            <a href="/list"
                                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                11
                            </a>
                        </div>
                        <div class="-mt-px w-0 flex-1 flex justify-end">
                            <a href="/list"
                                class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                Next
                                <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </nav>

                </div>
            </main>
            <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">

        <a href="https://twitter.com/larvalabs" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>


        <a href="https://discord.gg/tQp4pSE" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Discord</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </a>

      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          &copy; 2021 Larva Labs LLC. All rights reserved.
        </p>
        <p class="text-center text-base text-gray-400">
          <a class="" href="meebits/termsandconditions.html">Terms and Conditions</a> · <a class=""
            href="meebits/privacypolicy.html">Privacy Policy</a>
        </p>
      </div>
    </div>
  </footer>
        </div>
    );
}

export default List;
