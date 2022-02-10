import './App.css';
import './Appmobile.css';
import Header from './header.jsx';
import Athlets from './athlets.jsx';
import Players from './players.jsx';
import Active1 from './active1.jsx';
import Active2 from './active2.jsx';
import Active3 from './active3.jsx';
import Footer from './footer.jsx'
function App() {
  return (
    <>
    <Header />   
    <main>
      <Athlets />
      <Players />
      <Active1 />
      <Active2 />
      <Active3 />
    </main>
  <Footer />
    </>
  );
}

export default App;
