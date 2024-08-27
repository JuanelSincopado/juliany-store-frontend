import { useContext, useEffect } from "react";
import Category from "../../../shared/components/category";
import CategoryContext from "../../category/context/category_context";

const HomeListCategories = () => {
  const { categories, categoriesLoading, getCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  if (categoriesLoading) {
    return (
      <div className="loader__container">
        <span className="min__loader"></span>
      </div>
    );
  }

  return (
    <div className="list__categories">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default HomeListCategories;
