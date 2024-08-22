const address = {
    street: "Apple Park Way", 
    city: "Cupertino",
    state: "California",
    zip: "95014",
    country: "United States"
}

export default function Address({ onClick }){
    const handleClick = (value) => {
        onClick(value)
    }

    return (
        <div className="p-4">
            {
                Object.entries(address).map(([key, value]) => (
                    <div key={key} onClick={() => handleClick(value)}>
                        <p className="text-4xl hover:text-blue-600 cursor-pointer">
                            { value }
                        </p>
                    </div>
                ))
            }
        </div>
    );
}