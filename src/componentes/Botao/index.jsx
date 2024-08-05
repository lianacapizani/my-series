import './Botao.css'

export function Botao(props) {
    return (<button className='botao'>
        {props.children}
    </button>)
}

