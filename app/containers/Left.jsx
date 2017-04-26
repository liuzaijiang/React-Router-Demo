import React from 'react';
import MenuLi from "./MenuLi.jsx"
import Clock from "../components/Clock.jsx"

class Left extends React.Component {

  constructor(props){
	super(props);
   }


  render() {

    return(

    	<div className="left">
    		<div className="leftTitle">信息</div>
    			<Clock />
			<div className="leftTitle">视图</div>
			<div className="leftTitle">功能开关</div>
    	</div>
    	)
  }
}



export default Left;