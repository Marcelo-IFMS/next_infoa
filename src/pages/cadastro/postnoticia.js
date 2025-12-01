import { useState } from 'react';
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';

export default function Postnoticia() {
    const [titulonoticia, setTitulo] = useState("");
    const [conteudonoticia, setConteudo] = useState("");
    const [tiponoticia, setTipo] = useState("");
    const [ResultadoCadastro, setResultadoCadastro] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const enviarPost = async (e) => {
        e.preventDefault();
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
            if (!result.status)
                setResultadoCadastro("Erro ao cadastrar notícia:");
            setResultadoCadastro("Notícia cadastrada com sucesso!");
            setShow(true);
        } catch (err) {
            setShow(true);
            setResultadoCadastro("Erro ao enviar notícia:" + err);
            //alert("Erro ao enviar notícia.");
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
                    <Modal.Title>Notícia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {ResultadoCadastro}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
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