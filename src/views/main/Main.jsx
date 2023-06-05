import ImagemMissao from '../../assets/images/ImagemMissao.png'
import Adubo from '../../assets/images/adubo.png'

import '../main/style.css'

function Main(){
  return (
    <>
      <div className="banner">
        <div className="bannerFilter">
          <div className="bannerContent">
            <h1>Faça parte dessa revolução verde e contribua para um mundo mais limpo e sustentável.</h1>
            <button id="bannerButton">Junte-se a nós</button>
          </div>
        </div>
      </div>
      <div className="ourMission">
        <div className='missionText'>
          <h1>Nossa missão</h1>
          <h2>Estamos trabalhando em um projeto inovador que visa  reduzir a quantidade de resíduos orgânicos que são enviados para aterros sanitários, contribuindo para a diminuição da poluição ambiental, além de gerar um novo valor para o que seria um desperdício poder virar um benéficio.</h2>
        </div>
        <div className='divImage'>
          <img src={ImagemMissao} alt="" className='imgMission'/>
        </div>
      </div>
      <div className="emporium">
        <div className="bannerFilter">
          <div className="bannerContent">
            <h1>Seja um estabelecimento parceiro</h1>
            <h2>Essa iniciativa é uma excelente oportunidade de se destacar como um estabelecimento preocupado com a responsabilidade ambiental, o que pode atrair clientes conscientes e leais, que valorizam essas práticas.</h2>
            <button id="bannerButton">Saiba mais</button>
          </div>
        </div>
      </div>
      <div className="adubo">
        <div className='aduboDivImage'>
          <img src={Adubo} alt="" className='imgMission'/>
        </div>
        <div className='aduboText'>
          <h2>O uso de adubo orgânico tem uma série de benéficios para a produção agrícola. Esse tipo de adubo é rico em nutrientes essenciais, melhorando a qualidade do solo e aumentando a produtividade das culturas, além de ser uma alternatica a fertilizantes químicos.</h2>
        </div>
      </div>
    </>
  )
}

export default Main