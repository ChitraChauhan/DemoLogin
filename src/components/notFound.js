import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class Error404 extends React.Component{

// componentDidMount() {
//         const { dispatch, currentURL } = this.props
//
//         if (!isLoggedIn) {
//             // set the current url/path for future redirection (we use a Redux action)
//             // then redirect (we use a React Router method)
//             dispatch(setRedirectUrl(currentURL));
//             browserHistory.replace("/")
//         }
//     }

    render() {
    console.log('not found')
        // if (isLoggedIn) {
        //     return this.props.children
        // } else {
            return (
                <div className="Error404">
                    <h1>NOT FOUND (404)</h1>
                </div>
            );
        }

};
// function mapStateToProps(state, ownProps) {
//     return {
//         isLoggedIn: state.loggedIn,
//         currentURL: ownProps.location.pathname
//     }
// }
export default Error404;

