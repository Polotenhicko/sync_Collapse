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
      <div>
        <div className="collapse_head">
          <button className="collapse_head_button" type="button">
            {this.props.obj.title}
          </button>
        </div>
        <div className="collapse_body">{this.props.obj.text}</div>
      </div>
    );
  }
}
