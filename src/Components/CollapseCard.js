import React from 'react';

export default class CollapseCard extends React.Component {
  ref = React.createRef();

  handleClickButton = () => {
    this.props.onClickButton(this.props.obj.id);
  };

  render() {
    const height = this.props.obj.isClose ? '' : this.ref.current.offsetHeight + 'px';
    return (
      <div className="collapse_card">
        <div className="collapse_head">
          <button className="collapse_head_button btn" type="button" onClick={this.handleClickButton}>
            {this.props.obj.title}
          </button>
        </div>
        <div className="collapse_body" style={{ height: height }}>
          <div className="collapse_body_text" ref={this.ref}>
            {this.props.obj.text}
          </div>
        </div>
      </div>
    );
  }
}
