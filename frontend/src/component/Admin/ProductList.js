import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid"; 
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct, deleteProduct } from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom"; 
import { Button } from "@mui/material"; 
import MetaData from "../layout/MetaData";
import EditIcon from "@mui/icons-material/Edit"; 
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector((state) => state.product);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, deleteError, isDeleted, navigate]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 , headerClassName: "superHeader"},
    { field: "name", headerName: "Name", minWidth: 350, flex: 1 , headerClassName: "superHeader" },
    { field: "stock", headerName: "Stock", type: "number", minWidth: 150, flex: 0.3 , headerClassName: "superHeader"},
    { field: "price", headerName: "Price", type: "number", minWidth: 270, flex: 0.5, headerClassName: "superHeader" },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "superHeader",
      minWidth: 150,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => (
        <Fragment>
          <Link to={`/admin/product/${params.id}`}>
            <EditIcon />
          </Link>
          <Button onClick={() => deleteProductHandler(params.id)}>
            <DeleteIcon />
          </Button>
        </Fragment>
      ),
    },
  ];

  const rows = products
    ? products.map((item) => ({
        id: item._id,
        stock: item?.Stock,
        price: item?.price,
        name: item?.name,
      }))
    : [];

  return (
    <Fragment>
      <MetaData title="ALL PRODUCTS - Admin" />
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            className="dataGrid"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
