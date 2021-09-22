import axios from "axios";

const URL = "https://brainstorm-interview-task.herokuapp.com";

const getUsers = async (page = 1, sort = "name", order = "asc") => {
	const response = await axios.get(
		`${URL}/users/?_page=${page}&_sort=${sort}&_order=${order}`
	);

	return response.data;
};

const getSingleUser = async (id) => {
	const response = await axios.get(`${URL}/users/${id}`);

	return response.data;
};

const createUser = async (data) => {
	let photo = "https://cdn190.picsart.com/232804661007900.png";
	if (data.photo) {
		const photoResponse = await postPhoto(data.photo);
		photo = photoResponse.data.url;
	}

	await axios.post(`${URL}/users`, {
		...data,
		photo,
	});
};

const postPhoto = async (photo) => {
	console.log(photo);
	const formData = new FormData();
	formData.append("file", photo, photo.name);
	return await axios.post(`${URL}/images`, formData, {
		headers: {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
		},
	});
};

const updatedUser = async (id, data) => {
	if (data.photo) {
		const photoResponse = await postPhoto(data.photo);
		data.photo = photoResponse.data.url;
	}

	await axios.patch(`${URL}/users/${id}`, data);
};

const deleteUser = async (id) => {
	await axios.delete(`${URL}/users/${id}`);
};

export { getUsers, createUser, updatedUser, deleteUser, getSingleUser };
