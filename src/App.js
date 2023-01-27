
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Meals from './components/Meals/Meals';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/meals',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
          },
          element: <Meals></Meals>
        }
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
