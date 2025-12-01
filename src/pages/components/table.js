"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { delNoticiaRequest } from "../../utils/delnoticias";  // <-- IMPORTANTE

export default function Tablelist(props) {

    const [truncate, setTruncate] = useState("");
    const pathname = usePathname();
    const [ResultadoCadastro, setResultadoCadastro] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => { 
        setShow(false); 
        window.location.reload(); 
    };

    useEffect(() => {
        if (pathname === "/") {
            setTruncate("text-truncate");
        } else {
            setTruncate("");
        }
    }, [pathname]);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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

            <td className="text-capitalize">
                <a href={`/noticias/${props.idnoticia}`}>
                    {props.idnoticia}
                </a>
            </td>

            <td className="text-capitalize">
                {props.titulonoticia} -
                <a href={`/noticias/tipo/${props.tiponoticia}`}>
                    {props.tiponoticia}
                </a>
            </td>

            <td className={[truncate, "text-truncate"].filter(Boolean).join(" ")} style={{ maxWidth: "500px" }}>
                {props.conteudonoticia}
            </td>

            <td>
                {props.datahoracadastro && !isNaN(new Date(props.datahoracadastro))
                    ? new Date(props.datahoracadastro).toISOString().replace("T", " ").substring(0, 19)
                    : "Data inválida"}
            </td>

            <td>update</td>

            <td>
                <a href="#" 
                   onClick={delNoticiaRequest(
                       props.idnoticia, 
                       setResultadoCadastro, 
                       setShow
                   )}
                >
                    delete
                </a>
            </td>
        </>
    );
}
