import Options from "./components/menu/Options.jsx"
import { MainDiv } from "./components/menu/StsMenu.js"
import { TopMenu } from "./components/menu/StsMenu.js"
import { StyledMenuDiv } from "./components/menu/StsMenu.js"

function App() {

  return (
    <>
    <MainDiv>
      <TopMenu>
        <Options />
      <StyledMenuDiv id="menudiv">

      </StyledMenuDiv>
      </TopMenu>
    </MainDiv>
    </>
  )
}

export default App
