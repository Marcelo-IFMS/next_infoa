export async function updateNoticiaRequest(id, titulo, conteudo, tipo) {

    const body = {
        _id: id,
        titulonoticia: titulo,
        conteudonoticia: conteudo,
        tiponoticia: tipo
    };

    try {
        const response = await fetch("https://g3-snowy.vercel.app/putnoticias", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        console.log(response);
        return await response.json();

    } catch (err) {
        return { status: false, msg: "Erro ao atualizar notícia: " + err };
    }
}
