import HomeWorkIcon from "@material-ui/icons/HomeWork";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import PoolIcon from "@material-ui/icons/Pool";

export const path = "heat-2020";

export const breadcrumbs = [
    {
        label: "Home",
        path: `/${path}/home`,
        Icon: HomeWorkIcon,
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
