var React=require('react');
var ReactDOM=require('react-dom');

var Manageparticipant=React.createClass({

getInitialState:function(){

 return({wave:'w',name:'n',email:'e',phone:'p',url:'u',code:'c',dept:'de',desn:'ds',comment:'com',pwd:'pd'});
},

handleClick:function(e){// for storing latest and set state
  //console.log(e.target.value);//for select
  this.setState({wave:e.target.value});
},
handleClick1:function(e){
  console.log(e.target.value);//for name
  this.setState({name:e.target.value});
},
handleClick2:function(e){
  console.log(e.target.value);//for email
  this.setState({email:e.target.value});
},
handleClick3:function(e){
  console.log(e.target.value);//for phone
  this.setState({phone:e.target.value});
},
handleClick4:function(e){
  console.log(e.target.value);//for url
  this.setState({url:e.target.value});
},
handleClick5:function(e){
  console.log(e.target.value);//for empcode
  this.setState({code:e.target.value});
},
handleClick6:function(e){
  console.log(e.target.value);//for empdept
  this.setState({dept:e.target.value});
},
handleClick7:function(e){
  console.log(e.target.value);//for empdesg
  this.setState({desn:e.target.value});
},
handleClick8:function(e){
  console.log(e.target.value);//for skills
  this.setState({comment:e.target.value});
},
handleClick9:function(e){
  console.log(e.target.value);//for Experience
  this.setState({pwd:e.target.value});
},

saving:function()
{

  $.ajax({
         url: '/save',
         dataType: 'json',
         contentType: "application/json",
         type: 'POST',
         data: JSON.stringify({wave:this.state.wave,email:this.state.email,name:this.state.name,phone:this.state.phone,url:this.state.url,code:this.state.code,dept:this.state.dept,desn:this.state.desn,comment:this.state.comment,pwd:this.state.pwd}),
   success: function(data)
   {
     console.log("Success");

   }.bind(this),
   error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
   }.bind(this)
  });

},


render:function(){
  console.log(this.state);
return(
<div>


<div className="container">



  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="wave">wave:</label>
    <select className="form-control" id="wave" onChange={this.handleClick}>
      <option value="wave1">wave1</option>
      <option value="wave2">wave2</option>
      <option value="wave3">wave3</option>
      <option value="wave4">wave4</option>
      <option value="wave5">wave5</option>
    </select>
  </div>



<div className="form-group">
      <label className="control-label col-sm-2" htmlFor="name">Name:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this.handleClick1}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Email:</label>
      <div className="col-sm-4">
        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleClick2}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmFor="phone">phone:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="phone" placeholder="Enter number" onChange={this.handleClick3}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmFor="url">git url:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="url" placeholder="Enter url" onChange={this.handleClick4}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmFor="code">Emp code:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="code" placeholder="Enter employee num" onChange={this.handleClick5}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmFor="dept">Emp Dep:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="dept" placeholder="Enter department name" onChange={this.handleClick6}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmFor="desn">Designation:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="desn" placeholder="Enter designation" onChange={this.handleClick7}/>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" htmFor="comment">Skillset:</label>
      <div className="col-sm-4">
        <textarea className="form-control" rows="5" id="comment" onChange={this.handleClick8}></textarea>
      </div>
    </div>

    <div className="form-group">
      <label className="control-label col-sm-2" for="pwd">Experience:</label>
      <div className="col-sm-4">
        <input type="text" className="form-control" id="pwd" placeholder="Enter number of years" onChange={this.handleClick9}/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-4">
      </div>
      <div className="col-sm-8">
        <button  className="btn btn-default" onClick={this.saving}>Submit</button>
      </div>
    </div>
</div>


</div>//main div
);
}
});
module.exports=Manageparticipant;
