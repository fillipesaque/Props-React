import { Fragment } from "react"
import Card from './components/Card'
import imgCard1 from './assets/img1.jpg'
import imgCard2 from './assets/img2.jpg'
import imgCard3 from './assets/img3.jpg'


function App() {
    return(
      <Fragment>
        <Card title='Pôster: Star Wars 01' imgCard={imgCard1} btntext='Comprar agora 01' text='Descriçao 01 Um Poster decorativo epico do filme Star Wars, com moldura de Mdf e tamanho A3.Uma otima recordaçao de um dos mais iconicos filmes de todos os tempos . Este classico poster trara aventura , nostalgia e a magia de star wars para qualquer lugar que voce decidir pendurar. Nao perca a chance de dicionaer essa linda memoria ao seu acervo'></Card>
        <Card title='Pôster: Star Wars 02' imgCard={imgCard2} btntext='Comprar agora 02' text='Descriçao 02 Um Poster decorativo epico do filme Star Wars, com moldura de Mdf e tamanho A3.Uma otima recordaçao de um dos mais iconicos filmes de todos os tempos . Este classico poster trara aventura , nostalgia e a magia de star wars para qualquer lugar que voce decidir pendurar. Nao perca a chance de dicionaer essa linda memoria ao seu acervo'></Card>
        <Card title='Pôster: Star Wars 03' imgCard={imgCard3} btntext='Comprar agora 03' text='Descriçao 03 Um Poster decorativo epico do filme Star Wars, com moldura de Mdf e tamanho A3.Uma otima recordaçao de um dos mais iconicos filmes de todos os tempos . Este classico poster trara aventura , nostalgia e a magia de star wars para qualquer lugar que voce decidir pendurar. Nao perca a chance de dicionaer essa linda memoria ao seu acervo'></Card>
      </Fragment>
    )
}

export default App
