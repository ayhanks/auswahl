export default class AuswahlView {
  #el;
  #data;

  constructor({ el, data }) {
    this.#el = el;
    this.#data = data;

    this.render();
    this.#hideEl();
    this.#addClickHandler();
  }

  render() {
    const markup = this.#createMarkup();
    this.#el.insertAdjacentHTML("afterend", markup);
  }


  #createMarkup() {
    const { options, attributes } = this.#data;
    return `
      <span class="auswahl">
        <div class="auswahl__option auswahl__selected">
          <div class="auswahl__selected-label">Label</div>
          <div class="auswahl__selected-arrow"></div>
        </div>
        <div class="auswahl__list">
          ${options.map(option => `
            <div class="auswahl__list-option auswahl__option ${option.selected ? "auswahl__option--selected" : ""}">${option.label}</div>
          `).join("")}
        </div>
      </span>
    `
  }

  #hideEl() {
    this.#el.classList.add("auswahl__hidden");
  }

  #addClickHandler() {
    document.body.addEventListener("click", e => {
      if (!e.target.closest(".auswahl")) {
        document.querySelectorAll(".auswahl--is-open").forEach(auswahl => {
          auswahl.classList.remove("auswahl--is-open");
        })
      }
    })

    document.querySelectorAll(".auswahl").forEach(auswahl => {
      auswahl.addEventListener("click", () => {
        auswahl.classList.toggle("auswahl--is-open")
      });
    })
  }
}