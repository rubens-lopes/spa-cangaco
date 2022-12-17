import { Componente, ParâmetrosClicoDeVida } from '&/componentes/componente'
import ModeloEntradaDeTexto, { type ParâmetrosModeloEntradaDeTexto } from './modelo'
import VisualizaçãoEntradaDeTexto from './visualizacao'

export default class EntradaDeTexto extends Componente<VisualizaçãoEntradaDeTexto, ModeloEntradaDeTexto> {
  constructor({ id, nome, aoDigitar }: IdComponente & ParâmetrosModeloEntradaDeTexto) {
    super(new VisualizaçãoEntradaDeTexto(`[data-entrada-de-texto="${id ?? ``}"]`), new ModeloEntradaDeTexto({ nome, aoDigitar }), `nome`, `definirAoDigitar`)
  }

  vincular({ visualização, modelo }: ParâmetrosClicoDeVida<VisualizaçãoEntradaDeTexto, ModeloEntradaDeTexto>): void {
    visualização.elementoDeEntrada
      && visualização.elementoDeEntrada.addEventListener(`keyup`, () => { modelo.aoDigitar(visualização.elementoDeEntrada!.value) })
  }
}