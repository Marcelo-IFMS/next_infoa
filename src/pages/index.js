import { Container, Row } from 'react-bootstrap';
import Cards from './components/cards';

export async function getServerSideProps() {
  const res = await fetch('https://g3-snowy.vercel.app/noticias');
  const repo = await res.json();

  return { props: { noticias: repo } };
}

export default function Home({ noticias }) {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4 pt-2">
        {Array.isArray(noticias)
          ? noticias.map(noticia => (
            <Cards key={noticia._id} noticia={noticia} />
          ))
          : "falso"}
      </Row>
    </Container>
  );
}
