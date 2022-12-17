document.addEventListener(`DOMContentLoaded`, () => {
  const elementoTítulo = document.querySelector(`h1`)!

import './estilos.scss'

  entradaTítulo.addEventListener(`keyup`, () => {
    elementoTítulo.innerHTML = `
      ${entradaTítulo.value}
      <small>${entradaSubtítulo.value}<small>
    `
  })

  entradaSubtítulo.addEventListener(`keyup`, () => {
    elementoTítulo.innerHTML = `
      ${entradaTítulo.value}
      <small>${entradaSubtítulo.value}<small>
    `
  })
})
