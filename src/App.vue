<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
    <h1>Chart.js</h1>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  //컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartDataSet: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ],
    }
  },
  methods: {
    refreshChart() {
      this.chartDataSet = [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 255, 255, 0.2)",
            "rgba(54, 54, 54, 0.2)",
            "rgba(255, 255, 255, 0.2)",
            "rgba(75, 75, 75, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ];
      console.log(this.chartDataSet);
    }
  },
  created() {
    // axios.get('charts/line/1')
    //   .then(response => response.data = response.data)
    //   .catch(error => console.log(error));
  }
};
</script>

<style>
</style>

<!-- 
1. 외부 라이브러리 모듈화
  - 이유 :  Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함
  - 종류 
    1) 차트
    2) 데이트 피커
    3) 테이블
    4) 스피너


차트 만들기
  1. 차트 라이브러리 npm으로 설치
  2. 설치된 라이브러리를 import로 App.vue에서 로딩
  3. mounted() 라이프 사이클 훅에서 차트를 그림 (ref 속성)
  4. 차트를 컴포넌트화
  5. 컴포넌트의 플러그인화
  6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합


컴포넌트 디자인 패턴
  1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
  2. slot - 마크업 확장이 가능한 컴포넌트
      다양한 요구사항 수용하여 스타일링 가능 
      ex) list 안에 첫번째 아이템은 text, 두번째 아이템은 text & button, 세번째 아이템은 text, & image 등등... 다양한 데이터를 넣을 수 있다.
  3. Controlled - 결합력이 높은 컴포넌트
      props 를 밑에서 바꾸는 경우 에러가 난다 -> props 를 this.$emit을 통해 올려서 값을 바꾸고 다시내려받음으로써 에러가 발생하지 않게 함 -> 결합력이 높음
  4. Renderless - 데이터 처리 컴포넌트
      표현을 하지 않는 컴포넌트. 컴포넌트 안에 script 밖에 없다.
      > render: function() {}
        <형식>
        render: function(createElement) {
          return createElement('태그 이름', '태그 속성', '하위 태그 내용');
        }
        ex) 
        render: function(createElement) {
          return createElement('p', 'Hello Vue'); >> <p>Hello Vue</p>
        }
        render: function(createElement) {
          return createElement('p', this.message); >> <p>{{ message }}</p>
        }
    데이터 fetching에 대한 로직을 컴포넌트로 분할하는데 사용 가능
  -->