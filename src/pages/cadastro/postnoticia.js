import { useState } from 'react';
import { Button, Form, Container, Row, Col, Modal, Spinner } from 'react-bootstrap';

export default function Postnoticia() {
    const [titulonoticia, setTitulo] = useState("");
    const [conteudonoticia, setConteudo] = useState("");
    const [tiponoticia, setTipo] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const enviarPost = async (e) => {
        e.preventDefault();
        setShow(true);
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
        } finally {
            setShow(false);
        }
    }
    return (
        <Container>
            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            {/* FORM */}
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
                    {/* aqui alteração para api */}
                    <Form onSubmit={enviarPost}>
                        <Form.Group className="mb-3" controlId="titulonoticia">
                            <Form.Label>Título da Notícia</Form.Label>
                            <Form.Control type="text" className='bg-warning-subtle' placeholder="Informe o Título da Notícia" onChange={(e) => setTitulo(e.target.value)} />
                            <Form.Text className="text-muted">
                                Informe de forma clara o título da notícia.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="conteudonoticia">
                            <Form.Label>Informe a Notícia</Form.Label>
                            <Form.Control as="textarea" rows={3} className='bg-warning-subtle' onChange={(e) => setConteudo(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tiponoticia">
                            <Form.Select aria-label="Selecione o tipo de notícia" className='bg-warning-subtle' onChange={(e) => setTipo(e.target.value)}>
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
        </Container >
    )
}