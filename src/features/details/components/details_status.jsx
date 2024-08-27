import { useContext } from "react";
import DetailsContext from "../context/details_context";

const DetailsStatus = () => {
  const { product } = useContext(DetailsContext);

  return (
    <p className="details__status">
      Estado:{" "}
      {product.status === 1 ? (
        <span className="details__status--active">Disponible </span>
      ) : (
        <span className="details__status--inactive">Agotado </span>
      )}
    </p>
  );
};

export default DetailsStatus;
