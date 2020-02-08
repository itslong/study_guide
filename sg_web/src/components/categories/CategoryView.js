import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List } from '../common';
import { getCategoriesByUser } from '../../js/actions';


class ConnectedCategoryView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { user } = this.props;
        this.props.getCategoriesByUser(user)
    }


    render() {

        return (
            <List listName={'categories'} />
        )
    }
}

const mapStateToProps = (state) => {
    const { categories, isLoading, user } = state;

    const id = user ? user : 1;

    return {
        categories,
        isLoading,
        user: id
    }
};

const CategoryView = connect(mapStateToProps, { getCategoriesByUser })(ConnectedCategoryView);

export default CategoryView;
