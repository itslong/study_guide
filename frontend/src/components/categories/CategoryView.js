import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List } from '../common';
import { getCategoriesByUser } from '../../actions';
import CategoryAddForm from './CategoryAddForm';


class ConnectedCategoryView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { user } = this.props;
        const { userId } = user;
        this.props.getCategoriesByUser(userId)
    }


    render() {

        return (
            <div>
                <h3>Categories:</h3>
                <List listName={'categories'} />
                <CategoryAddForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    }
};

const CategoryView = connect(mapStateToProps, { getCategoriesByUser })(ConnectedCategoryView);

export default CategoryView;
