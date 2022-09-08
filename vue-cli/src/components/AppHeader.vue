<!--컴포넌트 파일 이름
1. 파스칼 케이스 AppHeader
2. 두 단어 이상 조합해야함
: ex. main을 들고올때, 이것이 html의 표준태그인지 컴포넌트 태그인지 브라우저가 확인하기 어려움
: 브라우저가 구분할 수 있도록 최소한 두 단어 이상 조합해야함
: 한 단어로만 해야한다면 충돌되지 않게끔 하기 (스타일 가이드 권고사항)
-->

<template>
  <header>
    <h1>{{propsdata}}</h1> <!--데이터 바인딩-->
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ['propsdata'], // props 받음
  methods: {
    sendEvent: function(){
      this.$emit('renew') 
      // 정의한 이벤트가 위 컴포넌트(App)으로 emit 됨
      // renew라는 이벤트가 올라가면 props data 값이 바뀌게끔 하기
      // --> 제일 먼저 받는 곳은 App 컴포넌트를 등록한 태그 (app-header)
    }
  }
}
</script>

<style>

</style>