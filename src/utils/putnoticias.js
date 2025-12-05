export async function updateNoticiaRequest(id, titulo, conteudo, tipo) {

    const body = {
        _id: id,
        titulonoticia: titulo,
        conteudonoticia: conteudo,
        tiponoticia: tipo
    };
    try {
        const response = await fetch("https://api6anoticias.vercel.app/putnoticias", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return await response.json();

    } catch (err) {
        return { status: false, msg: "Erro ao atualizar notícia: " + err };
    }
}
