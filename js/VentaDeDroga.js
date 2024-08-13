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
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPrUXMyBFNRjo4agn5wyE2HI9IyO-8Cgi4Y_nt38azrVxoT_78REpiv4YMhv-jibrOTE_d6jLK12M_5RNh0JIfUQTq2C6funwWJHVhuPyvADfQcLYaBuSXiXvEAEeN2UPfM2FiyVbzyi5dKokDwDViRi5o82OGnOuUkk78_xSIDHA02vB4gkQy751-Gzjo/s16000/Copia%20de%20Diagramas%20de%20flujo%20DUCS%20-%20Tr%C3%A1nsito.jpg",
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