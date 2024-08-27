import { useState } from "react";
import supabase from "../../../config/supabase";
import CategoryContext from "./category_context";

const CategoryState = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoryIdSelected, setCategorySelected] = useState(null);

  const getCategories = async () => {
    try {
      const { data, error } = await supabase.from("category").select("*");

      if (error) {
        console.error(error);
        alert("Ocurrio un error al obtener las categorias");
        return;
      }

      setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setCategoriesLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        categoryIdSelected,
        categoriesLoading,
        getCategories,
        setCategorySelected,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
