import "../css/home_css.css";
import HomeHeader from "../components/home_header";
import HomeListCategories from "../components/home_list_categories";
import HomeListItems from "../components/home_list_items";
import WhatsappFloatButton from "../../../shared/components/whatsapp_float_button";

const HomeView = () => {
  return (
    <div className="homeView__container">
      <HomeHeader />

      <HomeListCategories />

      <HomeListItems />

      <WhatsappFloatButton />
    </div>
  );
};

export default HomeView;
