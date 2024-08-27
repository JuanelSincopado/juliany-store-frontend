import { useState } from "react";
import ProductContext from "./home_context";
import supabase from "../../../config/supabase";

const ProductState = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  const getProducts = async () => {
    setProductsLoading(true);
    try {
      const { data, error } = await supabase
        .from("product")
        .select()
        .eq("visible", true);

      if (error) {
        console.error(error);
        alert("An unexpected error occurred");
        return;
      }

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setProductsLoading(false);
    }
  };

  const getProductsByCategory = async (categoryId) => {
    setProductsLoading(true);
    try {
      if (!categoryId) {
        getProducts();
        return;
      }

      const { data, error } = await supabase
        .from("product")
        .select()
        .eq("category", categoryId)
        .eq("visible", true);

      if (error) {
        console.error(error);
        alert("An unexpected error occurred");
        return;
      }

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products by category", error);
    } finally {
      setProductsLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsLoading,
        getProductsByCategory,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
