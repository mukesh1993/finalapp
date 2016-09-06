var React=require('react');
var ReactDOM=require('react-dom');
var Viewdetails2=require('./Viewdetails2.js');
var Viewdetails1=React.createClass({
render:function(){

  var a=this.props.h.map(function(e)
  {
return(
   <Viewdetails2 wave={e.wave} name={e.name} email={e.email} phone={e.phone} url={e.url} code={e.code} dept={e.dept} desn={e.desn} comment={e.comment} pwd={e.pwd}></Viewdetails2>
);

  },this);

return(
  <div>
    {a}
  </div>
);
}
});
module.exports=Viewdetails1;
