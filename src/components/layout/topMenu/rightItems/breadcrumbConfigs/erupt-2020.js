import GrainIcon from "@material-ui/icons/Grain";
import HomeIcon from "@material-ui/icons/Home";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WhatshotIcon from "@material-ui/icons/Whatshot";

export const path = "erupt-2020";

export const breadcrumbs = [
    {
        label: "Home",
        path: `/${path}/home`,
        Icon: HomeIcon,
    },
    {
        label: "Agenda",
        path: `/${path}/agenda`,
        Icon: GrainIcon,
    },
    {
        label: "Pool Play",
        path: `/${path}/pool`,
        Icon: WhatshotIcon,
    },
    {
        label: "Bracket Play",
        path: `/${path}/bracket`,
        Icon: SportsEsportsIcon,
    },
];
