import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import InputAdornment from "@mui/material/InputAdornment";

import { Button, TextField, MenuItem } from "@mui/material";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Sidebar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Product Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, success, navigate]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            {/* Product Name */}
            <TextField
              fullWidth
              label="Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SpellcheckIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Price */}
            <TextField
              fullWidth
              label="Price"
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Description */}
            <TextField
              fullWidth
              label="Product Description"
              multiline
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Category */}
            <TextField
              select
              fullWidth
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountTreeIcon color="action" />
                  </InputAdornment>
                ),
              }}
            >
              {categories.map((cate) => (
                <MenuItem key={cate} value={cate}>
                  {cate}
                </MenuItem>
              ))}
            </TextField>

            {/* Stock */}
            <TextField
              fullWidth
              label="Stock"
              type="number"
              required
              value={Stock}
              onChange={(e) => setStock(e.target.value)}
              margin="normal"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StorageIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            {/* File Upload */}
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Upload New Images
              <input
                type="file"
                accept="image/*"
                hidden
                multiple
                onChange={createProductImagesChange}
              />
            </Button>

            {/* Image Preview */}
            <div className="imagePreviewContainer">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Preview" />
              ))}
            </div>

            {/* Button */}
            <Button
              id="createProductBtn"
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{ mt: 2, py: 1.2 }}
            >
              Create Product
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
