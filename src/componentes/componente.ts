import Visualização from './visualizacao'
import VincularVisualizaçãoEModelo from '&/auxiliares/vincular-visualizacao-e-modelo'

export interface ParâmetrosClicoDeVida<TVisualização, TModelo> {
  visualização: TVisualização
  modelo: TModelo
}

export interface Componente<TVisualização extends Visualização<TModelo>, TModelo = unknown> {
  vincular?(parâmetros: ParâmetrosClicoDeVida<TVisualização, TModelo>): void
  desvincular?(parâmetros: ParâmetrosClicoDeVida<TVisualização, TModelo>): void
}

export abstract class Componente<TVisualização extends Visualização<TModelo>, TModelo = unknown> {
  protected readonly modelo: TModelo

  constructor(visualização: TVisualização, modelo?: TModelo & object, ...propriedades: (keyof TModelo)[]) {
    this.modelo = VincularVisualizaçãoEModelo({
      visualização,
      modelo,
      vincular: this.vincular,
      desvincular: this.desvincular,
      propriedades,
    })
  }
}