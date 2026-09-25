import { HashRouter, Route, Routes } from "react-router-dom";
import { CafeProvider } from "./context/CafeContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationPage } from "./pages/ReservationPage";
import { MyReservationsPage } from "./pages/MyReservationsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <CafeProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cardapio" element={<MenuPage />} />
            <Route path="/reservas" element={<ReservationPage />} />
            <Route path="/minhas-reservas" element={<MyReservationsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CafeProvider>
  );
}
