export default class AuswahlView {
  #ref;
  #container;

  constructor({ ref, options }) {
    this.#ref = ref;

    this.#hide();
    this.render(options, true);

    this.#handleClick();
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


    this.el = document.createElement('div')
    this.el.classList.add('auswahl');
    console.log(this.el)

    const auswahlSelected = document.createElement('div')
    auswahlSelected.classList = 'auswahl__option auswahl__selected';

    const auswahlSelectedLabel = document.createElement('div')
    const auswahlSelectedLabelText = document.createTextNode(data.find(option => option.selected).label);
    auswahlSelectedLabel.classList.add('auswahl__selected-label');
    auswahlSelectedLabel.append(auswahlSelectedLabelText);

    const auswahlSelectedArrow = document.createElement('div')
    auswahlSelectedArrow.classList.add('auswahl__selected-arrow');

    auswahlSelected.append(auswahlSelectedLabel);
    auswahlSelected.append(auswahlSelectedArrow);
    this.el.append(auswahlSelected);

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
    });
    this.el.append(auswahlList);

    this.#container.append(this.el);
    this.#ref.after(this.#container);
  }

  #hide() {
    this.#ref.classList.add('auswahl__hidden');
  }

  #clear = () => {
    this.#container.remove();
  }
  
  #handleClick = () => {
    this.el.addEventListener('click', (e) => {
      this.el.classList.toggle('auswahl--is-open');
    });
  }

  handleChange(handler) {
    this.el.addEventListener('click', (e) => {
      if (e.target.classList.contains('auswahl__list-option')) {
        handler(e.target);
      }
    });
  }
}