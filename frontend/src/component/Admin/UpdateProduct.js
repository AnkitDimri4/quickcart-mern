import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import {
  clearErrors,
  updateProduct,
  getProductDetails,
} from "../../actions/productAction";
import { Button, TextField, MenuItem } from "@mui/material";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SideBar from "./Sidebar";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./newProduct.css";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: productId } = useParams(); 

  const { error, product } = useSelector((state) => state.productDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
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
    if (!product || product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.Stock);
      setOldImages(product.images);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Product Updated Successfully");
      navigate("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch, error, updateError, isUpdated, product, productId, navigate]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(updateProduct(productId, myForm));
  };

  const updateProductImagesChange = (e) => {
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
      <MetaData title="Update Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Update Product</h1>

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
              type="number"
              label="Price"
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
              <MenuItem value="">Choose Category</MenuItem>
              {categories.map((cate) => (
                <MenuItem key={cate} value={cate}>
                  {cate}
                </MenuItem>
              ))}
            </TextField>

            {/* Stock */}
            <TextField
              fullWidth
              type="number"
              label="Stock"
              required
              value={stock}
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

            {/* Upload Button */}
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
                onChange={updateProductImagesChange}
              />
            </Button>

            {/* Old Images */}
            <div className="imagePreviewContainer">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img
                    key={index}
                    src={image?.url || image}
                    alt="Old Product"
                  />
                ))}
            </div>

            {/* New Images Preview */}
            <div className="imagePreviewContainer">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="New Preview" />
              ))}
            </div>

            {/* Update Button */}
            <Button
              id="createProductBtn"
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{ mt: 2, py: 1.2 }}
            >
              Update Product
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
