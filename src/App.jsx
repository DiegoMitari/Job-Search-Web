
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/Jobsdiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white container">
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
