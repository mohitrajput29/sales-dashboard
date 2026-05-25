import {
  useEffect,
  useContext
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchSales
} from "./features/sales/salesSlice";

import {
  ThemeContext
} from "./context/ThemeContext";

import Filters
from "./components/Filters";

import DashboardCards
from "./components/DashboardCards";

import RevenueChart
from "./components/RevenueChart";

import SalesTable
from "./components/SalesTable";

import ThemeToggle
from "./components/ThemeToggle";

export default function App() {

  const dispatch =
    useDispatch();

  const {
    sales,
    loading,
    search,
    category
  } = useSelector(
    state => state.sales
  );

  const { theme } =
    useContext(ThemeContext);

  useEffect(() => {

    dispatch(fetchSales());

  }, [dispatch]);

  const filteredSales =
    sales.filter(item => {

      const matchesSearch =
        item.product
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
        || item.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  if (loading) {

    return <h1>Loading...</h1>;
  }

  return (

    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background:
          theme === "dark"
            ? "#0f172a"
            : "#f8fafc",
        color:
          theme === "dark"
            ? "white"
            : "black",
        fontFamily: "Arial"
      }}
    >

      <h1>Sales Dashboard</h1>

      <ThemeToggle />

      <Filters />

      <DashboardCards
        sales={filteredSales}
        theme={theme}
      />

      <h2>Revenue Analytics</h2>

      <RevenueChart
        sales={filteredSales}
      />

      <SalesTable
        sales={filteredSales}
      />

    </div>
  );
}