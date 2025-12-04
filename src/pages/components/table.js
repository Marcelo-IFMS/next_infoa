"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap";

import { delNoticiaRequest } from "../../utils/delnoticias";
import { updateNoticiaRequest } from "../../utils/putnoticias";

export default function Tablelist(props) {

    // truncate
    const [truncate, setTruncate] = useState("");
    const pathname = usePathname();

    // modais
    const [showDel, setShowDel] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    // mensagens
    const [ResultadoCadastro, setResultadoCadastro] = useState("");

    // campos do update
    const [titulo, setTitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [tiponoticia, setTiponoticia] = useState("");

    // abre modal update e preenche
    function openUpdateModal() {
        setTitulo(props.titulonoticia);
        setConteudo(props.conteudonoticia);
        setTiponoticia(props.tiponoticia);
        setShowUpdate(true);
    }

    // fecha modal delete
    const handleCloseDel = () => {
        setShowDel(false);
        window.location.reload();
    };

    // fecha modal update
    const handleCloseUpdate = () => {
        setShowUpdate(false);
        window.location.reload();
    };

    // lógica truncate
    useEffect(() => {
        if (pathname === "/") setTruncate("text-truncate");
        else setTruncate("");
    }, [pathname]);

    // enviar atualização
    async function enviarUpdate(e) {
        e.preventDefault();

        const result = await updateNoticiaRequest(
            props.idnoticia,
            titulo,
            conteudo,
            tiponoticia
        );
        if (!result.status) {
            setResultadoCadastro("Erro ao atualizar notícia.");
        } else {
            setResultadoCadastro("Notícia atualizada com sucesso!");
        }
        setShowUpdate(false);
        setShowDel(true); // usa modal já existente para feedback
    }
    return (
        <>
            {/* Modal Delete */}
            <Modal show={showDel} onHide={handleCloseDel} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Notícia</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ResultadoCadastro}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDel}>Fechar</Button>
                </Modal.Footer>
            </Modal>
            {/* Modal UPDATE */}
            <Modal show={showUpdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar Notícia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={enviarUpdate}>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Conteúdo</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={conteudo}
                                onChange={(e) => setConteudo(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo Notícia</Form.Label>
                            <Form.Select value={tiponoticia} onChange={(e) => setTiponoticia(e.target.value)}>
                                <option value="Ciência">Ciência</option>
                                <option value="Educação">Educação</option>
                                <option value="Pesquisa">Pesquisa</option>
                                <option value="Esportes">Esportes</option>
                                <option value="Cultura">Cultura</option>
                                <option value="Entreterimento">Entreterimento</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Salvar Alterações
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <tr>
                {/* Tabela */}
                <td className="text-capitalize">
                    <a href={`/noticias/${props.idnoticia}`}>{props.idnoticia}</a>
                </td>
                <td className="text-capitalize">
                    {props.titulonoticia} -
                    <a href={`/noticias/tipo/${props.tiponoticia}`}>{props.tiponoticia}</a>
                </td>
                <td className={[truncate, "text-truncate"].filter(Boolean).join(" ")} style={{ maxWidth: "500px" }}>
                    {props.conteudonoticia}
                </td>
                <td>
                    {props.datahoracadastro && !isNaN(new Date(props.datahoracadastro).toLocaleDateString())
                        ? new Date(props.datahoracadastro).toLocaleDateString()
                        : "Data inválida"}
                </td>
                <td>
                    <a href="#" onClick={openUpdateModal}>update</a>
                </td>
                <td>
                    <a
                        href="#"
                        onClick={() => delNoticiaRequest(
                            props.idnoticia,
                            setResultadoCadastro,
                            setShowDel
                        )}
                    >
                        delete
                    </a>
                </td>
            </tr>
        </>
    );
}