import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material"; 
import LaunchIcon from "@mui/icons-material/Launch";
import MetaData from "../layout/MetaData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1, headerClassName: "superHeader" },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "superHeader",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) =>
        params.value === "Delivered" ? "greenColor" : "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      headerClassName: "superHeader",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "amount",
      headerName: "Amount",
      headerClassName: "superHeader",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "superHeader",
      minWidth: 150,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/order/${params.row.id}`}>
          <LaunchIcon />
        </Link>
      ),
    },
  ];

  const rows = orders?.map((item) => ({
    id: item._id,
    itemsQty: item.orderItems.length,
    status: item.orderStatus,
    amount: item.totalPrice,
  })) || [];

  return (
    <Fragment>
      <MetaData title={`${user?.name}'s Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <Typography id="myOrdersHeading">{user?.name}'s Orders</Typography>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            autoHeight
            disableSelectionOnClick
            className="myOrdersTable"
          />
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
