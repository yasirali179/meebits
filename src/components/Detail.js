
import '../css/main.css';
import '../css/tailwin.css'
import logo from '../images/images/logo.svg'


function Detail() {
    const dataArray = []

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

                                            <a href="/detail"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All
                                                Meebits</a>

                                            <a href="/detail"
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

                                            <a href="/detail"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>

                                            <a href="/detail"
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

                            <a href="/detail"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Attributes</a>

                            <a href="/detail"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">For
                                Sale</a>

                            <a href="/detail"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bids</a>

                            <a href="/detail"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Recent
                                Sales</a>

                            <a href="/detail"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>

                            <a href="/detail"
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



                    <div id="main_content" class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                        <section class="py-12 px-4">
                            <div class="flex flex-wrap -mx-8">
                                <div class="lg:w-1/2 px-8">
                                    <img
                                        class="mb-4 rounded shadow cursor-pointer"
                                        src="meebitimages/00001-fulle22e.jpg" alt="" />
                                    <div class="flex flex-wrap -mx-2">
                                        <div
                                            class="w-1/4 px-2"><img class="rounded shadow cursor-pointer"
                                                src="meebitimages/00001-fulle22e.jpg"
                                                alt="" /></div>
                                        <div
                                            class="w-1/4 px-2"><img class="rounded shadow cursor-pointer"
                                                src="meebitimages/00001-fulle22e.jpg"
                                                alt="" /></div>
                                        <div
                                            class="w-1/4 px-2"><img class="rounded shadow cursor-pointer"
                                                src="meebitimages/00001-fulle22e.jpg"
                                                alt="" /></div>
                                        <div class="w-1/4 px-2">
                                            <div
                                                class="w-full h-full flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-1/2 px-8 mt-6 lg:mt-0 order-2 lg:order-none">
                                    <h2 class="text-4xl mb-2 font-semibold font-heading">Meebit #13766</h2>
                                    <p class="mb-6">
                                        <a href="/detail"
                                            class="font-semibold text-indigo-700 hover:text-indigo-500">Human</a>
                                    </p>
                                    <p class="mb-6">
                                        Owned by <a
                                            href="/detail"
                                            class="text-indigo-700 hover:text-indigo-500">0xC31afe50</a>
                                    </p>

                                    <div class="mb-10">
                                        <a href="/detail"
                                            class="button inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            buttonMessage
                                        </a>
                                        <a href="/detail"
                                            class="button inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            View on OpenSea
                                        </a>

                                    </div>

                                    <table class="w-full mb-6">
                                        <tbody>
                                            <tr class="border-t">
                                                <td class="py-3">Hair</td>
                                                <td class="text-right"><a href="/detail"
                                                    class="text-indigo-700 hover:text-indigo-500">Long (773)</a>, <a
                                                        href="/detail"
                                                        class="text-indigo-700 hover:text-indigo-500">Dark (473)</a></td>
                                            </tr>
                                            <tr class="border-t">
                                                <td class="py-3">Shirt</td>
                                                <td class="text-right"><a
                                                    href="/detail"
                                                    class="text-indigo-700 hover:text-indigo-500">Diagonal Tee
                                                    (753)</a>, <a
                                                        href="/detail"
                                                        class="text-indigo-700 hover:text-indigo-500">Yellow (70)</a></td>
                                            </tr>
                                            <tr class="border-t">
                                                <td class="py-3">Pants</td>
                                                <td class="text-right"><a href="/detail"
                                                    class="text-indigo-700 hover:text-indigo-500">Skirt (2384)</a>, <a
                                                        href="/detail"
                                                        class="text-indigo-700 hover:text-indigo-500">Dark Red (183)</a>
                                                </td>
                                            </tr>
                                            <tr class="border-t">
                                                <td class="py-3">Shoes</td>
                                                <td class="text-right"><a href="/detail"
                                                    class="text-indigo-700 hover:text-indigo-500">Canvas (3808)</a>, <a
                                                        href="/detail"
                                                        class="text-indigo-700 hover:text-indigo-500">Gray (869)</a></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h2 class="mt-8 text-lg leading-6 font-medium text-gray-900">
                                        Market Summary
                                    </h2>
                                    <table class="table-fixed w-full mb-6">
                                        <tbody>
                                            <thead>
                                                <tr class="border-b">
                                                    <th class="w-3/4 text-left"></th>
                                                    <th class="w-1/4"></th>
                                                </tr>
                                            </thead>
                                            <tr class="h-3"></tr>
                                            <tr class="">
                                                <td class="py-1">
                                                    <div class="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            class="flex-shrink-0 h-5 w-5 text-gray-500" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>

                                                        <span class="ml-2 flex-1 w-0 truncate">
                                                            Top Bid (<a class="text-indigo-700 hover:text-indigo-500"
                                                                href="/detail">OpenSea</a>)
                                                        </span>
                                                    </div>
                                                </td>
                                                <td class="text-right"><span
                                                    class="px-2 py-1 text-green-800 text-sm font-medium bg-green-100 rounded-full">2.92&Xi;</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="rounded-md bg-green-50 p-4">
                                        <div class="flex">
                                            <div class="flex-shrink-0">

                                                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div class="ml-3 flex-1 md:flex md:justify-between">
                                                <p class="text-sm text-green-700">
                                                    OpenSea market data is currently in Beta and may be slightly behind the
                                                    data on OpenSea.io, please let us know if you find any errors.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <div v-show="showOwnerAlert" class="bg-blue-200 shadow sm:rounded-lg" v-cloak>
                                        <div class="px-4 py-5 sm:p-6">
                                            <h3 class="text-xl leading-6 font-medium text-blue-900">
                                                Owner Files Available
                                            </h3>
                                            <div class="mt-2 max-w-xl text-sm text-blue-800">
                                                <p>
                                                    Sign a message with your wallet to prove ownership of this Meebit and
                                                    gain access to files including 3D models and lossless images.
                                                </p>
                                            </div>
                                            <div class="mt-5">
                                                <button type="button"
                                                    class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
                                                    Prove Ownership
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}


                                </div>

                            </div>

                            <div class="border-b border-gray-200 mt-16 mb-8 pb-4 mx-auto">
                                <h2 class="text-3xl font-extrabold text-gray-900">Valid Open Offers</h2>
                            </div>

                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table class="table-fixed min-w-full divide-y divide-gray-200">
                                                <thead class="bg-gray-50">
                                                    <tr>
                                                        <th scope="col"
                                                            class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Maker
                                                        </th>
                                                        <th scope="col"
                                                            class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Taker
                                                        </th>
                                                        <th scope="col"
                                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Status
                                                        </th>
                                                        <th scope="col"
                                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Timing
                                                        </th>
                                                        <th scope="col" class="relative px-6 py-3">
                                                            <span class="sr-only">View Deal</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    <tr
                                                        style={{ cursor: 'pointer' }}>
                                                        <td class="align-top px-6 py-4 whitespace-nowrap m">
                                                            <div class="flex items-center">
                                                                <div class="">
                                                                    <div class="text-md font-medium text-indigo-900">
                                                                        <a href="/detail"
                                                                            class="hover:text-indigo-500">0xC31afe50</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex flex-wrap items-center mt-2">
                                                                <div class="flex-shrink-0 h-20 mr-1 mb-1">
                                                                    <a href="detail908e.html?index=13766"><img
                                                                        class="h-20 rounded-md"
                                                                        src="meebitimages/00001-fulle22e.jpg"
                                                                        alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="align-top px-6 py-4 whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <div class="">
                                                                    <div class="text-md font-medium text-indigo-900">
                                                                        <a href="/detail"
                                                                            class="hover:text-indigo-500">0xC2B46C60</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex flex-wrap items-center mt-2">
                                                                <div class="flex-shrink-0 h-20 mr-1 mb-1">
                                                                    <a href="detailffcf.html?index=551"><img
                                                                        class="h-20 rounded-md"
                                                                        src="public/meebitimages/00551-full1227.jpg?index=551&amp;type=full"
                                                                        alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            <span
                                                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                Valid
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            Expires in 23h 22m 28s
                                                        </td>
                                                        <td
                                                            class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href="/detail"
                                                                class="text-indigo-600 hover:text-indigo-900">View Deal</a>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-200 mt-16 mb-16 pb-4 mx-auto">
                                <h2 class="text-3xl font-extrabold text-gray-900">Transaction History</h2>
                            </div>

                            <div class="max-w-2xl mx-auto px-6">
                                <div class="flow-root">
                                    <ul class="">
                                        <li>
                                            <div class="relative pb-8">
                                                <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"></span>
                                                <div class="relative flex items-start space-x-3">
                                                    <div class="relative">
                                                        <span
                                                            class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                                            <svg class="h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="min-w-0 flex-1">
                                                        <div>
                                                            <div class="text-sm">
                                                                <a href="/detail"
                                                                    class="font-medium text-gray-900">Deal Offered by
                                                                    0xC31afe50</a>
                                                            </div>
                                                            <p class="mt-0.5 text-sm text-gray-500">
                                                                36 minutes ago
                                                                <span class="mr-0.5">
                                                                    <span
                                                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                        Valid
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="mt-2 text-sm text-gray-700">
                                                            <p>
                                                                <table>
                                                                    <tr
                                                                        style={{ cursor: 'pointer' }}>
                                                                        <td class="align-top px-6 py-2 whitespace-nowrap m">
                                                                            <div class="flex items-center">
                                                                                <div class="">
                                                                                    <div
                                                                                        class="text-md font-medium text-indigo-900">
                                                                                        <a href="/detail"
                                                                                            class="hover:text-indigo-500">0xC31afe50</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex flex-wrap items-center mt-2">
                                                                                <div class="flex-shrink-0 h-20 mr-1 mb-1">
                                                                                    <a href="/detail"><img
                                                                                        class="h-20 rounded-md"
                                                                                        src="meebitimages/00001-fulle22e.jpg"
                                                                                        alt="" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td class="align-top px-6 py-2 whitespace-nowrap">
                                                                            <div class="flex items-center">
                                                                                <div class="">
                                                                                    <div
                                                                                        class="text-md font-medium text-indigo-900">
                                                                                        <a href="/detail"
                                                                                            class="hover:text-indigo-500">0xC2B46C60</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex flex-wrap items-center mt-2">
                                                                                <div class="flex-shrink-0 h-20 mr-1 mb-1">
                                                                                    <a href="/detail"><img
                                                                                        class="h-20 rounded-md"
                                                                                        src="meebitimages/00001-fulle22e.jpg"
                                                                                        alt="" /></a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="relative pb-8">
                                                <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"></span>
                                                <div class="relative flex items-start space-x-3">
                                                    <div class="relative">
                                                        <span
                                                            class="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">

                                                            <svg class="h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="min-w-0 flex-1">
                                                        <div>
                                                            <div class="text-sm">
                                                                <a href="/detail"
                                                                    target="_blank" class="font-medium text-gray-900">45
                                                                    bids from 4 bidders, ranging from 2.38&Xi; to
                                                                    3.05&Xi;</a>
                                                                <a href="/detail"
                                                                    target="_blank"
                                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                                    <span
                                                                        class="absolute flex-shrink-0 flex items-center justify-center">
                                                                        <span class="h-1.5 w-1.5 rounded-full bg-blue-500"
                                                                            aria-hidden="true"></span>
                                                                    </span>
                                                                    <span
                                                                        class="ml-3.5 font-medium text-gray-900">OpenSea</span>
                                                                </a>
                                                                <div
                                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                                    <span
                                                                        class="absolute flex-shrink-0 flex items-center justify-center">
                                                                        <span class="h-1.5 w-1.5 rounded-full bg-yellow-500"
                                                                            aria-hidden="true"></span>
                                                                    </span>
                                                                    <span
                                                                        class="ml-3.5 font-medium text-gray-900">Summary</span>
                                                                </div>
                                                            </div>
                                                            <p class="mt-0.5 text-sm text-gray-500">
                                                                1 day ago to 2 hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="relative pb-8">
                                                <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"></span>
                                                <div class="relative flex items-start space-x-3">
                                                    <div class="relative">
                                                        <span
                                                            class="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                                            <svg class="h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="min-w-0 flex-1">
                                                        <div>
                                                            <div class="text-sm">
                                                                <a href="/detail"
                                                                    target="_blank" class="font-medium text-gray-900">Sold
                                                                    to 0xC31afe50 for 3.7&Xi;</a>
                                                                <a href="/detail"
                                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                                    <span
                                                                        class="absolute flex-shrink-0 flex items-center justify-center">
                                                                        <span class="h-1.5 w-1.5 rounded-full bg-indigo-500"
                                                                            aria-hidden="true"></span>
                                                                    </span>
                                                                    <span
                                                                        class="ml-3.5 font-medium text-gray-900">OpenSea</span>
                                                                </a>

                                                            </div>
                                                            <p class="mt-0.5 text-sm text-gray-500">
                                                                1 day ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="relative pb-8">
                                                <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"></span>
                                                <div class="relative flex items-start space-x-3">
                                                    <div class="relative">
                                                        <span
                                                            class="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                                            <svg class="h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="min-w-0 flex-1">
                                                        <div>
                                                            <div class="text-sm">
                                                                <a href="https://etherscan.io/tx/0xa530ccd07df0546b8cd10ae9c0d8c7036d37c08400d26b2f75a281c4f20e63c7"
                                                                    target="_blank"
                                                                    class="font-medium text-gray-900">Transferred from
                                                                    0x57dcd38a to 0xC31afe50</a>
                                                            </div>
                                                            <p class="mt-0.5 text-sm text-gray-500">
                                                                1 day ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="relative pb-8">
                                                <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"></span>
                                                <div class="relative flex items-start space-x-3">
                                                    <div class="relative">
                                                        <span
                                                            class="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">

                                                            <svg class="h-5 w-5 text-white"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="min-w-0 flex-1">
                                                        <div>
                                                            <div class="text-sm">
                                                                <a href="/detail"
                                                                    target="_blank" class="font-medium text-gray-900">29
                                                                    bids from 3 bidders, ranging from 2.82&Xi; to
                                                                    2.96&Xi;</a>
                                                                <a href="/detail"
                                                                    target="_blank"
                                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                                    <span
                                                                        class="absolute flex-shrink-0 flex items-center justify-center">
                                                                        <span class="h-1.5 w-1.5 rounded-full bg-blue-500"
                                                                            aria-hidden="true"></span>
                                                                    </span>
                                                                    <span
                                                                        class="ml-3.5 font-medium text-gray-900">OpenSea</span>
                                                                </a>
                                                                <div
                                                                    class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                                                    <span
                                                                        class="absolute flex-shrink-0 flex items-center justify-center">
                                                                        <span class="h-1.5 w-1.5 rounded-full bg-yellow-500"
                                                                            aria-hidden="true"></span>
                                                                    </span>
                                                                    <span
                                                                        class="ml-3.5 font-medium text-gray-900">Summary</span>
                                                                </div>
                                                            </div>
                                                            <p class="mt-0.5 text-sm text-gray-500">
                                                                2 days ago to 1 day ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="relative pb-8">
                                                <div class="relative flex items-start space-x-3">
                                                    <div class="relative">
                                                        <span
                                                            class="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                                                                stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="min-w-0 flex-1">
                                                        <div>
                                                            <div class="text-sm">
                                                                <a href="/detail"
                                                                    target="_blank" class="font-medium text-gray-900">Minted
                                                                    by 0x57dcd38a</a>
                                                            </div>
                                                            <p class="mt-0.5 text-sm text-gray-500">
                                                                3 months ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                            </div>

                        </section>


                    </div>


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

export default Detail;
