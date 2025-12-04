import { PublicationData } from "../dataModel";


function Entry({ publication, hyperlinks }: { publication: PublicationData; hyperlinks: boolean }) {
    return (
        <div className="publication entry">
            <div className="entry-header">
                <h4>{publication.title}</h4>
                
            </div>
            <div className="entry-meta">
                <h5>{publication.date}</h5>
            </div>
            {publication.description && <p className="entry-description">{publication.description}</p>}
            {publication.link && (
                hyperlinks ? (
                    <a href={`https://${publication.link}`} className="publication-link">View Article →</a>
                ) : (
                    <span className="publication-link">{publication.link}</span>
                )
            )}
        </div>
    );
}

interface PublicationProps {
    publications: PublicationData[];
    hyperlinks?: boolean;
}

export default function Publication({ publications, hyperlinks = true }: PublicationProps) {
    const publicationElements = publications.map((publication) => (
        <Entry
            key={`${publication.title}-${publication.journal}-${publication.date}`}
            publication={publication}
            hyperlinks={hyperlinks}
        />
    ));

    return (
        <div className="publication section">
            <h3>PROJECTS</h3>
            {publicationElements}
        </div>
    );
}