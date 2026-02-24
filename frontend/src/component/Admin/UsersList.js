import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid"; 
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import { Button } from "@mui/material"; 
import MetaData from "../layout/MetaData";
import EditIcon from "@mui/icons-material/Edit"; 
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "./Sidebar";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { error, users } = useSelector((state) => state.allUsers);
  const { error: deleteError, isDeleted, message } = useSelector(
    (state) => state.profile
  );

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      toast.success(message);
      navigate("/admin/users"); // v6
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, error, deleteError, isDeleted, message, navigate]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180,  flex: 0.8, headerClassName: "superHeader"},
    { field: "email", headerName: "Email", minWidth: 200, flex: 1, headerClassName: "superHeader"},
    { field: "name", headerName: "Name", minWidth: 150, flex: 0.5, headerClassName: "superHeader" },
    {
      field: "role",
      headerName: "Role",
      headerClassName: "superHeader",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) =>
        params.value === "admin" ? "greenColor" : "redColor",
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
          <Link to={`/admin/user/${params.id}`}>
            <EditIcon />
          </Link>
          <Button onClick={() => deleteUserHandler(params.id)}>
            <DeleteIcon />
          </Button>
        </Fragment>
      ),
    },
  ];

  const rows = users
    ? users.map((user) => ({
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      }))
    : [];

  return (
    <Fragment>
      <MetaData title="ALL USERS - Admin" />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

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

export default UsersList;
