import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import bannerBackground from '../public/imagens/background.png'
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"
import { useState } from "react"
import fotos from './fotos.json'

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #1A0433 4.16%, #04244F 48%, #154580 96.76%, #154580 96.76%);
  width: 100%;
  min-height:100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom />
    </FundoGradiente>
  )
}

export default App
