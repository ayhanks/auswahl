import "./app.postcss"
import Auswahl from "./model/Auswahl";
import { selectElements } from "./helper";
import AuswahlView from "./view/AuswahlView";

const auswahlen = selectElements.map(selectElement => new Auswahl(selectElement));

const controlRender = () => {
  auswahlen.forEach(auswahl => {
    auswahl.render();
  });
}

const initApp = () => {
  auswahlen.forEach(auswahl => {
    const view = new AuswahlView({ ref: auswahl.ref })

    view.handleChange(controlRender)
  });
}

initApp();