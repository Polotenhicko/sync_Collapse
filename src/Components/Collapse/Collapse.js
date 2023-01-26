import React from 'react';
import CollapseCard from './CollapseCard';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const opennedId = this.props.list.find((obj) => obj.isOpen)?.id;
    this.state = {
      opennedId,
    };
  }

  handleClickButton = (id) => {
    this.setState((state) => ({ opennedId: id === state.opennedId ? null : id }));
  };

  render() {
    return (
      <div className="collapse">
        {this.props.list.map((obj) => (
          <CollapseCard
            key={obj.id}
            obj={obj}
            isOpen={this.state.opennedId === obj.id}
            onClickButton={this.handleClickButton}
          />
        ))}
      </div>
    );
  }
}
