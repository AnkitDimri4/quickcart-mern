import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid"; 
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import { Button } from "@mui/material"; 
import MetaData from "../layout/MetaData";
import EditIcon from "@mui/icons-material/Edit"; 
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "./Sidebar"; 
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { error, orders = [] } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    dispatch(getAllOrders()); 

    if (error) {
      toast.dismiss();
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.dismiss();
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.dismiss();
      toast.success("Order Deleted Successfully");
      navigate("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }
  }, [dispatch, error, deleteError, isDeleted, navigate]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 , headerClassName: "superHeader"},
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      headerClassName: "superHeader",
      cellClassName: (params) =>
        params.value === "Delivered" ? "greenColor" : "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      headerClassName: "superHeader",
      minWidth: 150,
      flex: 0.4,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerClassName: "superHeader",
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
        <Fragment>
          <Link to={`/admin/order/${params.id}`}>
            <EditIcon />
          </Link>
          <Button onClick={() => deleteOrderHandler(params.id)}>
            <DeleteIcon />
          </Button>
        </Fragment>
      ),
    },
  ];

  const rows = orders.map((item) => ({
    id: item._id,
    itemsQty: item.orderItems?.length || 0,
    amount: item.totalPrice,
    status: item.orderStatus,
  }));

  return (
    <Fragment>
      <MetaData title="ALL ORDERS - Admin" />

      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
