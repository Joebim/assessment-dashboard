import faker from 'faker';


export const sales = {
  amount: 4000000,
  volume: 500,
  percentageEarned: 10,
};

export const customers = {
  numberOfCustomers: 1250,
  numberOfActiveCustomers: 1180,
  percentageOfCustomersGained: 85,
  percentageOfActiveCustomers: 15.8,
};

export const orders = {
  numberOfOrders: 445,
  pendingOrders: 5,
  completedOrders: 450,
};

export const products = {
  pendingProducts: 45,
  activeProducts: 32,
  percentageOfActiveProducts: 24,
};

export const carts = {
  abandoned: 20,
  customers: 30,
  percentageEarned: 0.0,
};

export const ItemOrders = [
  {
    date: "2023-07-14",
    amount: 12000000,
    name: "iPhone 13",
    status: "Completed",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 15000000,
    name: "iPhone 14",
    status: "Pending",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 10000000,
    name: "iPhone 13",
    status: "Completed",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 13000000,
    name: "iPhone 14",
    status: "Completed",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 14000000,
    name: "iPhone 14",
    status: "Pending",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 11000000,
    name: "iPhone 13",
    status: "Completed",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 12500000,
    name: "iPhone 14",
    status: "Completed",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 13500000,
    name: "iPhone 14",
    status: "Pending",
    quantity: 1,
  },
  {
    date: "2023-07-14",
    amount: 11500000,
    name: "iPhone 13",
    status: "Completed",
    quantity: 1,
  },
];


export const donutChartData = [
  { label: "Acquisition", value: 60 },
  { label: "Purchase", value: 10 },
  { label: "Retention", value: 30 },
];


export const users = [
  { name: 'John', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "sender" },
  { name: 'Alice', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: false, type: "sender" },
  { name: 'Bob', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "receiver" },
  { name: 'Emily', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: false, type: "sender" },
  { name: 'Michael', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "receiver" },
  { name: 'Sophia', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: false, type: "sender" },
  { name: 'David', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "sender" },
  { name: 'Olivia', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: false, type: "sender" },
  { name: 'Daniel', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "receiver" },
  { name: 'Isabella', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: false, type: "sender" },
  { name: 'Ethan', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "receiver" },
  { name: 'Ava', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: false, type: "sender" },
  { name: 'Alexander', chats: "Hi, I would like to know more about the product.", time: "12:57 am", date: "12 August 2022", new: true, type: "receiver" },
];
