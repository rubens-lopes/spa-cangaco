import Cabeçalho from '&/componentes/cabecalho'

document.addEventListener(`DOMContentLoaded`, () => {
  const cabeçalho = new Cabeçalho({
    título: `teste`,
  })

  const cabeçalho1 = new Cabeçalho({
    id: `cabeçalho-1`,
    título: `outro título`,
  })

  setTimeout(() => cabeçalho.definirTítulo(`título`), 2 * 1000)
})
