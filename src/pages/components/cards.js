"use client";
import { Card, Col } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Cards(noticia) {
    const [truncate, setTruncate] = useState("");
    const pathname = usePathname();
    useEffect(() => {
        if (pathname === "/") {
            setTruncate("text-truncate");
        } else {
            setTruncate("");
        }
    }, [pathname]);
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
                    <Card.Text className={truncate}>
                        {noticia.conteudonoticia}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>{new Date(noticia.datahoracadastro).toLocaleString("pt-br")}</Card.Footer>
            </Card>
        </Col>
    </>
}