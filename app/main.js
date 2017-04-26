import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute} from 'react-router'

import Home from './components/Home.jsx'
import HomeSetting from './components/HomeSetting.jsx' // 引入各容器组件
import ErrorPage from './components/ErrorPage.jsx'

import Top from './containers/Top.jsx'
import Left from './containers/Left.jsx'
import Main from './containers/Main.jsx'
import SettingsLeft from './containers/SettingsLeft.jsx'
import SysInf from './containers/SysInf.jsx'

// 增加2个新路由
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Top}>
        	<IndexRoute component={Home}/>
        	<Route path="/Home" component={Home}/>
        	<Route path="/HomeSetting" component={SettingsLeft}>
        		<IndexRoute component={SysInf}/>
        		<Route path="/HomeSetting/SysInf" component={SysInf}/>
        		<Route path="/HomeSetting/Main" component={Main}/>
        	</Route>
        </Route>
        <Route path="*" component={ ErrorPage } />
    </Router>
), document.getElementById('app'));