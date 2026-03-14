import './index.css'

import Header from './componets/Header'
import Counter from './componets/Counter'

function App() {

  return (
    <>
      <Header text = "Counter" />
      <Counter plusButton={"+"} minusButton={"-"}/>
    </>
  )
}

export default App