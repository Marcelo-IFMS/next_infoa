import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Postnoticia() {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="titulonoticia">
              <Form.Label>Título da Notícia</Form.Label>
              <Form.Control type="text" className='bg-warning-subtle' placeholder="Informe o Título da Notícia" />
              <Form.Text className="text-muted">
                Informe de forma clara o título da notícia.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="conteudonoticia">
              <Form.Label>Informe a Notícia</Form.Label>
              <Form.Control as="textarea" rows={3} className='bg-warning-subtle' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tiponoticia">
              <Form.Select aria-label="Selecione o tipo de notícia" className='bg-warning-subtle'>
                <option>Selecione o Tipo da Notícia</option>
                <option value="1">Ciência</option>
                <option value="2">Educação</option>
                <option value="3">Pesquisa</option>
                <option value="4">Esportes</option>
                <option value="5">Cultura</option>
                <option value="6">Entreterimento</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}