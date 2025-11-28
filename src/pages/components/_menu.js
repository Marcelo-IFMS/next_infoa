import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Info A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/esportes">Esportes</Nav.Link>
            <NavDropdown title="ReactHook´s" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usestate">UseState</NavDropdown.Item>
              <NavDropdown.Item href="/useeffect">UseEffect</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Noticias" id="noticias">
              <NavDropdown.Item href="/cadastro/noticia">Cadastro Notícia</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FuncaoNext" id="funcaonext">
              <NavDropdown.Item href="/funcaonext/gssp">GetServerSideProps</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gssp2">GetServerSideProps-2</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcard">GetServerSideProps-Card</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcardpesquisa">GSSP-Card-Pesquisa</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcardesportes">GSSP-Card-Esportes</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcardentretenimento">GSSP-Card-Entretenimento</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcardciencia">GSSP-Card-Ciência</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
