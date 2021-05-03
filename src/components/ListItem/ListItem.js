import { Button, Row, Col, Container, ButtonGroup } from 'react-bootstrap';

export default function ListItem(props) {

    const handleCopy = () => {
        navigator.clipboard.writeText(props.url);
        props.handleCopied(props.url);
    };

    const handleDelete = () => {
        props.handleDelete(props.url);
    };

    return (
        <Container>
            <Row className="justify-content-between align-middle">
                <Col xl={10} md={10} sm={8} xs={8}>
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
                <Col xl={2}>
                    <ButtonGroup>
                        <Button variant="outline-primary" onClick={() => handleCopy()}>{props.copied ? 'Copied' : 'Copy'}</Button>
                        <Button variant="outline-danger" onClick={() => handleDelete()}>Delete</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
}
