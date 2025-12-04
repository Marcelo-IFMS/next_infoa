import { Container, Row, Table } from 'react-bootstrap';
import Tablelist from './components/table';
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api6anoticias.vercel.app/noticias')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { noticias: repo } }
}
export default function Listanoticias({ noticias }) {

  return (<>
    <Container className="mb-5">
      <Table bordered hover responsive className="mb-3 table">
        <thead>
          <tr>
            <th className="text-center fw-bold bg-warning-subtle">
              ID
            </th>
            <th className="text-center fw-bold bg-warning-subtle">
              Titulo - Tipo
            </th> <th className="text-center fw-bold bg-warning-subtle">
              Conteudo
            </th>
            <th className="text-center fw-bold bg-warning-subtle">
              data
            </th><th className="text-center fw-bold bg-warning-subtle">
              Update
            </th><th className="text-center fw-bold bg-warning-subtle">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {
            noticias.map(noticia =>

              <Tablelist key={noticia._id} idnoticia={noticia._id} /* alterar aqui */
                titulonoticia={noticia.titulonoticia}
                tiponoticia={noticia.tiponoticia}
                conteudonoticia={noticia.conteudonoticia}
                datahoracadastro={noticia.datahoracadastro} />

            )}
        </tbody>
      </Table>
    </Container>
  </>
  );
}
