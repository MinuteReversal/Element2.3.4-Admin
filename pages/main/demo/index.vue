<template>
  <div>
    <nuxt-link class="button--green" to="/">返回</nuxt-link>
    <router-link class="button--green" to="/demo/form">form</router-link>
    <router-link class="button--green" to="/demo/list">list</router-link>
    <router-link class="button--green" to="/demo/increase">increase</router-link>
    <router-link class="button--green" to="/demo/asyncData">asyncData</router-link>
    <router-link class="button--green" to="/demo/todos">storeTodos</router-link>
    <router-link class="button--green" :to="{ name: 'demo-queryString', params: { userId: 123,userName:'zhy' },query:{age:32},hash:'#abcdef'}">User</router-link>
    <router-link class="button--green" :to="{ name: 'demo-style'}">style</router-link>
    <router-link class="button--green" :to="{ name: 'demo-routerView'}">routerView</router-link>
    <nuxt-link class="button--green" to="/demo/selectShop">选择门店</nuxt-link>
  </div>
</template>
