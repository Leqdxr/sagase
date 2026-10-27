import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Layout from './Layout';
import AnimeDetails from './pages/AnimeDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="anime-details/:animeId" element={<AnimeDetails />} />
    </Route>
  ),
  {basename: import.meta.env.BASE_URL}
)

function App() {
    return <RouterProvider router={router} />
}

export default App;
