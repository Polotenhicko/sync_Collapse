import React from 'react';

export default class CollapseCard extends React.Component {
  ref = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  handleClickHead = (e) => {
    const height = this.ref.current.offsetHeight;
    this.ref.current.style.maxHeight = height + 'px';
    this.timeout = setTimeout(() => {
      this.setState((state) => {
        this.ref.current.style.maxHeight = '';
        return { isOpen: !state.isOpen };
      });
    });
  };

  render() {
    return (
      <div className="collapse_card">
        <div className="collapse_head" onClick={this.handleClickHead}>
          <button className="collapse_head_button btn" type="button">
            {this.props.obj.title}
          </button>
        </div>
        <div className={`collapse_body ${this.state.isOpen ? 'show' : 'close'}`} ref={this.ref}>
          {this.props.obj.text}
        </div>
      </div>
    );
  }
}
