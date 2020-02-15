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
        const { userId } = user;
        this.props.getCategoriesByUser(userId)
    }


    render() {

        return (
            <div>
                <h3>Categories:</h3>
                <List listName={'categories'} />
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
