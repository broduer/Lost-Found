import {LostItem} from "../models/LostItem"
import * as React from "react"
import { ControlLabel,FormControl,Panel, Button } from 'react-bootstrap';
import {LostItemProvider} from "../providers/LostItemProvider"
import { hashHistory } from 'react-router';


interface AddItemPageState {lostItem:LostItem }
export class AddItemPage extends React.Component<undefined, AddItemPageState> {
	 constructor(props:undefined) {
	  super(props);
	  this.state = {
		lostItem: new LostItem()
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
			<Button onClick={()=>{LostItemProvider.AddItem(this.state.lostItem); hashHistory.push("Search")}}>הוסף!</Button>
		</Panel>
    }
}
