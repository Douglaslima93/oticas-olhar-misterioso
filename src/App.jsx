import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topo from './componentes/header/Topo'
import Conteudo from './componentes/conteudo/Conteudo'
import Footer from './componentes/rodape/Footer'





function App() {

  return (
    <div>
      <Topo/>
      <Conteudo/>
      <Footer/>
     <a className='iconsubir' href='#topo'><img  src='./img/icons8-upload-50.png'/></a>
      </div>
    
  )
}

export default App
