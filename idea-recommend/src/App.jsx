import { useState } from 'react'
import Search from './components/search'
import './App.css'
import Idea from './components/idea'

function App() {
  const [showFirst, setShowFirst] = useState(true)
  const [data, setData]  = useState(null)
  const [participantNum, setParticipantNum] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  function setPartiNum(value){
    setParticipantNum(value)
    setShowFirst(showFirst=> !showFirst)
    fetchApiData(value)
  }

  function handleBack(){
    setData(null)
    setShowFirst(showFirst=> !showFirst)
     
  }

  function newIdea(){
    fetchApiData(participantNum); 
  }
  
  async function fetchApiData(partiNum){
    console.log('partiNum', partiNum)
    try{
        setIsLoading(true);
        const response = await fetch(`https://www.boredapi.com/api/activity?participants=${partiNum}`)
        const data = await response.json()
        setData(data)
        console.log('data', data) 
    } catch (error){
        console.log('error occurred when fetching data')
    } finally{
      setIsLoading(false)
    }
}

  return (
    <>                  
      {showFirst ? (<Search partiNum ={participantNum} onPartiNumChange={setPartiNum}></Search>)
      : (<Idea data={data} onBack={handleBack} onNewIdea={newIdea} isLoading={isLoading}></Idea>) }
    </>
  )
}

export default App
