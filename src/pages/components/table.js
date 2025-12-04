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
                    {props.datahoracadastro && !isNaN(new Date(props.datahoracadastro))
                        ? new Date(props.datahoracadastro).toISOString().replace("T", " ").substring(0, 19)
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
