import React from 'react';
import { Link } from 'react-router' // 引入Link处理导航跳转

class MenuLi extends React.Component {
	constructor(props){
		super(props);
	}

    render() {

    return (
    <Link to={this.props.to} activeClassName="activeLi" >
    	 <li  id={`${this.props.type}Li${this.props.index}`}>
     		{this.props.name}
     	</li>
     </Link>
    );
  }
}

export default MenuLi;