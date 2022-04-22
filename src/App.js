import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
  const [pageState, setPageState] = useState({
    about: true,
    work: false,
    contacts: false
  });


  return (
    <>
    <CssBaseline />
    <Navbar pageState={pageState} setPageState={setPageState} />
    {pageState.about ? <About/> : ''}
    {pageState.work ? <Work /> : ''}
    {pageState.contact? <Contact /> : ''}
    <Footer />
    </>
  );
}

export default App;
