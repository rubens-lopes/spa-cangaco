import type Visualização from '&/componentes/visualizacao'
import type { ParâmetrosClicoDeVida } from '&/componentes/componente'

interface ParâmetrosVincularVisualizaçãoEModelo<TVisualização, TModelo> {
  visualização: TVisualização
  modelo?: TModelo
  propriedades?: (keyof TModelo)[]
  vincular?: (parâmetros: ParâmetrosClicoDeVida<TVisualização, TModelo>) => void
  desvincular?: (parâmetros: ParâmetrosClicoDeVida<TVisualização, TModelo>) => void
}

export default function vincularVisualizaçãoEModelo<TVisualização extends Visualização<TModelo>, TModelo extends object>(parâmetros: ParâmetrosVincularVisualizaçãoEModelo<TVisualização, TModelo>): TModelo {
  const montar = function(modelo: TModelo) {
    const parâmetrosClicoDeVida = { visualização: parâmetros.visualização, modelo }

    parâmetros.desvincular && parâmetros.desvincular(parâmetrosClicoDeVida)
    parâmetros.visualização.desenhar(modelo)
    parâmetros.vincular && parâmetros.vincular(parâmetrosClicoDeVida)
  }

  if (!parâmetros.modelo) return {} as never

  const representante = new Proxy(parâmetros.modelo, {
    get(alvo: TModelo, propriedade: keyof TModelo & string) {
      const valorEsperado: Function | unknown = alvo[propriedade]

      if (typeof valorEsperado !== typeof Function || parâmetros.propriedades?.includes(propriedade) === false)
        return valorEsperado
        
      return function(...argumentos: unknown[]) {
        (valorEsperado as Function)(...argumentos)
        montar(representante)
      }
    },
    set(alvo: TModelo, propriedade: keyof TModelo & string, novoValor: unknown) {
      const valorAtualizado = Reflect.set(alvo, propriedade, novoValor)

      if (parâmetros.propriedades?.includes(propriedade))
        montar(representante)
      
      return valorAtualizado
    },
  })

  montar(representante)

  return representante
}
