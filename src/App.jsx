import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import TituloEstilizado from "./components/Banner"
import Banner from "./components/Banner"
import bannerBackground from '../public/imagens/background.png'

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

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <BarraLateral />
        <TituloEstilizado />
        <Banner
          texto="A galeria mais completa de fotos do espaço!"
          backgroundImage={bannerBackground}
        />
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
