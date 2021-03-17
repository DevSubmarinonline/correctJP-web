<template>
<div>
<header class="bg-gray-800 px-2 h-16 justify-between items-center flex justify-between items-center relative max-w-7x1">
<!--ハンバーガーメニュー-->
      <div class="absolute inset-y-0 left-10 flex items-center sm:hidden">
        <button type="button" v-on:click="menutoggle()" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
<!-- ハンバーガー icon -->
          <svg v-show="!mobilemenu" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
<!-- x icon -->
          <svg v-show="mobilemenu" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    <!--  <div class="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">-->
      <!-- ロゴ -->
        <div class="flex-shrink-0 flex items-center mx-auto sm:mx-2">
          <nuxt-link  to="/"><img class="block lg:hidden md:h-8 w-auto h-8" src="/cjp.png"></nuxt-link>
          <nuxt-link to="/" class="hidden lg:block text-gray-100 hover:text-gray-100 focus:outline-none">{{ title }}</nuxt-link>
        </div>
      
<!--デスクトップメニュー-->
        <div class="hidden sm:flex px-16 flex select-none focus:outline-none">
            <nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ヅ卫ネレーター</nuxt-link>
            <div class="mx-4 border-l-2"></div>
            <nuxt-link to="/analyzer/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">マナう亻ザ</nuxt-link>
            <div class="mx-4 border-l-2"></div>
            <nuxt-link to="/about/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">怪日语について</nuxt-link>
        </div>

    
</header>

<!--スマホ用メニュー-->
  <div class="sm:hidden bg-gray-800"  v-show="mobilemenu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ヅ卫ネレーター</nuxt-link>
      <nuxt-link to="/analyzer/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">マナう亻ザ</nuxt-link>
      <nuxt-link to="/about/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">怪日语について</nuxt-link>
    </div>
  </div>
</div>
</template>
<script>
export default {
      props: {
        title: String,
        mobilemenu: Boolean
    },
    created() {
        this.mobilemenu = false;
    },
    methods:{
      menutoggle(){
        this.mobilemenu = (this.mobilemenu === true) ? false : true;
      }
    }
}
</script>