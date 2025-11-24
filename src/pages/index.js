import { Container, Row } from 'react-bootstrap';
import Cards from './components/cards';
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://portalnoticiasinfoa.vercel.app/api/noticias/apinoticias')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { noticias: repo } }
}
export default function Home({ noticias }) {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4 pt-2">
        {Array.isArray(noticias) ?
          noticias.map(noticia =>
            <Cards idnoticia={noticia.idnoticia} titulonoticia={noticia.titulonoticia}
              tiponoticia={noticia.tiponoticia} conteudonoticia={noticia.conteudonoticia}
              datahoracadastro={noticia.datahoracadastro} />
          ): "falso"}
      </Row>
    </Container>
  );
}
