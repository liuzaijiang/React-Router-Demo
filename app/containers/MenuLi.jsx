import React from 'react';
import { Link } from 'react-router' // 引入Link处理导航跳转

class MenuLi extends React.Component {
	constructor(props){
		super(props);
	}

    render() {
    	let Li="";
    	Li=this.props.currentIndex==this.props.index?"activeLi":"";

    return (
    <Link to={this.props.to} className={Li} >
    	 <li  id={`${this.props.type}Li${this.props.index}`}>
     		{this.props.name}
     	</li>
     </Link>
    );
  }
}

export default MenuLi;