import React from 'react';
import CollapseCard from './CollapseCard';

export default class Collapse extends React.Component {
  render() {
    return (
      <div className="collapse">
        {this.props.list.map((obj) => (
          <CollapseCard key={obj.id} obj={obj} />
        ))}
      </div>
    );
  }
}
