"use client";
import { Card, Col } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Cards(props) {
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
        <Col key={props.idnoticia}>
            <Card>
                <Card.Header className="text-center fw-bold bg-warning-subtle">
                    <a href={`/noticias/${props.idnoticia}`}>{/* altera aqui */}{props.titulonoticia}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">
                        <a href={`/noticias/tipo/${props.tiponoticia}`}>{props.tiponoticia}</a>
                    </Card.Title>
                    <Card.Text className={truncate}>
                        {props.conteudonoticia}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {props.datahoracadastro && !isNaN(new Date(props.datahoracadastro))
                        ? new Date(props.datahoracadastro).toISOString().replace("T", " ").substring(0, 19)
                        : "Data inválida"}
                </Card.Footer>

            </Card>
        </Col>
    </>
}