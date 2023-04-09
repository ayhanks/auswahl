import AuswahlOption from "./AuswahlOption";
import AuswahlView from "../view/AuswahlView";

export default class Auswahl {
  #ref;
  #options = [];
  #attributes = {};

  constructor(ref) {
    this.#ref = ref;
    this.#addOptions()

    new AuswahlView({
      el: this.#ref,
      data: {
        options: this.#options,
        attributes: this.#attributes
      },
    });
  }

  #addOptions() {
    this.#options = Array.from(this.#ref.options).map(option => 
      new AuswahlOption(
        option.label,
        option.value,
        option.selected
    ))
  }
}

