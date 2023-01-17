import React from 'react';

export default class CollapseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: true,
    };
  }
  ref = React.createRef();
  bodyHeight = 0;

  componentDidMount() {
    this.getBodyHeight();
  }

  handleClickHead = (e) => {
    this.setState((state) => {
      this.ref.current.style.height = state.isClose ? this.bodyHeight + 'px' : '';
      return { isClose: !state.isClose };
    });
  };

  getBodyHeight() {
    const current = this.ref.current;
    current.style.height = 'auto';
    this.bodyHeight = current.offsetHeight;
    current.style.height = '';
  }

  render() {
    return (
      <div className="collapse_card">
        <div className="collapse_head">
          <button className="collapse_head_button btn" type="button" onClick={this.handleClickHead}>
            {this.props.obj.title}
          </button>
        </div>
        <div className={`collapse_body${this.state.isClose ? ' close' : ''}`} ref={this.ref}>
          <div className="collapse_body_text">{this.props.obj.text}</div>
        </div>
      </div>
    );
  }
}
