var vue = new Vue({
  el:"#app",
  data: { quantidade: 0},

  computed: {},

  methods: {
      adicionar() {
        this.quantidade ++;
      },
      remover() {
        if(this.quantidade >0) {
          this.quantidade --;
        }
      }
    }
  }
);
