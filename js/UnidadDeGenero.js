var app = new Vue({
    el: '#demo',
    data() {
      return {
        index: 0,
        scale: 2,
        type: "square",
        showType: true,
        changeImgPosition: false,
        height: 180,
        width: 200,
              taobao: false,
              filter:false,
              
        imgList: [
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL8chnE9U4aeRLB-GIB6oKHgV-L4DUBlXVxl1MwXC6zw1LLii0rpA8XXB8nt8gwc9qHQPElpr0bNjNaoOQu7MzcSaExwrKCzlcLUH2MSAWJ3OJHCpiHk9qPDaQ6Rt5eSYeMNZvYtA_-8Mm8A054b-2-ssALZHBHYkeEPGGRdc5CyX1GvWEeb6xeZdRMCDz/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Unidad%20de%20G%C3%A9nero.png",
        ]
      };
    },
    created() {
      this.url = this.imgList[this.index];
          document.body.onmousewheel = event => {
        event = event || window.event
        this.scale += event.deltaY > 0 ? -0.1 : 0.1
      }
    },
    methods: {

      addScale() {
        this.scale += 0.5;
      },
      subScale() {
        this.scale -= 0.5;
      },
      changeShowType() {
        this.showType = !this.showType;

      }
    }
  })