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
        // refactor after auth
        const userId = user.userId ? user.userId : 1;
        this.props.getCategoriesByUser(userId)
    }


    render() {

        return (
            <List listName={'categories'} />
        )
    }
}

const mapStateToProps = (state) => {
    const { categories, user } = state;
    const { isLoading } = categories;

    const id = user.userId ? user.userId : 1;

    return {
        categories,
        isLoading,
        user
    }
};

const CategoryView = connect(mapStateToProps, { getCategoriesByUser })(ConnectedCategoryView);

export default CategoryView;
