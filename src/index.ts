document.addEventListener(`DOMContentLoaded`, () => {
  const elementoTítulo = document.querySelector(`h1`)!

  const entradaTítulo = document.querySelector<HTMLInputElement>(`[name=título]`)!
  const entradaSubtítulo = document.querySelector<HTMLInputElement>(`[name=subtítulo]`)!

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
