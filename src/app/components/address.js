export default function Address({ street, city, state, zip, country, className}){
    return (
        <div className={`${className}`}>
            { street },
            { city },
            { state },
            { zip },
            { country }
        </div>
    );
}