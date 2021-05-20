// import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='py6'>
        <Container>
        <h1>
          Welcome
        </h1>
        </Container>
      </main>
       
      <Footer />
    </div>
  );
}

export default App;
