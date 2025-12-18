import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { List } from './pages/List'
import { Create } from './pages/Create'
import { Update } from './pages/Update'

// Importaciones para Categorías (Ajusta las rutas según tu carpeta)
import { List_Ca } from './pages/crud_categoria/List_Ca'
import { Create_Ca } from './pages/crud_categoria/Create_Ca'
import { Update_Ca } from './pages/crud_categoria/Update_Ca'

import './App.css'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />

          <Route path='/categorias' element={<List_Ca />} />
          <Route path='/categorias/create' element={<Create_Ca />} />
          <Route path='/categorias/update/:id' element={<Update_Ca />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 

