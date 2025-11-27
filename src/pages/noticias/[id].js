import { Container } from 'react-bootstrap'
import Cards from '../components/cards'
export async function getServerSideProps(req) {
    const res = await fetch('https://g3-snowy.vercel.app/noticias/id/' + req.query.id)
    const repo = await res.json()
    return { props: { noticia: repo } }
}
export default function Page({ noticia }) {
    return <>
        <Container  className="mb-5">
            <Cards key={noticia._id} idnoticia={noticia[0]._id} /* alterar aqui */ titulonoticia={noticia[0].titulonoticia}
                tiponoticia={noticia[0].tiponoticia} conteudonoticia={noticia[0].conteudonoticia}
                datahoracadastro={noticia[0].datahoracadastro} />
        </Container>
    </>
}
