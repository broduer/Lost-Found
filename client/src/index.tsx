import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button,DropdownButton, MenuItem,FormControl,Panel } from 'react-bootstrap';
import { Link, Router, Route, hashHistory, Redirect } from 'react-router';
import { NavigationBar } from "./components/NavigationBar"


 const DisplayItem = (item:Item) => {return <Panel header={item.Name}>{item.Name}, נמצא ב{item.Location}</Panel>}

 interface SearchState {searchText:string, results:Item[] }
 class Search extends React.Component<undefined, SearchState> {
	 constructor(props) {
	  super(props);
	  this.state = {
		searchText: '',
		results:[]
	  };
	}

	handleChange(e) {
		this.setState({ searchText: e.target.value, results: [{Name:"תיק",Location:"יריחו"},{Name:"טלפון",Location:"ירושלים"}] });
	}

    render() {
        return <div>
			<FormControl
				type="text"
				value={this.state.searchText}
				placeholder="חפש פה"
				onChange={this.handleChange.bind(this)}
			/>
			<br/>
			<DropdownButton title={"ביום האחרון"} id={"זמן חיפוש"}>
				<MenuItem eventKey="1">לפני שבוע</MenuItem>
				<MenuItem eventKey="2">לפני שנה</MenuItem>
			</DropdownButton>
			<DropdownButton title={"כל הארץ"} id={"איזור חיפוש"}>
				<MenuItem eventKey="1">לוד</MenuItem>
				<MenuItem eventKey="2">ירוחם</MenuItem>
			</DropdownButton>
			<br/>
			{this.state.results.map(DisplayItem)}
		</div>
    }
}

 class NavbarHolder extends React.Component<any, any> {
	 constructor(props) { super(props);	}

    render() {
        return <div>
		          <NavigationBar/>
				{this.props.children}
		</div>
    }
}

const Other = ()=>(<span>NewItem</span>)


  const Routing = ()=> (<div style={{direction:"rtl"}}>
		    <Router history={hashHistory} >
				<Route path="/" component={NavbarHolder}>
					<Route path="/Search" component={Search}/>
					<Route path="/Other" component={Other}/>
				</Route>
			</Router>,
      </div>)


ReactDOM.render(
  <Routing />,
  document.getElementById('example')
);
