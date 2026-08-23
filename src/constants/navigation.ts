import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  MessageCircle,
  Settings,
  Wallet,
  User,
  CircleHelp,
} from "lucide-react";

export const navigation = {
  main: [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
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
      icon: MessageCircle,
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
      icon: CircleHelp,
    },
  ],
} as const;
