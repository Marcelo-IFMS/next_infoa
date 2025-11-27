import { Card, Col } from "react-bootstrap";

export default function Cards(noticia) {
    return <>
        <Col key={noticia.idnoticia}>
            <Card>
                <Card.Header className="text-center fw-bold bg-warning-subtle">
                    <a href={`/noticias/${noticia.idnoticia}`}>{/* altera aqui */}{noticia.titulonoticia}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">
                        <a href={`/noticias/tipo/${noticia.tiponoticia}`}>{noticia.tiponoticia}</a>
                    </Card.Title>
                    <Card.Text>
                        <p className="text-truncate">
                            {noticia.conteudonoticia}
                        </p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>{new Date(noticia.datahoracadastro).toLocaleString("pt-br")}</Card.Footer>
            </Card>
        </Col>
    </>
}