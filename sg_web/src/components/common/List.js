import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    const { listName: stateName } = ownProps;

    return {
        [stateName]: state[stateName]
    };
};

const ConnectedList = (props) => {
    const { listName, stateAttributes: listKeys } = props;
    const listItems = props[listName];
    /** 
        listName: array of objects. Since the objects have dynamic names, transformation is required.
        ex:
        [ {category_name: ..., category_desc: ... }, {category_name: ..., category_desc: ... },... ]
    **/

    const listValues = listItems ? listItems.map((items, i) => {
                return <li key={i}>{Object.entries(items).map(val => {
                    return (
                        val[1]
                    );
                })}</li>;
            }) : '';

    return (
        <ul>
            {listValues}
        </ul>
    )
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
