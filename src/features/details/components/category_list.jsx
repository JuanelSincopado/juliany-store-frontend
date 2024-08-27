import { useContext } from "react";
import Category from "../../../shared/components/category";
import DetailsContext from "../context/details_context";

const Categorylist = () => {
  const { product } = useContext(DetailsContext);

  return (
    <div className="details__category_list">
      <Category category={product.category} />
    </div>
  );
};

export default Categorylist;
