import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../../js/actions';


class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render () {
        return (
            <ul>
                {this.props.articles.map(art => {
                    return <li key={art.id}>{art.title}</li>
                })}
            </ul>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
};


export default connect(mapStateToProps, { getData })(Post);
