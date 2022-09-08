<!--Vetur : vti-->

<!--싱글 파일 컴포넌트(.vue 파일)
: 화면의 영역을 나눴을 때 특정 영역에 해당하는 HTML, Javascript, CSS를 한 파일에 관리
-->

<!-- let appHeader = {
  templage: '<div>header</div>' -> html 영역
  methods: { -> Javascript 영역
    addNum: function(){

    }
  }
} -->

<!--template 안에는 하나의 element만 있어야함 (div)-->
<template>
  <!--HTML-->
  <div>{{str}}</div>
</template>

<script>
export default { 
  // Javascript - 인스턴스 옵션

    // function을 연결하는 이유
    // : 여태까지는 { } 객체만 연결했어도 됐음
    // : but CLI를 통해서 .vue 파일로 오게 되면, 그 컴포넌트를 재사용할 확률이 높음
    // : so, 여러개의 컴포넌트에서 동일한 값을 공유(참조)하면 안되기 때문에
    //      객체 리터럴이 아니라 function 함수를 연결해서 return으로 새 객체를 반환해주는 형식의 문법으로 진행해야함 
    // : 이 규칙을 따르지 않을 경우 console에 error 발생
    data: function(){
      return {
        str: 'hi'
      }
    }
  
}
</script>

<style>
  /* CSS */
</style>