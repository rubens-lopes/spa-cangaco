import FormulárioCabeçalho from './componentes/formulario-cabecalho/controle'
import './estilos.scss'

document.addEventListener(`DOMContentLoaded`, () => {
  new FormulárioCabeçalho({ id: 1, título: `Olá`, subtítulo: `Mundo` })
  new FormulárioCabeçalho({ id: 2, título: `Olá`, subtítulo: `Matheus` })
})
