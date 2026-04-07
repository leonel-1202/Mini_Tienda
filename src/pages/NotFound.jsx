import { useNavigate } from "react-router-dom";
import './NotFound.css';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="notfound">
            <div className="notfound-code"> 404 </div>
            <h2 className="notfound-title"> Página no encontrada </h2>
            <p className="notfound-msg"> La ruta que buscas no existe o fue movida. </p>
            <div className="notfound-actions">
                <button onClick={() => navigate('/')} className="btn-primary"> 🏠 Ir al inicio </button>
                <button onClick={() => navigate(-1)} className="btn-secondary"> ← Volver </button>
            </div>
        </div>
    );
}

export default NotFound;