import { Outlet, NavLink } from "react-router";
    import './MainLayout.css'
const MainLayout = () => {
  return (
    <>
      <header>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          to={"/jobs"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Jobs
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
