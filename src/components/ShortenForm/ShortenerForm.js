import { useFormik } from "formik";
import * as Yup from 'yup';
import { Button, Form, Col } from 'react-bootstrap';

export default function ShortenerForm(props) {

    const formik = useFormik({
        initialValues: {
            url: ''
        },
        validationSchema: Yup.object({
            url: Yup.string().url('Invalid url').required('Required')
        }),
        onSubmit: async values => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: values.url })
            };

            const response = await fetch(`${process.env.REACT_APP_API_URL}/shorten`, requestOptions);
            const data = await response.json();
            data.original = formik.values.url;
            props.handleShortenUrl(data);
            formik.values.url = '';
        }
    });

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Row className="justify-content-center">
                    <Col md={6}>
                        <Form.Control
                            type="text"
                            id="url"
                            name="url"
                            placeholder="Your url goes here"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.url && formik.errors.url} />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.url}
                        </Form.Control.Feedback>
                    </Col>
                    <Col md={1}>
                        <Button type="submit">Shorten</Button>
                    </Col>
                </Form.Row>
            </Form>
        </>
    );
}