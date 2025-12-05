export async function delNoticiaRequest(idnoticia) {
    const body = { _id: idnoticia };
    try {
        const response = await fetch(`https://api6anoticias.vercel.app/delnoticias`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    } catch (err) {
        return { status: false, msg: "Erro ao deletar notícia: " + err };
    }

}