import Component from "./../../shared/component.js";
class bttnComponent extends Component {
  static render() {
    if (!this.isloadedStyles) {
      this.loadStyle("./components/button/btn.css");
      this.isloadedStyles = true;
    }
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Calculate";
    document
      .querySelector("form")
      .insertAdjacentElement("beforeend", buttonElement);

    buttonElement.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Button clicked");
    });
  }
}
export default bttnComponent;
