class ScoreReaderComponent extends Component {
  update() {
      this.parent.components[1].text = "" + Globals.score;
  }
}

window.ScoreReaderComponent = ScoreReaderComponent;