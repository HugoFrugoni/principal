import React from 'react'
import '../Paginas/ApiEsterna.css'


const ApiEsterna = ({promotions}) =>{
    return(
        <div className='Api' >
            <img className='Api_image' src={promotions.imageUrl} alt={promotions.title} />
            <div className='Api_info'>
                <h1 className='Api_titulo' >{promotions.title}</h1>
                <span className='Api_preco' >R$: {promotions.price} </span>
                <footer className='Api_rodape' >
                    {promotions.comments.length > 0 &&(
                        <div  className='Api_comente' >
                           " {promotions.comments[0].comment} "
                        </div>
                    )}
                    <div className='Api_comentario' > {promotions.comments.length} Comentários</div>
                    <a  className='Api_link'  href={promotions.url} target='blank' >Ir para o site</a>
                </footer>
            </div>
        </div>
    )

}
export default ApiEsterna;



