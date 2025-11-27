"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Tablelist(props) {
    const [truncate, setTruncate] = useState("");
    const pathname = usePathname();

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
                const response = await fetch(`https://g3-snowy.vercel.app/deletenoticia/`, {
                    method: "delete",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)

                });
                const result = await response.json();
                if (!result.status)
                    alert("Erro ao deletar notícia:");
                alert("Notícia deletada com sucesso!");
                // Atualizar a página após a exclusão
                window.location.reload();
            } catch (err) {
                alert("Erro ao deletar notícia:" + err);
            }
        }
    }
    return (
        <>
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
