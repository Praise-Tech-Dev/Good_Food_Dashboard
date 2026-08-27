
import Chart from '../assets/icons/Chart.svg'
import Settings from '../assets/icons/Setting.svg'
import ShoppingCart from '../assets/icons/Buy.svg'
import FileText  from '../assets/icons/Document.svg'
import Review from '../assets/icons/Chat.svg'
import Wallet from '../assets/icons/Buy.svg'
import User from '../assets/icons/Profile.svg'
import Help from '../assets/icons/Info Square.svg'



export const navigation = {
  menu: [
    {
      name: "Dashboard",
      path: "/",
      icon: Chart,
    },
    {
      name: "Food Order",
      path: "/order",
      icon: ShoppingCart,
    },
    {
      name: "Manage Menu",
      path: "/menu",
      icon: FileText,
    },
    {
      name: "Customer Review",
      path: "/reviews",
      icon: Review,
    },
  ],

  others: [
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
    {
      name: "Payment",
      path: "/payment",
      icon: Wallet,
    },
    {
      name: "Account",
      path: "/account",
      icon: User,
    },
    {
      name: "Help",
      path: "/help",
      icon: Help,
    },
  ],
} as const;
