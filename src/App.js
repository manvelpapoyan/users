import { QueryClient, QueryClientProvider } from "react-query";
import Menu from "./components/menu/menu";
import Users from "./components/users/users";

const queryClient = new QueryClient();
function App() {
	return (
		<div className='App'>
			<Menu />
			<QueryClientProvider client={queryClient}>
				<Users />
			</QueryClientProvider>
		</div>
	);
}

export default App;
