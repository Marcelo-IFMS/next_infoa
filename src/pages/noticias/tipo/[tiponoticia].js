import { Container, Row } from 'react-bootstrap';
import Cards from '../../components/cards';
export async function getServerSideProps(req) {
  // Fetch data from external API
  const res = await fetch('https://g3-snowy.vercel.app/noticias/tiponoticia/'+req.query.tiponoticia)
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { noticias: repo } }
}
export default function Page({ noticias }) {
  return (
    <Container  className="mb-5">
      <Row xs={1} md={2} lg={3} className="g-4 pt-2">
        {Array.isArray(noticias) ?
          noticias.map(noticia =>
            <Cards  key={noticia._id}  idnoticia={noticia._id} /* alterar aqui */titulonoticia={noticia.titulonoticia}
              tiponoticia={noticia.tiponoticia} conteudonoticia={noticia.conteudonoticia}
              datahoracadastro={noticia.datahoracadastro} />
          ): "falso"}
      </Row>
    </Container>
  );
}
