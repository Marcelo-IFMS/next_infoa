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
      <Table bordered hover responsive className="mb-3">
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
          {Array.isArray(noticias) ?
            noticias.map(noticia =>

             <tr> <th className="text-center align-middle">
                <a href={`/noticias/${noticia._id}`}>{noticia._id}</a>
              </th>
              <td className="align-middle">
                <a href={`/noticias/${noticia._id}`}>{noticia.titulonoticia} - {noticia.tiponoticia}</a>
              </td>
              <td className="align-middle">
                {noticia.conteudonoticia}
              </td>
              <td className="align-middle">
                {new Date(noticia.datacadastro).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </td>
              <td className="text-center align-middle">
                <Tablelist
                  idnoticia={noticia._id}
                  titulonoticia={noticia.titulonoticia}
                  conteudonoticia={noticia.conteudonoticia}
                  tiponoticia={noticia.tiponoticia}
                  datahoracadastro={noticia.datacadastro}
                />
              </td>
              <td className="text-center align-middle">
                <a
                  href="#"
                  onClick={() => delNoticiaRequest(
                    noticia._id,
                    setResultadoCadastro,
                    setShowDel
                  )}
                >
                  delete
                </a>
              </td>
            </tr> 

            ) : "falso"}
        </tbody>
      </Table>
    </Container>
  </>
  );
}
