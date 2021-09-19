import { ReactComponent as Homepage } from "../assets/menu/Homepage.svg";
import { ReactComponent as Users } from "../assets/menu/Users.svg";
import { ReactComponent as Restaurant } from "../assets/menu/Restaurant.svg";
import { ReactComponent as Learn } from "../assets/menu/Learn.svg";
import { ReactComponent as Shop } from "../assets/menu/Shop.svg";
import { ReactComponent as Cuisine } from "../assets/menu/Cuisine.svg";
import { ReactComponent as Post } from "../assets/menu/Post.svg";

export const menuItems = [
	{
		name: "Homepage",
		icon: <Homepage />,
		id: "l",
		active: false,
	},
	{
		name: "Users",
		icon: <Users />,
		id: "2",
		active: true,

	},
	{
		name: "Premium Users",
		icon: <Users />,
		id: "3",
		active: false,
	},
	{
		name: "Restaurants",
		icon: <Restaurant />,
		id: "4",
		active: false,
	},
	{
		name: "Learn",
		icon: <Learn />,
		id: "5",
		active: false,
	},
	{
		name: "Shop",
		icon: <Shop />,
		id: "6",
		active: false,
	},
	{
		name: "Cuisine",
		icon: <Cuisine />,
		id: "7",
		active: false,
	},
	{
		name: "Post",
		icon: <Post />,
		id: "8",
		active: false,
	},
];
