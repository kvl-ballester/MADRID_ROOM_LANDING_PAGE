import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import './contact.css';

const validationSchema = Yup.object({
    name: Yup.string().required('contact.name_required'),
    email: Yup.string().email('contact.email_invalid').required('contact.email_required'),
    message: Yup.string().min(150, 'contact.message_min').required('contact.message_required'),
});

export default function Contact() {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                values,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ).then((response) => {
                alert('Mensaje enviado con éxito!');
                resetForm();
            }).catch((error) => {
                alert('Error al enviar el mensaje. Inténtalo de nuevo.');
            });
        },
    });

    return (
        <div className="contact">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="column">
                        <label htmlFor="name">{t('contact.name')}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.submitCount > 0 && formik.errors.name ? (
                            <div className="error">{t(formik.errors.name)}</div>
                        ) : null}
                    </div>
                    <div className="column">
                        <label htmlFor="email">{t('contact.email')}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.submitCount > 0 && formik.errors.email ? (
                            <div className="error">{t(formik.errors.email)}</div>
                        ) : null}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="message">{t('contact.message')}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        ></textarea>
                        {formik.submitCount > 0 && formik.errors.message ? (
                            <div className="error">{t(formik.errors.message)}</div>
                        ) : null}
                    </div>
                </div>
                <button type="submit">{t('contact.submit')}</button>
            </form>
        </div>
    );
}