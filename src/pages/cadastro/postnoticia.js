import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Postnoticia() {
    const enviarPost = async () => {

        const body = {
            titulonoticia,
            conteudonoticia,
            tiponoticia
        };
        try {
            const response = await fetch("https://g3-snowy.vercel.app/postnoticias", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const result = await response.json();
            console.log("API respondeu:", result);
            alert("Notícia enviada com sucesso!");
        } catch (err) {
            console.error("Erro ao enviar:", err);
            alert("Erro ao enviar notícia.");
        }
    }
    return (
        <Container>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    {/* aqui alteração para api */}
                    <Form onSubmit={enviarPost}>
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
                                <option value="Ciência">Ciência</option>
                                <option value="Educação">Educação</option>
                                <option value="Pesquisa">Pesquisa</option>
                                <option value="Esportes">Esportes</option>
                                <option value="Cultura">Cultura</option>
                                <option value="Entreterimento">Entreterimento</option>
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