import * as Yup from 'yup';
import { Button, Form, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function ShortenerForm(props) {

    const schema = Yup.object().shape({
        url: Yup.string().url('Invalid url. Valid url example: https://www.google.com').required('Required')
    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async values => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: values.url })
        };

        const response = await fetch(`${process.env.REACT_APP_API_URL}/shorten`, requestOptions);
        const data = await response.json();
        data.original = values.url;
        props.handleShortenUrl(data);
        setValue("url", "");
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row className="justify-content-center">
                    <Col md={6}>
                        <Form.Control
                            type="text"
                            placeholder="Your url goes here"
                            isInvalid={errors.url}
                            defaultValue=""
                            {...register("url")} />
                        <Form.Control.Feedback type="invalid">
                            {errors.url?.message}
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