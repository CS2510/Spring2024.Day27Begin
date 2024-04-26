const scale = 250;
const margin = 50

class PointConstraintsComponentTrival extends Component{
  update(ctx){
    if(this.transform.x < margin*2)
      this.transform.x = margin*2;
    if(this.transform.y < margin*2)
      this.transform.y = margin*2
    if(this.transform.x > scale*2)
      this.transform.x = scale*2
    if(this.transform.y > scale * 2)
      this.transform.y = scale*2
  }

}

window.PointConstraintsComponentTrival = PointConstraintsComponentTrival;