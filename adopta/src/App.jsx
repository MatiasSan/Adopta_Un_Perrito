
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';



function App() {
 

  return (
    <>
      <Header title="Adopta un perrito"/>

      <Container>
        <Row>
          <Col lg={3} md={6}>
            <MyCard 
              nombre="Cholito"  
              info="Clásico perrito callejero, le gusta habitarlas calles de las grandes ciudades" 
              img="https://media.istockphoto.com/id/1207716879/es/foto/propietario-cuidando-y-acariciando-feliz-perro-amistoso.jpg?s=612x612&w=0&k=20&c=C6jtCU5KZwF4BIsVj3A7f7WsMNiunJIXPTzP2btib_o="
              color="primary"
              text="Quiltro"
            />
          </Col>
          <Col lg={3} md={6}>
            <MyCard 
              nombre="Ayelen" 
              info="Perrita extremadamente regalona, juguetona y saltarína" 
              img="https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_640.jpg"
              color="secondary"
              text="Dalmata"
             />
          </Col>
          <Col lg={3} md={6}>
            <MyCard 
              nombre="Pilún" 
              info="Pequeño perrito de raza maltez, extremadamente gruñon" 
              img="https://cdn.pixabay.com/photo/2020/01/21/16/26/yorkshire-terrier-4783327_1280.jpg"
              color="success"
              text="Maltez"
             />
          </Col>
          <Col lg={3} md={6}>
            <MyCard 
              nombre="Ayelen" 
              info="Perrita extremadamente regalona, juguetona y saltarína" 
              img="https://cdn.pixabay.com/photo/2020/11/12/13/44/dog-5735582_640.jpg"
              color="danger"
              text="Labrador"
             />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default App
