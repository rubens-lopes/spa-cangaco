import { Componente } from '&/componentes/componente'
import VisualizaçãoCabeçalho from './visualizacao'
import ModeloCabeçalho from './modelo'

export default class Cabeçalho extends Componente<VisualizaçãoCabeçalho, ModeloCabeçalho> {
  
  constructor({ id, título, subtítulo }: IdComponente & ModeloCabeçalho) {
    super(new VisualizaçãoCabeçalho(`[data-cabeçalho="${id ?? ``}"]`), new ModeloCabeçalho(título, subtítulo), `título`, `subtítulo`)
  }

  definirSubtítulo(subtítulo: string) {
    this.modelo.subtítulo = subtítulo
  }

  definirTítulo(título: string) {
    this.modelo.título = título
  }
}