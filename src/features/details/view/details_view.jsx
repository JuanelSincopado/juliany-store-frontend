import "../css/details_css.css";

import DetailsHeader from "../components/details_header";
import WhatsappFloatButton from "../../../shared/components/whatsapp_float_button";
import ImgGrid from "../components/img_grid";
// import Categorylist from "../components/category_list";
import DetailsDescription from "../components/details_description";
import DetailsStatus from "../components/details_status";
import DetailsCountry from "../components/details_country";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import DetailsContext from "../context/details_context";

const DetailsView = () => {
  const { id } = useParams();

  const { product, productLoading, getProduct } = useContext(DetailsContext);

  useEffect(() => {
    getProduct(id);
    // eslint-disable-next-line
  }, []);

  if (productLoading) {
    return (
      <div className="loader__container">
        <span className="bigLoader"></span>
      </div>
    );
  }

  return (
    <div className="details__container">
      <DetailsHeader />

      <h3 className="details__title">{product.name}</h3>

      <ImgGrid />

      <DetailsDescription />

      <DetailsStatus />

      <DetailsCountry />

      <WhatsappFloatButton />
    </div>
  );
};

export default DetailsView;
