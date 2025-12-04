import { NationalityData } from "../dataModel";

interface NationalitiesProps {
    nationalities: NationalityData[];
}

export default function Languages({ nationalities}: NationalitiesProps) {
    const languageElements = nationalities.map((nationalities) => (
        <div
            key={nationalities.nationality}
            className="language-item"
        >
            <span className="language-name">{nationalities.nationality}</span>

        </div>
    ));

    return (
        <div className="languages section">
            <h3>NATIONALITIES</h3>
            <div className="languages-list">
                {languageElements}
            </div>
        </div>
    );
}