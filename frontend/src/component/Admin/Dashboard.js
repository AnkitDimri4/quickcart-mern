import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction";
import MetaData from "../layout/MetaData";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.products);
  const { orders = [] } = useSelector((state) => state.allOrders);
  const { users = [] } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  const outOfStock = products.filter((item) => item.Stock === 0).length;
  const totalAmount = orders.reduce((acc, order) => acc + order.totalPrice, 0);

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        data: [0, totalAmount],
        backgroundColor: "tomato",
        borderColor: "tomato",
        fill: true,
        tension: 0.5,
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        data: [outOfStock, products.length - outOfStock],
        backgroundColor: ["#de3a19c2", "#45bfcaca"],
        hoverBackgroundColor: ["#af310bdd", "#0a7e86"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography variant="h5" component="h1" gutterBottom sx={{ letterSpacing: "1px" }} > 
          Dashboard
        </Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> <strong>₹{totalAmount}</strong>
            </p>
          </div>

          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Products</p>
              <p>{products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} options={{ responsive: true, plugins: { legend: { display: true } } }} />
        </div>

        <div className="doughnutChart">
          <Doughnut
            data={doughnutState}
            options={{ responsive: true, plugins: { legend: { position: "bottom" } } }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
