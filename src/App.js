import { QueryClient, QueryClientProvider } from "react-query";
import Menu from "./components/menu/menu";
import Users from "./components/users/users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./components/users/createUser";
import EditUser from "./components/users/editUser";

const queryClient = new QueryClient();
function App() {
	return (
		<div className='App'>
			<Menu />
			<Router>
				<Switch>
					<Route exact path='/'>
						<QueryClientProvider client={queryClient}>
							<Users />
						</QueryClientProvider>
					</Route>
					<Route path='/new'>
						<CreateUser />
					</Route>
					<Route path='/edit'>
						<EditUser />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
