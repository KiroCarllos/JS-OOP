import FooterComponent from "../components/layout/footer/footer.js";
import NavComponent from "../components/layout/header/nav/nav.js";
import FormComponent from "../components/main/form.js";
import inputComponent from "../components/input/input.js";
import bttnComponent from "../components/button/btn.js";

class AppServices {
  static build() {
    NavComponent.render();
    FormComponent.render();
    inputComponent.render("numberOne", "number", "Enter a number1");
    inputComponent.render("numberTwo", "number", "Enter a number2");
    bttnComponent.render();

    FooterComponent.render();
  }
}

export default AppServices;
