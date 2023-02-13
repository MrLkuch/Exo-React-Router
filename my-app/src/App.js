import './App.css';
import { BrowserRouter as RouterContainer, Routes, Route } from 'react-router-dom';
import BlogList from './Components/BlogList';
import Blog from './Components/Blog';


// Créez un composant BlogList qui affichera la liste de tous les blogs disponibles. Chaque blog aura un titre et un résumé, et chaque entrée de blog devra être un lien cliquable vers la page détaillée du blog.
// Créez un composant BlogPost qui affichera les détails d'un blog particulier, nous allons juste afficher dans un h1 : Article N°, avec l'id renseigné plus tard.
// Dans le composant Router, utilisez les composants Route pour définir les pages de votre application. Assurez-vous d'utiliser les propriétés path et element pour lier une URL à un composant.
// Utilisez la prop :id dans l'URL pour permettre à React Router DOM de capturer l'ID unique de chaque blog. Vous pouvez récupérer cette valeur en utilisant useParams dans le composant BlogPost et en la passant à une fonction qui retourne les détails du blog correspondant à cet ID.

function App() {
  const blogs = [
    {
      id: 1,
      title: 'Titre 1',
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 2,
      title: 'Titre 2',
      description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero laudantium quia hic in incidunt voluptatum similique molestiae sed, consequatur esse, cumque nam quae dicta nisi odio ea magnam veniam veritatis. Quis esse ipsa distinctio ut itaque architecto facilis unde?"
    },
    {
      id: 3,
      title: 'Titre 3',
      description: "Lorem ipsum dolor."
    },
    {
      id: 4,
      title: 'Titre 4',
      description: "Lorem ipsum dolor sit amet dolor sit amet."
    },
  ]

  return (
    <RouterContainer>
      <Routes>
        <Route path='/' element={<BlogList blogs={blogs} />} />
        <Route path='/blog/:id' element={<Blog blogs={blogs} />} />
      </Routes>
    </RouterContainer>
  );
}

export default App;
