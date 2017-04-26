import React from 'react';

import Top from '../containers/Top.jsx';
import SettingsLeft from '../containers/SettingsLeft.jsx';
import Main from '../containers/Main.jsx';


export default class HomeSetting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SettingsLeft/>
                <Main/>
            </div>
        );
    }
}