export default abstract class Visualização<TModelo = unknown> {
  protected elemento: HTMLElement | null = null

  constructor(private readonly seletor: string) {}
  
  desenhar(modelo: TModelo) {
    this.elemento = document.querySelector<HTMLElement>(this.seletor)

    if (!this.elemento) return

    this.elemento.innerHTML = this.obterVisualização(modelo)
  }

  protected abstract obterVisualização(modelo: TModelo): string
}