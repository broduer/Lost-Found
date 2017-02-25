import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button,DropdownButton, MenuItem,FormControl,Panel,ControlLabel } from 'react-bootstrap';
import { Link, Router, Route, hashHistory, Redirect } from 'react-router';
import { NavigationBar } from "./components/NavigationBar"
import {Item} from "./models/LostItem"

var FakeItems = [
	{Name:"תיק Jerusalem Bags",Location:"יריחו",Description:"סתם איזזה תיק לא יודע", ContactName:"שמוליק",ContactPhoneNumber:"052-sheker"},
	{Name:"טלפון סמסונג גלקסי 4",Location:"ירושלים",Description:"Galaxy 4 שנמצא על ספסל באמצע פארק", ContactName:"בוב",ContactPhoneNumber:"052-sheker"}
]

 const DisplayItem = (item:Item) => {return <Panel header={item.Name+" - "+item.Location}>
 {item.Description} <br/>
 שם: {item.ContactName}, טלפון: {item.ContactPhoneNumber}
 </Panel>}

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
		this.setState({ searchText: e.target.value, results: FakeItems });
	}

    render() {
        return <Panel>
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
			<br/>
			{this.state.results.map(DisplayItem)}
		</Panel>
    }
}
 interface AddState {lostItem:Item }
 class Add extends React.Component<undefined, AddState> {
	 constructor(props) {
	  super(props);
	  this.state = {
		lostItem: new Item()
	  };
	}
	
    render() {
        return <Panel>
			<ControlLabel>שם אבידה</ControlLabel>
			<FormControl type="text"
				onChange={(e:any) => {this.state.lostItem.Name = e.target.value}}
			/>
			<ControlLabel>נמצא ב</ControlLabel>
			<FormControl type="text"
				onChange={(e:any) => {this.state.lostItem.Location = e.target.value}}
			/>
			<ControlLabel>תיאור</ControlLabel>
			<FormControl type="text"
				onChange={(e:any) => {this.state.lostItem.Description= e.target.value}}
			/>
			<ControlLabel>שם מוצא/מאבד</ControlLabel>
			<FormControl type="text"
				onChange={(e:any) => {this.state.lostItem.ContactName = e.target.value}}
			/>
			<ControlLabel>טלפון לפרטים</ControlLabel>
			<FormControl type="text"
				onChange={(e:any) => {this.state.lostItem.ContactPhoneNumber = e.target.value}}
			/>
			<Button onClick={()=>{FakeItems.push(this.state.lostItem); hashHistory.push("Search")}}>הוסף!</Button>
		</Panel>
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
					<Route path="/Add" component={Add}/>
					<Route path="/Other" component={Other}/>
				</Route>
			</Router>,
      </div>)


ReactDOM.render(
  <Routing />,
  document.getElementById('example')
);
