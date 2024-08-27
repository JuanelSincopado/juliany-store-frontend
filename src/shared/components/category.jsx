import { useContext } from "react";
import ProductContext from "../../features/product/context/home_context";
import CategoryContext from "../../features/category/context/category_context";

const Category = ({ category }) => {
  const { getProductsByCategory } = useContext(ProductContext);

  const { categoryIdSelected, setCategorySelected } =
    useContext(CategoryContext);

  const handleClick = () => {
    if (categoryIdSelected === category.id) {
      setCategorySelected(null);
      getProductsByCategory(null);
    } else {
      setCategorySelected(category.id);
      getProductsByCategory(category.id);
    }
  };

  return (
    <div
      className={`category ${
        categoryIdSelected === category.id ? "category--selected" : ""
      }`}
      onClick={() => {
        handleClick();
      }}
    >
      {category.name}
    </div>
  );
};

export default Category;
