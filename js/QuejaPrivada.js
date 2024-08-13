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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAVJqS_GowwqK5sJcKZlcDANykbrUaG25f8mfZk2pq1omN2KqT8NqYO8MF5WfmzozeIBv7v-RN_-4Pk3xehhP9IUtnOkJepznro5puSdMZnthOdOOOsuT1AhXol55YDhygSGfspCunVV03r7fZzuB9b5eYf4bs6vSNh9aNLZT7Aiibjj9MDvfPMp6R-RAH/s16000/Diagramas%20de%20flujo%20DUCS%20-%20Seguridad%20Privada.png",
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