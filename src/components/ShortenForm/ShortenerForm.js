import { useFormik } from "formik";
import * as Yup from 'yup';

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

            props.handleShortenUrl(data);
            formik.values.url = '';
        }
    });

    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="url">Url to shorten</label>
                    <input
                        id="url"
                        name="url"
                        type="text"
                        placeholder="Your url goes here"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.url}
                    />
                    {formik.touched.url && formik.errors.url ? (
                        <div>{formik.errors.url}</div>
                    ) : null}
                    <button htmlType="submit">Shorten</button>
                </form>
            </div>
        </div>
    );
}