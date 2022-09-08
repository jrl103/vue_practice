// 컴포넌트를 다른 파일에서 불러옴
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render
  // : 뷰 내부적으로 사용하는 함수, 개발자/사용자 모두 사용 가능
  // : 템플릿이라는 속성을 정의했을 때 내부적으로 render 함수 실행됨

  render: h => h(App), // 불러온 컴포넌트를 렌더함
  // components: {
  //   'app': App
  // } --> render와 동일한 역할

}).$mount('#app')  // $mount = el
