import React from 'react';
import MenuLi from "./MenuLi.jsx"
import { Link } from 'react-router' // 引入Link处理导航跳转

class Top extends React.Component{
	constructor(props){
	super(props);
	this.state={
		currentIndex:0,
	}
  }
  
   onClickLiHandler(e){
   		if(e.target.nodeName.toLocaleLowerCase()=="li")
   			{
   				this.setState({
   					currentIndex:e.target.id.slice(-1)
   				})
   			}
   }
	
	render(){
	let rows=[];
	TopMenuLiObj.forEach((menuli,i)=>{
		rows.push(<MenuLi 
			name={menuli.name} 
			to={menuli.to} 
			index={i} 
			currentIndex={this.state.currentIndex}
			type="top"
			/>)
	})

	return(
		<div>
		<div className="top">
			<div className="topImg"></div>
			<ul className="topMenu" onClick={(e)=>{this.onClickLiHandler(e)}}>
				{rows}
			</ul>
		</div>
		{this.props.children}{/*很重要*/}
		</div>
	)
  }
}

let TopMenuLiObj=[
{
	name:"实时浏览",
	to:"/Home"
},
{
	name:"设置",
	to:"/HomeSetting"
}
]

export default Top;