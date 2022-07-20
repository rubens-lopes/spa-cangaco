import { Componente } from '&/componentes/componente'
import VisualizaçãoCabeçalho from './visualizacao'
import ModeloCabeçalho from './modelo'

export default class Cabeçalho extends Componente<VisualizaçãoCabeçalho, ModeloCabeçalho> {
  
  constructor({ id, título }: IdComponente & ModeloCabeçalho) {
    super(new VisualizaçãoCabeçalho(`[data-cabeçalho="${id ?? ``}"]`), new ModeloCabeçalho(título), `título`)
  }

  definirTítulo(título: string) {
    this.modelo.título = título
  }
}