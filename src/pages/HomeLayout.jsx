import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation(); 
  const ispPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {ispPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-16">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
