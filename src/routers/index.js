import { FaUserFriends } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineManageSearch } from "react-icons/md";
import { BiAnalyse, BiLogOut } from "react-icons/bi";
import {
  RiAlarmWarningFill,
  RiGitRepositoryCommitsFill,
  RiMessage2Fill,
  RiDashboardLine
} from "react-icons/ri";


export const linkNavigation = [
  {
    name: "Dashboard",
    target: "/",
    searchLink: "dashboard",
    icone: <RiDashboardLine />,
  },
  {
    name: "Analystic",
    target: "/analystic",
    searchLink: "analystic",
    icone: <BiAnalyse />,
  },
  {
    name: "Users",
    target: "/users",
    searchLink: "users",
    icone: <FaUserFriends />,
  },
  {
    name: "Alarm Banner",
    target: "/alarm_banner",
    searchLink: "alarm_banner",
    icone: <RiAlarmWarningFill />,
  },
  {
    name: "Reporting",
    target: "/reporting",
    searchLink: "reporting",
    icone: <RiGitRepositoryCommitsFill />,
  },
  {
    name: "Messages",
    target: "/messages",
    searchLink: "messages",
    icone: <RiMessage2Fill />,
  },
  {
    name: "Settings",
    target: "/settings",
    searchLink: "settings",
    icone: <MdOutlineManageSearch />,
  },
  {
    name: "Login",
    target: "/login",
    searchLink: "login",
    icone: <FiLogIn />,
  },
  {
    name: "Logout",
    target: "/logout",
    searchLink: "logout",
    icone: <BiLogOut />,
  },
];
