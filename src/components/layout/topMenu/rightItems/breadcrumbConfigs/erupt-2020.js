import ListIcon from "@material-ui/icons/List";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import PoolIcon from "@material-ui/icons/Pool";

export const path = "erupt-2020";

export const breadcrumbs = [
    {
        label: "Home",
        path: `/${path}/home`,
        Icon: HomeWorkIcon,
    },
    {
        label: "Agenda",
        path: `/${path}/agenda`,
        Icon: ListIcon,
    },
    {
        label: "Pool Play",
        path: `/${path}/pool`,
        Icon: PoolIcon,
    },
    {
        label: "Rankings",
        path: `/${path}/rankings`,
        Icon: RestaurantIcon,
    },
];
