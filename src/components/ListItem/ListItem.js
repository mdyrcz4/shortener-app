import { Button, Row, Col, Container } from 'react-bootstrap';

export default function ListItem(props) {

    const handleCopy = () => {
        navigator.clipboard.writeText(props.url);
        props.handleCopied(props.url);
    }

    return (
        <Container>
            <Row className="justify-content-between align-middle">
                <Col md={8} xs={3}>
                    <Row>
                        <Col>
                            <span>{props.url}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="text-secondary">{props.original}</span>
                        </Col>
                    </Row>
                </Col>
                <Col md={2} sm={2}>
                    <Button variant="outline-primary" onClick={() => handleCopy()}>{props.copied ? 'Copied' : 'Copy'}</Button>
                </Col>
            </Row>
        </Container>
    );
}
