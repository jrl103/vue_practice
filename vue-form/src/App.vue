<template>
<!-- <form v-on:submit.prevent="submitForm"> 
  : event modifier
  : submit에 대해서 event 기본적인 동작을 막겠다는 뜻
  = event.preventDefault() 같은 의미
-->
<form v-on:click="submitForm">
    <div>
      <!--label이 input을 바라봄-->
      <!--for ~~를 위한 label-->
      <label for="username">id</label> 
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label> 
      <input id="password" type="password" v-model="password">
    </div>
    <!--type이 submit인 경우, form까지 연결돼서 enter치면 데이터 전송됨(새로고침됨)
        : 메서드를 실행하고 싶은데, 실행하기 전에 계속 새로고침이 됨
        : form 특성 = 정보를 제출하고 새로고침하는 특성
        ==> 막아주기 위해 event 인자 보내서 event.preventDefault() 하기
    -->
    <!--이벤트 버블링, 캡처링
    https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
    -->
    <button type="submit">login</button>
  </form>
</template>

<script>
// npm i axios
// axios ?
// : http 프로토콜을 이용한 통신 라이브러리
// : 사용하는 이유 - 브라우저와 서버가 데이터를 주고 받기 위해
import axios from 'axios';

export default {
  // 컴포넌트간의 데이터가 공유되지 않게 새 객체 리턴해주는 function 사용
  data: function(){
    return {
      username: '',
      password: '',
    }
  },
  // methods에서 data 접근 방법 : this
  methods: {
    // event 인자 = submit event
    submitForm: function(event){
      // event.preventDefault
      // : form의 새로고침 기능을 막는 기능
      event.preventDefault()
      console.log(this.username, this.password);
      // post : 데이터 생성/조작
      // jsonplaceholder.typicode.com
      // https://jsonplaceholder.typicode.com/todos/1
      let url = 'https://jsonplaceholder.typicode.com/users'
      let data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
      }
    }
  }
</script>

<style>

</style>