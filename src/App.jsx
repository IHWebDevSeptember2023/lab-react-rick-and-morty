import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CharactersPage from "./pages/CharactersPage"
import CharacterDetailsPage from "./pages/CharacterDetailsPage"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
