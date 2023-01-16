import React from 'react';

export default class CollapseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className="collapse_card">
        <div className="collapse_head">
          <button className="collapse_head_button btn" type="button">
            {this.props.obj.title}
          </button>
        </div>
        <div className="collapse_body">{this.props.obj.text}</div>
      </div>
    );
  }
}
