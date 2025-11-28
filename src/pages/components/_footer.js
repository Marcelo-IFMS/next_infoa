import Container from 'react-bootstrap/Container';

export default function Footer() {
  return ( // border, border-warning, border-2, rounded-pill https://getbootstrap.com/docs/5.3/utilities/borders/#border
    //  bg-warning-subtle https://getbootstrap.com/docs/5.3/utilities/background/
    // text-center https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment
    // fixed-bottom https://getbootstrap.com/docs/5.3/utilities/position/#fixed
    // py-1 https://getbootstrap.com/docs/5.3/utilities/spacing/#padding
    <Container className='border 
    border-warning
    border-2
    rounded-pill 
    bg-warning-subtle
    text-center
    fixed-bottom
    py-1'>
     IFMS-Dourados
    </Container>
  );
}

