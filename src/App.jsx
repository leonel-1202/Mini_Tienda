import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Detalle from './pages/Detalle';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
export default App