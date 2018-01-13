import React from 'react';
import CommentWrapper from '../components/CommentWrapper';
import { connect } from 'react-redux';
import commentReducer from '../../reducers/commentReducer';

class App extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <div className="publisher">
                    <CommentWrapper content={this.props.comment.content}/>
                    <div className="btnWrap">
                        <a className="publishBtn" href="javascript:void(0)" onClick={() => this.props.setPlaceholder('changed content')}>发布</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comment: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlaceholder: (str) => {
            dispatch({
                type: 'SET_PLACEHOLDER',
                payload: str
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);