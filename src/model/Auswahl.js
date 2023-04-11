import AuswahlOption from "./AuswahlOption";

export default class Auswahl {
  #ref;
  #options = [];

  constructor(ref) {
    this.#ref = ref;
    this.#init();
  }

  #addOptions() {
    this.#options = Array.from(this.#ref.options).map(option => 
      new AuswahlOption(
        option.label,
        option.value,
        option.selected
    ))
  }

  #init () {
    this.#addOptions();
  }

  get ref() {
    return this.#ref;
  }

  get options() {
    return this.#options;
  }

  set options(options) {
    this.#options = options;
  }

  getOptionByValue(value) {
    return this.#options.find(option => option.value === value);
  }

  changeOption(option) {
    this.#options.forEach((opt) => {
      if (opt.value === option.value) {
        opt.selected = true;
      } else {
        opt.selected = false;
      }
    });
  }
}

