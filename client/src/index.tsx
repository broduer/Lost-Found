import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button,Navbar,Nav,NavItem,DropdownButton, MenuItem,FormControl,Panel } from 'react-bootstrap';
import { Link, Router, Route, browserHistory } from 'react-router';



const MyNav = ()=>(<Navbar>
    <Navbar.Header>
      <Navbar.Brand>Lost&Found</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">חפש</NavItem>
      <NavItem eventKey={2} href="#">פריט חדש</NavItem>
    </Nav>
  </Navbar>)

 class Item {
	 Name:string;
	 Location:string;
 }
 
 const DisplayItem = (item:Item) => {return <Panel header={item.Name}>{item.Name}, נמצא ב {item.Location}</Panel>}
  
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
  
  const App = ()=> (<div style={{direction:"rtl"}}>
        <MyNav/>
		<Search/>
      </div>)


ReactDOM.render(
  <App />,
  document.getElementById('example')
);