var React=require('react');
var ReactDOM=require('react-dom');
var Viewdetails1=require('./Viewdetails1.js');
var Viewdetails=React.createClass({

getInitialState:function(){

  return({a:[]});
},
render:function(){
return(
<div>
<Viewdetails1 h={this.state.a}></Viewdetails1>
</div>
);
},

componentDidMount: function(){
  console.log("inside did mount");
  $.ajax({
        url: '/mail',
        dataType: 'json',
        type: 'GET',
  success: function(data)
  {
     console.log(data);
     this.setState({a:data});
    console.log("Success");

  }.bind(this),

  error: function(xhr, status, err) {
    console.error("Error.."+err.toString());
  }.bind(this)
});
  },
});
module.exports=Viewdetails;
