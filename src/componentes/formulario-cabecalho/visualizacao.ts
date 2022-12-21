import Visualização from '&/componentes/visualizacao'

export default class VisualizaçãoFormulárioCabelhaço extends Visualização<IdComponente> {
  protected obterVisualização({ id }: IdComponente) {
    return `
        <div data-cabeçalho="cabeçalho-${id}"></div>
        <div data-entrada-de-texto="título-${id}"></div>
        <div data-entrada-de-texto="subtítulo-${id}"></div>
    `
  }
}