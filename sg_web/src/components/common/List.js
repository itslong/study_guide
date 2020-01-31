import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    const { listName: stateName } = ownProps;

    return {
        [stateName]: state[stateName]
    };
};

const ConnectedList = (props) => {
    const { listName } = props;
    const listValues = props[listName];

    return (
        <ul>
            {listValues.map((items, i) => {
                return (
                    <li key={i}>{items.id}: {items.name}</li>
                 )
            })}
        </ul>
    )
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
