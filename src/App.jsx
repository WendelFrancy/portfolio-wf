import AppMenu from "./components/menu/AppMenu.jsx"
import { MainDiv, TopMenu, StyledMenuDiv } from "./components/menu/StsMenu.js"

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
