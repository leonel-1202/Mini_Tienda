import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-badge"> Colección Actual </div>
                <h1 className="home-title">
                    Mini Tienda  <br />
                </h1>
                <p className="home-subtitle">
                    Encuentra ropa y accesorios con estilo.
                </p>
                <Link to="/productos" className="home-cta">
                    Ver catálogo →
                </Link>
                
                <div className="home-stats">
                    <div className="stat">
                        <span className="stat-number"> 4+ </span>
                        <span className="stat-label"> Productos </span>
                    </div>
                    <div className="stat">
                        <span className="stat-number"> 100% </span>
                        <span className="stat-label"> Calidad </span>
                    </div>
                    <div className="stat">
                        <span className="stat-number"> 24h </span>
                        <span className="stat-label"> Envío </span>
                    </div>
                </div>
        </div>
    );
}

export default Home;