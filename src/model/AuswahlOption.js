export default class AuswahlOption {
  #label;
  #value;
  #selected;

  constructor(label, value, selected = false) {
    this.#label = label;
    this.#value = value;
    this.selected = selected
  }

  get label() {
    return this.#label;
  }

  get value() {
    return this.#value;
  }

  get selected() {
    return this.#selected;
  }

  set selected(selected) {
    this.#selected = selected;
  }
}