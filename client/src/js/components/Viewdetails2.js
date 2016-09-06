var React=require('react');
var Viewdetails2=React.createClass({
render:function(){
  return(
    <div>
    <div className="list-group-item">
    <div className="container-fluid">
    <div className="row">
    <div className="col-lg-2">
    {this.props.email}
    </div>
    <div className="col-lg-2">
    {this.props.comment}
    </div>
    <div className="col-lg-1">
    {this.props.wave}
    </div>

    <div className="col-lg-1">
    {this.props.name}
    </div>
    <div className="col-lg-1">
    {this.props.phone}
    </div>
    <div className="col-lg-1">
    {this.props.url}
    </div>
    <div className="col-lg-1">
    {this.props.dept}
    </div>
    <div className="col-lg-1">
    {this.props.desn}
    </div>
    <div className="col-lg-1">
    {this.props.pwd}
    </div>
    <div className="col-lg-1">
    </div>
    {this.props.code}
    </div>
    </div>
    </div>

    </div>
  );
}
});
module.exports=Viewdetails2;
