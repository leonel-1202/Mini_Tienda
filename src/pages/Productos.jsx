import { Link } from "react-router-dom";
import './Productos.css';

const items = [
    { id: 1, nombre: 'Camiseta', precio: '25.000', emoji: '👕', categoria: 'Ropa' },
    { id: 2, nombre: 'Pantalon', precio: '40.000', emoji: '👖', categoria: 'Ropa' },
    { id: 3, nombre: 'Zapatos', precio: '80.000', emoji: '👟', categoria: 'Calzado' },
    { id: 4, nombre: 'Mochila', precio: '55.000', emoji: '🎒', categoria: 'Accesorios' },
];

function Productos() {
    return (
        <div className="productos">
            <div className="productos-header">
                <h1 className="productos-title"> Catálogo </h1>
                <span className="productos-count">{items.length} productos </span>
            </div>
            <div className="productos-grid">
                {items.map(item => (
                <Link key={item.id} to={`/productos/${item.id}`} className="producto-card">
            <div className="producto-emoji">{item.emoji}</div>
            <div className="producto-info">
                <span className="producto-categoria">{item.categoria}</span>
                <h2 className="producto-nombre">{item.nombre}</h2>
                    <div className="producto-footer">
                        <span className="producto-precio">${item.precio}</span>
                        <span className="producto-ver"> Ver → </span>
                    </div>
                </div>
            </Link>
            ))}
        </div>
    </div>
    );
}

export default Productos;