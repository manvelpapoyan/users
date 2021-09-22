import axios from "axios";

const URL = "https://brainstorm-interview-task.herokuapp.com/users";

const getUsers = async (page = 1, sort = "name", order = "asc") => {
	const response = await axios.get(
		`${URL}?_page=${page}&_sort=${sort}&_order=${order}`
	);

	return response.data;
};

const getCreatedUser = async (user) => {
	await axios.post(`${URL}`, {
		...user,
	});
};

const getUpdatedUser = async (id, user) => {
	await axios.patch(`${URL}/${id}`, {
		avatar: user.avatar,
		id: id,
		email: user.email,
		first_name: user.first_name,
		last_name: user.last_name,
	});
};

const getDeletedUser = async (id) => {
	await axios.delete(`${URL}/${id}`);
};

export { getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
