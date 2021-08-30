

import logo from '../images/images/logo.svg'
import heroHome from '../images/images/homepage/hero_home.jpg'
import homepagePunk from '../images/images/homepage/homepagePunk1.jpg'
import homepageGroup from '../images/images/homepage/group.jpg'

function Homepage() {
    const dataArray = [{ makerid: "0xC31afe50", trakerid: "0xC2B46C60", makerImages: ["meebitimages/13766-fulla5d5.jpg"], trakerimages: ["meebits/viewdeal2b56.html?hash=0x981255f723a42982196da9aa6326517531d47342cf3ac5786f559cb4a1a82fb1"], status: "Valid", timing: "23h 22m 57s", deallink: "meebits/viewdeal3a5d.html?hash=0x8ea3e463531dbb78a2ed04418126d4262302bbf128c3cc025841c0c01128039a" },
    { makerid: "0x1468Ab4A", trakerid: "0xC272Ed09", makerImages: ["meebitimages/01979-full9006.jpg", "meebitimages/15761-fullee4d.jpg"], trakerimages: ["meebitimages/19382-fullb3cb.jpg"], status: "Valid", timing: "6d 19h 52m", deallink: "meebits/viewdeal3a5d.html?hash=0x8ea3e463531dbb78a2ed04418126d4262302bbf128c3cc025841c0c01128039a" },
    { makerid: "0x694EDA02", trakerid: "0x520B5755", makerImages: ["meebitimages/17727-full468f.jpg", "meebitimages/17732-full8702.jpg"], trakerimages: ["meebitimages/05519-full7460.jpg"], status: "Valid", timing: "19h 39m 3s", deallink: "meebits/viewdeal31e2.html?hash=0xe2d461c0b511bea32dc997698ef8bd388aef3e826ca853dd53910e12780886c2" },
    { makerid: "0x694EDA02", trakerid: "0x2fCeBbF5", makerImages: ["meebitimages/02231-fulle164.jpg",], trakerimages: ["meebitimages/10893-full3c47.jpg"], status: "Valid", timing: "19h 36m 21s", deallink: "meebits/viewdeal3f42.html?hash=0xe9e9883e176e9cb643959c6b86fea2c145bd73532f125fad00f254bb7643d932" },
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

                                            <a href="/"
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

                                            <a href="/"
                                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>

                                            <a href="/"
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

                            <a href="/" class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">All
                                Meebits</a>

                            <a href="/"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Attributes</a>

                            <a href="/"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">For
                                Sale</a>

                            <a href="/"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bids</a>

                            <a href="/"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Recent
                                Sales</a>

                            <a href="/"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>

                            <a href="/"
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
                <div class="w-full mx-auto pb-12 px-4 sm:px-6 lg:px-8">

                    <main>
                        <div>
                            <div class="relative">
                                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                    <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                        <div class="absolute inset-0">
                                            <img class="h-full w-full object-cover"
                                                src={heroHome} alt="Meebits Variety" />
                                            <div class="absolute inset-0 bg-gradient-to-r from-indigo-700"></div>
                                        </div>
                                        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                                <span class="block text-white">Say hello to</span>
                                                <span class="block text-indigo-200">The Meebits</span>
                                            </h1>
                                            <p class="mt-6 max-w-md text-xl text-indigo-200 sm:max-w-xl">
                                                20,000 unique 3D characters with a no fee trading marketplace, from the guys
                                                who made Cryptopunks.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-8 overflow-hidden lg:py-12">
                                <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">


                                    <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                                        <div class="relative">
                                            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                                What are the Meebits?
                                            </h3>

                                            <dl class="mt-10 space-y-10">
                                                <div class="relative">
                                                    <dt>
                                                        <div
                                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </div>
                                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">The
                                                            Characters</p>
                                                    </dt>
                                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                                        The Meebits are 20,000 unique 3D voxel characters, created by a
                                                        custom generative algorithm, then registered on the Ethereum
                                                        blockchain.
                                                    </dd>
                                                </div>

                                                <div class="relative">
                                                    <dt>
                                                        <div
                                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                            </svg>
                                                        </div>
                                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">ERC-721
                                                        </p>
                                                    </dt>
                                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                                        The NFT contract the governs ownership is a standard ERC-721 that
                                                        works with any compatible service or exchange.
                                                    </dd>
                                                </div>

                                                <div class="relative">
                                                    <dt>
                                                        <div
                                                            class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                            </svg>
                                                        </div>
                                                        <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                            Integrated No-Fee Marketplace</p>
                                                    </dt>
                                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                                        Also included in the contract is a custom marketplace that supports
                                                        like-kind trading of up to 100 Meebits per transaction, along with
                                                        all the standard buy, bid and ask transactions.
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                                            <img class="relative mx-auto" width="490"
                                                src={homepagePunk} alt="Meebit" />
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                    <img class="h-full w-full object-cover" src={homepageGroup}
                                        alt="Meebits Variety" />
                                </div>

                                <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                                    <div class="relative mt-12 sm:mt-16 lg:mt-24">
                                        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                                            <div class="lg:col-start-2">
                                                <h3
                                                    class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                                    Owner Extras
                                                </h3>
                                                <p class="mt-3 text-lg text-gray-500">
                                                    Owners of a Meebit are given access to an additional asset pack that
                                                    include the full 3D model. Use it to render and animate your Meebit, or
                                                    use as your avatar in the metaverse.
                                                </p>

                                                <dl class="mt-10 space-y-10">
                                                    <div class="relative">
                                                        <dt>
                                                            <div
                                                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                                                </svg>
                                                            </div>
                                                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                                T-Pose Included</p>
                                                        </dt>
                                                        <dd class="mt-2 ml-16 text-base text-gray-500">
                                                            All Meebit owners can access a T-pose OBJ file that be imported
                                                            into any most standard 3D modelling and animation software.
                                                        </dd>
                                                    </div>

                                                    <div class="relative">
                                                        <dt>
                                                            <div
                                                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                                                </svg>
                                                            </div>
                                                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                                High Resolution Renders</p>
                                                        </dt>
                                                        <dd class="mt-2 ml-16 text-base text-gray-500">
                                                            Also included in the assets pack are high resolution, lossless
                                                            renders.
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>

                                            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                                <video class="relative mx-auto" width="400" height="420" autoplay="autoplay"
                                                    loop="loop" muted>
                                                    <source src="dancer2.mp4" type="video/mp4" />
                                                    <source src="dancer2.webm" type="video/webm" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">

                                <div class="relative mb-8">
                                    <h2
                                        class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Open Offers
                                    </h2>
                                    <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                                        Here are a selection of trades recently proposed on the Meebits marketplace. The
                                        marketplace supports simple buy, bid and sell transactions, all the way up to
                                        complicated trades involving up to 50 Meebits on each side of the transaction.
                                    </p>
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
                                                        {dataArray.map((data, index) => {
                                                            return (
                                                                <tr onclick="/detail"
                                                                    style={{ cursor: "pointer" }}>
                                                                    <td class="align-top px-6 py-4 whitespace-nowrap m">
                                                                        <div class="flex items-center">
                                                                            <div class="">
                                                                                <div class="text-md font-medium text-indigo-900">
                                                                                    <a href="/detail"
                                                                                        class="hover:text-indigo-500">{data.makerid}</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="flex flex-wrap items-center mt-2">
                                                                            {data.makerImages.map((img) => {
                                                                                return (
                                                                                    <div class="flex-shrink-0 h-20 mr-1 mb-1">
                                                                                        <a href="/detail"><img
                                                                                            class="h-20 rounded-md"
                                                                                            src={img}
                                                                                            alt="" /></a>
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    </td>
                                                                    <td class="align-top px-6 py-4 whitespace-nowrap">
                                                                        <div class="flex items-center">
                                                                            <div class="">
                                                                                <div class="text-md font-medium text-indigo-900">
                                                                                    <a href="/detail"
                                                                                        class="hover:text-indigo-500">{data.trakerid}</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="flex flex-wrap items-center mt-2">
                                                                            {data.trakerimages.map((img) => {
                                                                                return (
                                                                                    <div class="flex-shrink-0 h-20 mr-1 mb-1">
                                                                                        <a href="/detail"><img
                                                                                            class="h-20 rounded-md"
                                                                                            src={img}
                                                                                            alt="" /></a>
                                                                                    </div>
                                                                                )
                                                                            })}

                                                                        </div>
                                                                    </td>
                                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                                        <span
                                                                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                            {data.status}
                                                                        </span>
                                                                    </td>
                                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        Expires in {data.timing}
                                                                    </td>
                                                                    <td
                                                                        class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                        <a href={data.deallink}
                                                                            class="text-indigo-600 hover:text-indigo-900">View
                                                                            Deal</a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}


                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>

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

export default Homepage;
