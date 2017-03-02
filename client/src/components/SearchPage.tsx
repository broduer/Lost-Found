import {LostItem} from "../models/LostItem"
import * as React from "react"
import { DropdownButton, MenuItem,FormControl,Panel } from 'react-bootstrap';
import {LostItemProvider} from "../providers/LostItemProvider"
import {LostItemPanel} from "../components/LostItemPanel"


interface SearchPageState {searchText:string, results:LostItem[] }
export class SearchPage extends React.Component<undefined, SearchPageState> {
	 constructor(props:undefined) {
	  super(props);
	  this.state = {
		searchText: '',
		results:[]
	  };
	}

	handleChange(e:Event) {
		this.setState({ searchText: (e.target as any).value, results: LostItemProvider.GetAllItems() });
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
			{this.state.results.map(LostItemPanel)}
		</Panel>
    }
}