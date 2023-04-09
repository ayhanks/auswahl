import "./app.postcss"
import Auswahl from "./model/Auswahl"

const create = () => {
  const auswahlDOMElems = document.querySelectorAll("[data-auswahl]")
  auswahlDOMElems.forEach((elem) => {
    const auswahl = new Auswahl(elem)
  })
}

const init = () => {
  create()
}

init()