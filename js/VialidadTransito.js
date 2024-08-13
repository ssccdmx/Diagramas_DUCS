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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYN9rUi50-7aPlbW1usiOxZI5AxW99KEVobfZzYpw1UNheobr1qmOFRdxuiaxSkDK6Sz-RwwWzGPob0ecoSomIq0O-8-CWQj1uatpnQQBX-aw9YMbv3mrGjxMh7p8nPaR_QFT920cuDOkonUnlmqp3sV0ov9cH5iPztEk7MQSW4Oxoq4nmnwHJet5ZI4-k/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Tr%C3%A1nsito.png",
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