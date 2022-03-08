class Sprite extends Cell {
  constructor(i, j, tam) {
    super(i, j);
    this.tam = tam;
    this.x = j * this.tam;
    this.y = i * this.tam;
  }
  show() {
    if (this.walls.top) {
      line(this.x, this.y, this.x + this.tam, this.y);
    }
    if (this.walls.bottom) {
      line(this.x, this.y + this.tam, this.x + this.tam, this.y + this.tam);
    }
    if (this.walls.right) {
      line(this.x + this.tam, this.y, this.x + this.tam, this.y + this.tam);
    }
    if (this.walls.left) {
      line(this.x, this.y, this.x, this.y + this.tam);
    }
  }
  showCurrent(){
    rect(this.x, this.y, this.tam, this.tam);
    fill('#fae');
  }
}