import ShortenerForm from './components/ShortenForm/ShortenerForm';
import LinksList from './components/LinksList/LinksList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const addNewUrl = (url) => {
    const item = { url: `${process.env.REACT_APP_API_URL}/${url.data}`, original: url.original };
    setShortenedUrls([item, ...shortenedUrls]);
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <h2>Shortener App</h2>
        </Row>
        <Row>
          <Col>
            <ShortenerForm
              handleShortenUrl={addNewUrl}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <LinksList
              items={shortenedUrls}
            />
          </Col>
        </Row>
      </Container>
      <footer className="sticky-bottom" style={{ textAlign: 'center' }}>
        Copyright &copy; {new Date().getFullYear()} mdyrcz4 | All Rights Reserved</footer>
    </>
  );
}

export default App;
