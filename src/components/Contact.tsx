import { ContactData } from "../dataModel";

interface ContactProps extends ContactData {
    hyperlinks?: boolean;
}

export default function Contact(props: ContactProps) {
    const hyperlinks = props.hyperlinks !== false;

    return (
        <div className="contact section">
            <h3>CONTACT</h3>
            <div className="contact-info">
                <p className="contact-item">
                    <span className="contact-label">Email:</span>
                    {hyperlinks ? (
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    ) : (
                        props.email
                    )}
                </p>
                <p className="contact-item">
                    <span className="contact-label">Phone:</span>
                    {props.phone}
                </p>
                <p className="contact-item">
                    <span className="contact-label">LinkedIn:</span>
                        {props.linkedin}
                </p>
                <p className="contact-item">
                    <span className="contact-label">GitHub:</span>
                    {props.github}
                </p>
                {props.personal_website && (
                    <p className="contact-item">
                        <span className="contact-label">Website:</span>
                            {props.personal_website}
                    </p>
                )}
            </div>
        </div>
    );

}