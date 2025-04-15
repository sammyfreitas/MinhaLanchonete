import './App.css'
import './styles.css'
import Cardapio from "./components/cardapio"
 
function App() {

  return (
    <>
      {/* Ícones das redes sociais */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/tony-s-freitas/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://sammyfreitas.github.io/portfolioSite/" target="_blank"><i className="fas fa-globe"></i></a>
        <a href="https://github.com/sammyfreitas" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.instagram.com/anthony_tijuduke" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="mailto:tonysdefreitas@gmail.com?subject=Fale%20Conosco"><i className="far fa-envelope"></i></a>
        <a href="https://wa.me/5521975287327" target="_blank" className="whatsapp-link"><i className="fab fa-whatsapp"></i></a>
      </div>
      
      <div class="titulo-Cardapio"> 
        <h3>Tony's Lanche</h3>
      </div>
      
      <div class="menu-container">            
            <Cardapio />
            <Cardapio />
            <Cardapio />
      </div>

      <footer>
        Desenvolvido por <a href="https://github.com/sammyfreitas/portfolioSite" target="_blank">Anthony Freitas</a>, no Curso de Programador FrontEnd do Senai (2025) Todos os direitos reservados
      </footer>
    </>
  )
}

export default App;
