import React from 'react';
import { connect } from 'react-redux';

import ListCard from './ListCard';


const mapStateToProps = (state, ownProps) => {
    const { listName } = ownProps;

    const { items, isLoading} = state[listName];
    return {
        isLoading,
        [listName]: items
    };
};

const ConnectedList = (props) => {
    /** 
        State will have 'categories': {...}, 'topics': {...}, etc. Access items with listName:
        listName: string. ex: 'categories', 'topics', etc.
        categories: [ {category_name: ..., category_desc: ... }, {category_name: ..., category_desc: ... },... ]
    **/
    const { listName, isLoading } = props;
    const listItems = props[listName];


    const sortedListItems = listItems.length > 0 ? listItems.sort((a, b) => {
        return a.id - b.id
    }) : [];

    let listValues = 'Loading...';
    if (!isLoading) {
        listValues = sortedListItems.length > 0 ? 
            sortedListItems.map((items, i) => {
                return (
                    <li key={i}><ListCard listItem={items} /></li>
                )
            }) : 'No categories for this user.';
    } 

    return (
        <ul>
            {listValues}
        </ul>
    )
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
