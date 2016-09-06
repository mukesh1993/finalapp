var React=require('react');
var ReactDOM=require('react-dom');
var {browserHistory,Route,Router,IndexRoute} =require('react-router');
var Home=require('./components/Home');
var NavBar=require('./components/NavBar');
var Navlink=require('./components/Navlink');
var Manageparticipant=require('./components/Manageparticipant');
var Viewdetails=require('./components/Viewdetails');
var MainComponent=React.createClass({

  render:function(){

        return(
      <div>
      <NavBar/>
    <br/><br/><br/><br/>
     {this.props.children}
      </div>
    );
  }
});
ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/manageparticipant" component={Manageparticipant}/>
      <Route path="/view" component={Viewdetails}/>
      </Route>
  </Router>,document.getElementById('app')
                );
