import "./styles.css"
import wave from '../../imgs/wave.png'
import { Menu } from '../Menu'

export function Footer(){
    return(
        <div id="footer">
            <div id="line"></div>
            {/* Menu */}
           
            <Menu/>


            <img id="wave" src={wave} alt="Imagem fundo do rodapé" />
        </div>
    )
}