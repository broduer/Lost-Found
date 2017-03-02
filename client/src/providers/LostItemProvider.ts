import {LostItem} from "../models/LostItem"

export interface ILostItemProvider {
    GetAllItems():LostItem[];
    AddItem(newLostItem:LostItem):void
}

export class MockLostItemProvider implements ILostItemProvider{
    private lostItems: LostItem[] = [
	    {Name:"תיק Jerusalem Bags",Location:"יריחו",Description:"סתם איזזה תיק לא יודע", ContactName:"שמוליק",ContactPhoneNumber:"052-sheker"},
	    {Name:"טלפון סמסונג גלקסי 4",Location:"ירושלים",Description:"Galaxy 4 שנמצא על ספסל באמצע פארק", ContactName:"בוב",ContactPhoneNumber:"052-sheker"}
    ]

    GetAllItems():LostItem[]{
        return this.lostItems;
    }

    AddItem(newLostItem:LostItem):void{
        this.lostItems.push(newLostItem);
    }    
}

export var LostItemProvider:ILostItemProvider = new MockLostItemProvider()