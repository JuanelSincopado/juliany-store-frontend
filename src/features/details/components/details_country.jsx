import { useContext } from "react";
import DetailsContext from "../context/details_context";
import { formatNumber } from "../../../shared/utils/format_numbers";

const DetailsCountry = () => {
  const { product } = useContext(DetailsContext);

  return (
    <div className="details__country_list">
      {product.country &&
        product.country.map((country, index) => (
          <div key={index} className="details__country_container">
            <img
              src={
                country.country === "Venezuela"
                  ? "/Venezuela.webp"
                  : "/colombia.png"
              }
              alt={country.country}
            />

            <p className="contact">Contacto: {country.phone}</p>

            <p className="price">
              {country.country === "Venezuela"
                ? `Bs. ${formatNumber(country.price)}`
                : `COP ${formatNumber(country.price)}`}
            </p>
          </div>
        ))}
    </div>
  );
};

export default DetailsCountry;
