export default class AuswahlView {
  #ref;
  #container;

  constructor({ ref }) {
    this.#ref = ref;

    this.#hide();
  }

  render(data = [], initial = false) {
    if (!initial) {
      this.#clear();
    }
    this.#createHTML(data);
  }

  #createHTML = (data) => {
    this.#container = document.createElement('div')
    this.#container.classList.add('auswahl-container');

    const auswahl = document.createElement('div')
    auswahl.classList.add('auswahl');

    const auswahlSelected = document.createElement('div')
    auswahlSelected.classList = 'auswahl__option auswahl__selected';

    const auswahlSelectedLabel = document.createElement('div')
    const auswahlSelectedLabelText = document.createTextNode(
      data.find(option => option.selected).label);
    auswahlSelectedLabel.classList.add('auswahl__selected-label');
    auswahlSelectedLabel.append(auswahlSelectedLabelText);

    const auswahlSelectedArrow = document.createElement('div')
    auswahlSelectedArrow.classList.add('auswahl__selected-arrow');

    auswahlSelected.append(auswahlSelectedLabel);
    auswahlSelected.append(auswahlSelectedArrow);
    auswahl.append(auswahlSelected);

    const auswahlList = document.createElement('div')
    auswahlList.classList.add('auswahl__list');

    data.forEach(option => {
      const auswahlListOption = document.createElement('div');
      auswahlListOption.classList.add('auswahl__list-option');
      auswahlListOption.classList.add('auswahl__option');

      if (option.selected) {
        auswahlListOption.classList.add('auswahl__option--selected');
      }
      auswahlListOption.dataset.auswahlValue = option.value;
      const auswahlListOptionLabel = document.createTextNode(option.label);

      auswahlListOption.append(auswahlListOptionLabel);
      auswahlList.append(auswahlListOption);

      auswahlListOption.addEventListener('click', this.#handleChange)
    });
    
    auswahl.append(auswahlList);
    this.#container.append(auswahl);
    this.#ref.after(this.#container);

    auswahl.addEventListener('click', this.handleClick);
  }

  #hide() {
    this.#ref.classList.add('auswahl__hidden');
  }

  #clear = () => {
    this.#container.remove();
  }

  #handleClick = (e) => {
    const clicked = e.target.closest('.auswahl');

    clicked.classList.toggle("auswahl--open")
  }

  handleChange = (e) => {
    console.log(e.target)
  }
}