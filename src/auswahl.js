import Auswahl from "./model/Auswahl"
import { selectElements } from "./helper";

export default function createAuswahl() {
  return Array.from(selectElements).reduce((result, selectElement) => {
    const name = selectElement.dataset.auswahl;

    if(!name) return result;

    result[name] = new Auswahl(selectElement);
    return result;
  }, {});
}