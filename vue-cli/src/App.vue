<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--컴포넌트 명명법 종류
    : 1. <hello-world></hello-world> vscode의 파일바로가기 기능을 활용하려면 사용
      2. <HelloWorld></HelloWorld> 파스칼 케이스
      3. <HelloWorld/> 
    -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"
    ></app-header>
  </div>
</template>

<script>
// 컴포넌트의 내용을 들고와서(import), components에 연결해서 사용한다.
// .vue 확장자까지 기재해야 파일 바로가기가 깨지지 않고 사용 가능
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  data: function(){
    return {
      str: 'Header'
    }
  },
  components: {
    // 'hellod-world': HelloWorld(컴포넌트 내용)
    // 파일의 내용이 변수에 담겼고, 변수를 연결함
    HelloWorld,
    AppHeader
  },
  methods: {
    renewStr: function(){
      this.str = 'hi'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
