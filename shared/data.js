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

// const labels = ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'];

// export const barChartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//       display: false,
//     },
//     title: {
//       display: false,
//       text: 'Chart.js Bar Chart',
//     },
//   },
//   chart: {
//     type: 'bar',
//     height: 200,
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 10, // Set the value to create rounded bars
//     },
//   },
//   grid: {
//     show: false, // Set show to false to remove the grid background
//   },
// };

// export const barChartData = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 20, max: 100 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };