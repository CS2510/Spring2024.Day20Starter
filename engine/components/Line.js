class Line extends Component{
  constructor(one, two, stroke){
    super();
    [this.one, this.two] = [one, two]
    this.stroke = stroke;
  }
  draw(ctx){
    ctx.strokeStyle = this.stroke;
    ctx.beginPath();
    ctx.moveTo(this.one.x, this.one.y);
    ctx.lineTo(this.two.x, this.two.y);
    ctx.stroke();
  }
  asGeometry(){
    return new Line2(this.one, this.two);
  }
}

window.Line = Line;