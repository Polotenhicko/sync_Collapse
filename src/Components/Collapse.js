import React from 'react';
import CollapseCard from './CollapseCard';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const list = this.props.list.map((obj) => ({ ...obj, isClose: true }));
    this.state = {
      list,
    };
  }

  handleClickButton = (id) => {
    this.setState((state) => {
      return {
        list: state.list.map((obj) =>
          obj.id == id || !obj.isClose ? { ...obj, isClose: !obj.isClose } : obj
        ),
      };
    });
  };

  render() {
    return (
      <div className="collapse">
        {this.state.list.map((obj) => (
          <CollapseCard key={obj.id} obj={obj} onClickButton={this.handleClickButton} />
        ))}
      </div>
    );
  }
}
