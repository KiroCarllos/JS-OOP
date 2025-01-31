import FooterComponent from "../components/layout/footer/footer.js";
import NavComponent from "../components/layout/header/nav/nav.js";
import FormComponent from "../components/main/form.js";

class AppServices {
  static build() {
    NavComponent.render();
    FormComponent.render();
    FooterComponent.render();
  }
}

export default AppServices;
