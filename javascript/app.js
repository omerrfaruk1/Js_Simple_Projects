class SnakeGame {
  constructor() {
    this.gameplace = document.getElementById("gamePlace");
    this.Snake = document.getElementById("snake");
    this.num = 0;
    this.t = 20;
    this.b = 20;
    this.left = this.left;
    this.top = this.top;
    
    }

  snake() {
    window.addEventListener("click",(ev) => {
      this.Snake.style.transform = 'translateY('+(ev.clientY-25)+'px)';
      console.log(ev.clientY)
      this.Snake.style.transform += 'translateX('+(ev.clientX-25)+'px)';
  },false);
    // this.Snake.innerHTML = `${this.num}`;
    // window.onkeydown = (e) => {
    //     var x = e.keyCode;
    //     console.log(x);
    //     setInterval( () => {
    //       switch (x){
    //         case 40:
    //           this.Snake.style.top = `${this.num}px`;
    //             this.num += this.t;
    //             console.log(this.num);
    //           break;
    //         case 38:
    //           this.num -= this.b+20;
    //             this.Snake.style.top = `${this.num}px`;
    //             console.error(this.num);
    //           break;
    //           default:
    //             break;
                
    //       }
    //     // if (x === 40) {}
    //     // else if (x === 38) {}
    //     },2000)
        
    // }
  }
  apple() {
    var apple = document.createElement("div");
    apple.id = "apple";
    this.left = Math.floor(Math.random() * 60) * 20;
    this.top = Math.floor(Math.random() * 25) * 20;
    apple.style.top = this.top + "px";
    apple.style.left = this.left + "px";
    if (this.top === 0) {
      apple.remove();
    } else if (this.left === 0) {
      apple.remove();
    } else {
      this.gameplace.appendChild(apple);
    }
    snakegame.snake();
  }
  sgame(event) {
    if (
      this.Snake.offsetLeft === this.left &&
      this.Snake.offsetTop === this.top
    ) {
      num++;
      snakegame.apple();
    }
  }
}
var snakegame = new SnakeGame();
window.onload = () => snakegame.apple();


