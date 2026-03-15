import './index.css'

import Header from './componets/Header'
import Counter from './componets/Counter'
import Reset from './componets/Reset'

function App() {

  return (
    <>
      <Header text = "Counter" />
      <Reset text = "Reset Counter" />
      <Counter plusButton={"+"} minusButton={"-"}/>
    </>
  )
}

export default App