import React from 'react';
import MenuLi from "./MenuLi.jsx"

class Left extends React.Component {

  constructor(props){
	super(props);

   }

    onClickLiHandler(e){
   		if(e.target.nodeName.toLocaleLowerCase()=="li")
   			{

   			}
   }

  render() {
  	let rows=[];
  	LeftMenuObj.forEach((menuli,i)=>{
		rows.push(<MenuLi 
              name={menuli.name} 
              to={menuli.to} 
              index={i} 
              type="setting"
              />)
	})

    return(
    <div>
    	<div className="left">
    		<ul className="leftMenu" onClick={(e)=>{this.onClickLiHandler(e)}}>
			   	{rows}
			  </ul>
    	</div>
      {this.props.children}{/*很重要*/}
    </div>
    	)
  }
}


let LeftMenuObj=[
{
	name:"系统",
	to:"/HomeSetting/SysInf"
},
{
	name:"视图",
	to:"/HomeSetting/Main"
}
]
export default Left;