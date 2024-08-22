const address = {
    street: {name: "Apple Park Way", zoom: 17}, 
    city: {name: "Cupertino", zoom: 12},
    state: {name: "California", zoom: 7},
    zip: {name: "95014", zoom: 15},
    country: {name: "United States", zoom: 4}
}

export default function Address({ onClick }){
    const handleClick = (value) => {
        onClick(value)
    }
    console.log(Object.keys(address));

    return (
        <div className="w-5/12 flex flex-wrap justify-left px-14">
            {
                Object.entries(address).map(([key, value]) => (
                    <div className="address text-4xl" key={key} onClick={() => handleClick(value)}>
                        <span className="hover:text-blue-600 cursor-pointer relative group">
                            { value.name }
                            <small className="hidden group-hover:block px-2 py-1 border-2 border-white rounded-xl bg-blue-500  text-white absolute text-sm font-light right-[50%] -top-8">
                                {key}
                            </small>
                        </span>
                    </div>
                ))
            }
        </div>
    );
}