import { useContext } from "react";
import DetailsContext from "../context/details_context";

const DetailsDescription = () => {
  const { product } = useContext(DetailsContext);

  return <p className="details__description">{product.description}</p>;
};

export default DetailsDescription;
