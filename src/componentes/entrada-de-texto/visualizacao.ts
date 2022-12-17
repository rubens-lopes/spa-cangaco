import Visualização from '&/componentes/visualizacao'
import ModeloEntradaDeTexto from './modelo'

export default class VisualizaçãoEntradaDeTexto extends Visualização<ModeloEntradaDeTexto> {
  protected obterVisualização({ nome }: ModeloEntradaDeTexto) {
    return `
      <label>
        ${nome}
        <input type="text">
      <label>
    `
  }

  get elementoDeEntrada() {
    if (!this.elemento) return

    return this.elemento.querySelector<HTMLInputElement>(`input`)
  }
}