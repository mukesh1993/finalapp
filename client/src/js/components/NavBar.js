var React=require('react');
var {Link}=require('react-router');
var Navlink=require('./Navlink');

var NavBar=React.createClass({
  render:function(){
    return(

<div className="container-fluid">
  <ul className="nav navbar-nav">
    <li><Navlink to="/home">Home</Navlink></li>
    <li><Navlink to="/manageparticipant">manageparticipant</Navlink></li>
    <li><Navlink to="/view">viewdetails</Navlink></li>
  </ul>
</div>


    );
  }
});
module.exports=NavBar
