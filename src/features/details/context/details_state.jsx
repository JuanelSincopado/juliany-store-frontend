import { useState } from "react";
import DetailsContext from "./details_context";
import supabase from "../../../config/supabase";

const DetailsState = ({ children }) => {
  const [product, setProduct] = useState({});
  const [productLoading, setProductLoading] = useState(false);

  const getProduct = async (id) => {
    setProductLoading(true);

    try {
      const { data, error } = await supabase
        .from("product")
        .select()
        .eq("id", id);

      if (error) {
        console.error(error);
        alert("An unexpected error occurred");
        return;
      }

      setProduct(data[0]);
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred");
    } finally {
      setProductLoading(false);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        product,
        productLoading,
        getProduct,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsState;
