export interface ParâmetrosModeloEntradaDeTexto {
  nome: string
  aoDigitar: (conteúdo: string) => void
}

export default class ModeloEntradaDeTexto {
  public nome: string
  public aoDigitar: (conteúdo: string) => void

  constructor({ nome, aoDigitar }: ParâmetrosModeloEntradaDeTexto) {
    this.nome = nome
    this.aoDigitar = aoDigitar
  }

  definirAoDigitar(aoDigitar: (conteúdo: string) => void) {
    this.aoDigitar = aoDigitar
  }
}