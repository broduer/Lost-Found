import {LostItem} from "../models/LostItem"
import * as React from "react";
import { Panel } from 'react-bootstrap';

 export const LostItemPanel = (item:LostItem) => {return <Panel header={item.Name+" - "+item.Location}>
 {item.Description} <br/>
 שם: {item.ContactName}, טלפון: {item.ContactPhoneNumber}
 </Panel>}