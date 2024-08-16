import "../css/Footer.css";
import reactLogo from "../assets/react.svg";
import { useFilters } from "../hooks/useFilters";

export function Footer() {
  const { filter } = useFilters();

  return (
    <footer className="footer">
      <h4>
        Prueba técnica de React <img src={reactLogo} alt="reactLogo" />-
        <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {JSON.stringify(filter, null)}
    </footer>
  );
}
