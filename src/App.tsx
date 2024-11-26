import AppMenu from './components/menu/AppMenu.tsx'
import { MainDiv, TopMenu, StyledMenuDiv } from './components/menu/StsMenu.ts'

function App() {

  return (
    <>
    <MainDiv>
      <TopMenu>
        <AppMenu />
      <StyledMenuDiv id="menudiv">

      </StyledMenuDiv>
      </TopMenu>
    </MainDiv>
    </>
  )
}

export default App
