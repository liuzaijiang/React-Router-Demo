import React from 'react';

import Top from '../containers/Top.jsx';
import Left from '../containers/Left.jsx';
import Main from '../containers/Main.jsx';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Left/>
                <Main/>
            </div>
        );
    }
}