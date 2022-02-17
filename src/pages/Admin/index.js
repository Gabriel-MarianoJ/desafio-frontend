import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import config1 from "../../assets/icons/config1.png";
import user1 from "../../assets/icons/user1.png";
import analytics1 from "../../assets/icons/analytics1.png";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <Header />

      <div className="container con">
        <div className="row">
          <div className="col-sm-6" id="primeiro">
            <Cards image={analytics1} text="Dashboard" />
          </div>

          <div className="col-sm-6">
            <Cards image={user1} text="Gerenciar usuários" />
          </div>

          <div className="col-sm-6">
            <Cards image={config1} text="Configurações" />
          </div>
        </div>
      </div>
        <div className="fixed-bottom">
        <Footer />
        </div>
      
    </div>
  );
};

export default Admin;
