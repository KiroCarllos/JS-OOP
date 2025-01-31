import Component from "../../../../shared/component.js";

class FormComponent extends Component {
  static render() {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/main/form.css");
      this.isloadedStyles = true;
    }

    const formElement = document.createElement("form");
    formElement.innerHTML = `
        <div id="form">
            <h1> Calculator  App</h1>
        </div>
        `;

    const nav = document.querySelector("nav");
    nav.insertAdjacentElement("afterend", formElement);
  }
}

export default FormComponent;
