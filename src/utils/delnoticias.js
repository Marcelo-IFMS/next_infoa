export function delNoticiaRequest(idnoticia, setResultadoCadastro, setShow) {
    return async (e) => {
        e.preventDefault();
        const body = { _id: idnoticia };
        try {
            const response = await fetch(`https://api6anoticias.vercel.app/delnoticias`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const result = await response.json();

            if (!result.status) {
                setResultadoCadastro("Erro ao deletar notícia");
            } else {
                setResultadoCadastro("Notícia apagada com sucesso!");
            }

            setShow(true);

        } catch (err) {
            setResultadoCadastro("Erro ao deletar notícia: " + err);
            setShow(true);
        }
    };
}
