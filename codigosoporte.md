itemContainer

import { Container} from "@mui/material";
import Lata from '../../assets/img/lata.webp'

const itemListContainer = (props) =>{

    const {titulo, precio} = props

    function Añadir(){
        console.log('✿ Añadido al carrito ✿')
    }

    return(
        <>
            <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh', // Centra verticalmente
            }}
            maxWidth="sm" // Ajusta el ancho máximo
            >
                <div className="card-product">
                    <img src={Lata} alt="" className="lata"/>
                    <h2> {titulo} </h2>
                    <h3> {precio} U$D </h3>
                    <button onClick={Añadir} className="btnAñadir"> Añadir al carrito </button>
                </div>
            
            </Container>
        </>
    )
}

export default itemListContainer;