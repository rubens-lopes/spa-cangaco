import Visualização from '&/componentes/visualizacao'
import ModeloCabeçalho from './modelo'

export default class VisualizaçãoCabeçalho extends Visualização<ModeloCabeçalho> {
  protected obterVisualização(modelo: ModeloCabeçalho): string {
    return `
      <h1>${modelo.título}</h1>
    `
  }
}