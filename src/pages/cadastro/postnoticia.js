import { useState } from 'react';//adionado para controle de estado
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Postnoticia() {
    //controlar o estado das variáveis do formulário
    const [titulonoticia, setTitulo] = useState("");
    const [conteudonoticia, setConteudo] = useState("");
    const [tiponoticia, setTipo] = useState("");

    const enviarPost = async (dados) => {
        dados.preventDefault();
        setLoading(true);
        const body = {
            titulonoticia,
            conteudonoticia,
            tiponoticia
        };
        //inicia o bloco de envio do post para a api
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
        } catch (err) {// caso haja erro, exibe o erro no console e alerta o usuário
            console.error("Erro ao enviar:", err);
            alert("Erro ao enviar notícia.");
        }finally {
            setLoading(false);
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
                            <Form.Control type="text" className='bg-warning-subtle' placeholder="Informe o Título da Notícia" onChange={(dados) => setTitulo(dados.target.value)} />
                            <Form.Text className="text-muted">
                                Informe de forma clara o título da notícia.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="conteudonoticia">
                            <Form.Label>Informe a Notícia</Form.Label>
                    {/* aqui alteração para api */}
                            <Form.Control as="textarea" rows={3} className='bg-warning-subtle' onChange={(dados) => setConteudo(dados.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tiponoticia">
                            <Form.Select aria-label="Selecione o tipo de notícia" className='bg-warning-subtle' onChange={(dados) => setTipo(dados.target.value)}>
                                <option>Selecione o Tipo da Notícia</option>
                    {/* aqui alteração para api */}
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