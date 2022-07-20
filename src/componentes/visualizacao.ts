export default abstract class Visualização<TModelo> {
  protected elemento: HTMLElement | null = null

  constructor(private readonly seletor: string) {}
  
  desenhar(modelo: TModelo) {
    this.elemento = document.querySelector<HTMLElement>(this.seletor)

    if (!this.elemento) return

    this.elemento.innerHTML = this.obterVisualização(modelo)
  }

  protected abstract obterVisualização(modelo: TModelo): string
}