"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";

export default function Tablelist(props) {
    const [truncate, setTruncate] = useState("");
    const pathname = usePathname();
    const [ResultadoCadastro, setResultadoCadastro] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    useEffect(() => {
        if (pathname === "/") {
            setTruncate("text-truncate");
        } else {
            setTruncate("");
        }
    }, [pathname]);
    const [idnoticia, setIdnoticia] = useState("")
    function delNoticia(idnoticia) {
        return async (e) => {
            e.preventDefault();
            const body = {
                _id: idnoticia
            };
            alert(body._id)
            try {
                const response = await fetch(`https://g3-snowy.vercel.app/delnoticias`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)

                });
                const result = await response.json();
                if (!result.status)
                    setResultadoCadastro("Erro ao deletar notícia");
                setResultadoCadastro("Notícia apagada com sucesso!");
                // Atualizar a página após a exclusão
                window.location.reload();
                setShow(true);
            } catch (err) {
                setResultadoCadastro("Erro ao deletar notícia: " + err);
                setShow(true);
            }
        }
    }
    return (
        <>
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
            <td>
                update
            </td>
            <td>
                <a href="#" onClick={delNoticia(props.idnoticia)}>delete</a>
            </td>
        </>
    );
}
