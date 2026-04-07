import { useParams, useNavigate } from "react-router-dom";
import './Detalle.css';

const productos = {
    1: { nombre: 'Camiseta', precio: '25.000', emoji: '👕', categoria: 'Ropa', descripcion: 'Camiseta de algodón.' },
    2: { nombre: 'Pantalon', precio: '40.000', emoji: '👖', categoria: 'Ropa', descripcion: 'Pantalón jeans' },
    3: { nombre: 'Zapatos', precio: '80.000', emoji: '👟', categoria: 'Calzado', descripcion: 'Zapatos deportivos.' },
    4: { nombre: 'Mochila', precio: '55.000', emoji: '🎒', categoria: 'Accesorios', descripcion: 'Mochila mediana.' },
};

function Detalle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const producto = productos[id];

    if (!producto) return (
        <div className="detalle-error">
            <span> X </span>
            <p> Este producto no existe. </p>
            <button onClick={() => navigate('/productos')}> Volver al catálogo j</button>
        </div>
    );

    return (
        <div className="detalle">
            <button className="detalle-back" onClick={() => navigate(-1)}>
                ← Volver
            </button>

            <div className="detalle-card">
                <div className="detalle-emoji">{producto.emoji}</div>
                <div className="detalle-info">
                    <span className="detalle-categoria">{producto.categoria}</span>
                    <h1 className="detalle-nombre">{producto.nombre}</h1>
                    <p className="detalle-descripcion">{producto.descripcion}</p>
                    <div className="detalle-precio-row">
                        <span className="detalle-precio">${producto.precio}</span>
                        <button className="detalle-cta"> Agregar al carrito 🛒 </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalle;