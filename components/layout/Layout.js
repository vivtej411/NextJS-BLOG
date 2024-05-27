import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className="container my-5 mx-5">{props.children}</div>
    </div>
  );
}

export default Layout;
