import Cabeçalho from '&/componentes/cabecalho/controle'
import { Componente, ParâmetrosClicoDeVida } from '&/componentes/componente'
import EntradaDeTexto from '&/componentes/entrada-de-texto/controle'
import ModeloFormulárioCabeçalho from './modelo'
import VisualizaçãoFormulárioCabelhaço from './visualizacao'

export type ParâmetrosFormulárioCabeçalho = IdComponente & ModeloFormulárioCabeçalho

export default class FormulárioCabeçalho extends Componente<VisualizaçãoFormulárioCabelhaço> {
  constructor({ id, título, subtítulo }: ParâmetrosFormulárioCabeçalho) {
    super(new VisualizaçãoFormulárioCabelhaço(`[data-formulário-cabeçalho="${id ?? ``}"]`), { id, título, subtítulo })
  }

  vincular({ modelo }: ParâmetrosClicoDeVida<VisualizaçãoFormulárioCabelhaço, ParâmetrosFormulárioCabeçalho>): void {
    const cabeçalho = new Cabeçalho({ id: `cabeçalho-${modelo.id}`, título: modelo.título, subtítulo: modelo.subtítulo })

    new EntradaDeTexto({ 
      nome: `Título`,
      id: `título-${modelo.id}`,
      aoDigitar: (conteúdo: string) => cabeçalho.definirTítulo(conteúdo),
      })
  }
}