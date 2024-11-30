import { Container } from 'react-bootstrap';
import TrelloNavigation from './components/TrelloNavigation';



const boardBg = {backgroundColor: "rgba(255, 255, 255, 0.4)"}

function App() {
  return (
    <Container fluid className='min-vh-100 my-5'>
      <TrelloNavigation />
      <Container className='vh-100 position-relative'>
        <Container className="h-25 w-100 d-flex justify-center align-items-center">
          <h1 className='position-absolute top-10'>Workspace</h1>
        </Container>
        <Container className="min-h-auto h-75 w-100 border border-light d-flex flex-column gap-5" style={boardBg}>
          <h1 className='text-decoration-underline'>Boards</h1>

          <Container className='min-h-auto h-75 border border-dark'>

          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
