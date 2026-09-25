import {
  DollarSign,
  Users,
  FolderKanban,
  ShoppingCart,
} from "lucide-react";

export const stats = [
  {
    title: "Total Revenue",
    value: "$24,580",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Users",
    value: "12,480",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Projects",
    value: "324",
    change: "+4.6%",
    trend: "up",
    icon: FolderKanban,
  },
  {
    title: "Total Orders",
    value: "8,642",
    change: "-2.4%",
    trend: "down",
    icon: ShoppingCart,
  },
];

export const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 7200 },
  { month: "May", revenue: 6800 },
  { month: "Jun", revenue: 8900 },
  { month: "Jul", revenue: 10200 },
  { month: "Aug", revenue: 9400 },
  { month: "Sep", revenue: 11800 },
  { month: "Oct", revenue: 10900 },
  { month: "Nov", revenue: 13200 },
  { month: "Dec", revenue: 14800 },
];

export const salesData = [
  {
    title: "Online Sales",
    value: "$12,480",
    change: "+18.2%",
    trend: "up",
  },
  {
    title: "Subscriptions",
    value: "$8,240",
    change: "+12.5%",
    trend: "up",
  },
  {
    title: "New Customers",
    value: "1,284",
    change: "-4.8%",
    trend: "down",
  },
];

export const transactions = [
  {
    id: "#TRX-1001",
    customer: "Olivia Martin",
    email: "olivia@example.com",
    amount: "$1,240.00",
    date: "Sep 18, 2026",
    status: "Completed",
  },
  {
    id: "#TRX-1002",
    customer: "James Wilson",
    email: "james@example.com",
    amount: "$860.50",
    date: "Sep 17, 2026",
    status: "Completed",
  },
  {
    id: "#TRX-1003",
    customer: "Sophia Brown",
    email: "sophia@example.com",
    amount: "$2,450.00",
    date: "Sep 16, 2026",
    status: "Pending",
  },
  {
    id: "#TRX-1004",
    customer: "Noah Davis",
    email: "noah@example.com",
    amount: "$675.25",
    date: "Sep 15, 2026",
    status: "Completed",
  },
  {
    id: "#TRX-1005",
    customer: "Emma Johnson",
    email: "emma@example.com",
    amount: "$1,890.00",
    date: "Sep 14, 2026",
    status: "Failed",
  },
];

export const activities = [
  {
    id: 1,
    type: "user",
    title: "New user registered",
    description: "Michael Anderson created an account",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment received",
    description: "Payment of $1,240.00 was completed",
    time: "32 minutes ago",
  },
  {
    id: 3,
    type: "project",
    title: "Project completed",
    description: "Website redesign project was completed",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "message",
    title: "New message",
    description: "Sarah sent you a new message",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "document",
    title: "New document uploaded",
    description: "Q3 financial report was uploaded",
    time: "4 hours ago",
  },
];