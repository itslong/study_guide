import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    const { listName } = ownProps;

    const { items, isLoading} = state[listName];
    return {
        isLoading,
        [listName]: items
    };
};

const ConnectedList = (props) => {
    const { listName, isLoading } = props;
    const listItems = props[listName];
    /** 
        listName: array of objects. Since the objects have dynamic names, transformation is required.
        ex:
        [ {category_name: ..., category_desc: ... }, {category_name: ..., category_desc: ... },... ]
    **/

    const sortedListItems = listItems.sort((a, b) => {
        return a.id - b.id
    });
    const listValues = sortedListItems && !isLoading ? sortedListItems.map((items, i) => {
                return <li key={i}>{Object.entries(items).map(val => {
                    return (
                        val[1]
                    );
                })}</li>;
            }) : 'Loading...';

    return (
        <ul>
            {listValues}
        </ul>
    )
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
