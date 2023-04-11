import "./app.postcss"
import Auswahl from "./model/Auswahl";
import { selectElements } from "./helper";
import AuswahlView from "./view/AuswahlView";

const auswahlen = selectElements.map(selectElement => new Auswahl(selectElement));

const handleRender = () => {
  auswahlen.forEach(auswahl => {
    const view = new AuswahlView({ ref: auswahl.ref, options: auswahl.options })

    view.handleChange((e) => {
      const { options } = auswahl;
      const selectedOption = auswahl.getOptionByValue(e.dataset.auswahlValue)

      auswahl.options = options.map(option => {
        if (option.value === selectedOption.value) {
          option.selected = true;
        } else {
          option.selected = false;
        }
        return option;
      })

      view.render(auswahl.options);
    })
  });
}

handleRender();