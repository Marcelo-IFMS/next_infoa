import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Noticia() {
  const [titulonoticia, setTitulo] = useState("");
  const [conteudonoticia, setConteudo] = useState("");
  const [tiponoticia, setTipo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // impede o envio padrão

    const body = {
      titulonoticia,
      conteudonoticia,
      tiponoticia
    };

    try {
      const response = await fetch("https://api6anoticias.vercel.app/postnoticias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const result =  await response.json();
      if (!result.status){
        alert("Erro: Notícia não cadastrada.");
      }
      alert("Notícia enviada com sucesso!");
    } catch (err) {
      alert("Erro ao enviar notícia.");
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="titulonoticia">
              <Form.Label>Título da Notícia</Form.Label>
              <Form.Control
                type="text"
                className='bg-warning-subtle'
                placeholder="Informe o Título da Notícia"
                value={titulonoticia}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <Form.Text className="text-muted">
                Informe de forma clara o título da notícia.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="conteudonoticia">
              <Form.Label>Informe a Notícia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className='bg-warning-subtle'
                value={conteudonoticia}
                onChange={(e) => setConteudo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tiponoticia">
              <Form.Select
                aria-label="Selecione o tipo de notícia"
                className='bg-warning-subtle'
                value={tiponoticia}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Selecione o Tipo da Notícia</option>
                <option value="Ciência">Ciência</option>
                <option value="Educação">Educação</option>
                <option value="Pesquisa">Pesquisa</option>
                <option value="Esportes">Esportes</option>
                <option value="Cultura">Cultura</option>
                <option value="Entreterimento">Entreterimento</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar Notícia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
