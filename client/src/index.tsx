import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { NavigationBar } from "./components/NavigationBar"
import {SearchPage} from "./components/SearchPage"
import {AddItemPage} from "./components/AddItemPage"

class NavbarHolder extends React.Component<any, any> {
	 constructor(props:any) { super(props);	}
    render() {
        return <div>
		          <NavigationBar/>
							{this.props.children}
				</div>
    }
}

const Routing = ()=> (<div style={{direction:"rtl"}}>
		    <Router history={hashHistory} >
				<Route path="/" component={NavbarHolder}>
					<Route path="Search" component={SearchPage}/>
					<Route path="Add" component={AddItemPage}/>
					<IndexRedirect to="Search" />
				</Route>
			</Router>,
      </div>)


ReactDOM.render(
  <Routing />,
  document.getElementById('example')
);
