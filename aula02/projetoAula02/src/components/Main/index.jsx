import "./styles.css"
import mainimg from '../../imgs/mainimg.jpg'

export function Main(){
    
    return(
        <>
            <div id="main">
                <div id="img">
                    <img src={mainimg} alt="Pessoa no meio da sala" />
                </div>


            <h1>Transformando <span>espaço</span>, Criando <span>história</span></h1>
            
            <p>
                Nós criamos ambientes <strong>exclusivos</strong> e <strong>únicos</strong>, com muito bom gosto e profissionalismo,
                investimos tempo e <span>dedicação no seu projeto</span>. Nosso compromisso vai além de
                simplesmente decorar.
                <br />
                <br />
                Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância</strong> e <strong>finesse</strong> para todo 
                aquele que estiver ali. Sua história visual começa aqui!
            </p>

            </div>
            
                       
        </>
    )
}