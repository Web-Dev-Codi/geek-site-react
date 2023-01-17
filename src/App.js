import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/SideBar';


function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      
    <main className="container mx-auto px-3 pb-12">
      <Home/>
    </main>
      <Footer/>
    </div>
  );
}

export default App;
