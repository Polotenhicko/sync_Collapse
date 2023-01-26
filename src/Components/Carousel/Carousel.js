import React from 'react';
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLefttClick = this.handleLefttClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.arrWithKey = [];
    this.state = {
      ofset: 0,
      containerWidth: this.calculateContainerWidth(this.props.links.length),
    };
  }
  calculateContainerWidth = (imgCount) => {
    return imgCount * 400;
  };

  handleLefttClick() {
    if (this.state.ofset != (this.state.containerWidth - 400) * -1) {
      this.setState({ ofset: (this.state.ofset -= 400) });
    }
  }
  handleRightClick() {
    if (this.state.ofset != 0) {
      this.setState({ ofset: (this.state.ofset += 400) });
    }
  }

  render() {
    return (
      <div className="window">
        <div className="btnContainer">
          <button onClick={this.handleRightClick} className="btns btnRight">
            &#706;
          </button>
          <button onClick={this.handleLefttClick} className="btns btnLeft">
            &#707;
          </button>
        </div>
        <div className="container" style={{ left: this.state.ofset, width: this.state.containerWidth }}>
          {this.props.links.map((img) => (
            <img src={`${img}`} className="img" />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
