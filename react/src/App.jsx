import Card from "./components/Card"
import { tutorialData} from './data/TutorialData'
import { useState } from "react"


function App() {
  const [step] = useState(0) 


  return (
    <>
  <Card step = { step } data = { tutorialData[ step] }></Card>
    </>
  )
}

export default App
