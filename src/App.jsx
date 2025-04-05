import { BrowserRouter, Routes, Route  } from 'react-router';

import { DashboardPage} from './pages/dashboard'
import { MyCollection } from './pages/mycollection';
import { Details } from './pages/details';
import { Layout } from './pages/Layout';
import { About } from './pages/about';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route index element={<DashboardPage/>} />
          <Route path="my-collection" element={<MyCollection/>} />
          <Route path="about" element={<About />} />
          <Route path="details/:pokeid" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


/**
  Functional Component
  Statefull Components
 */

export default App
