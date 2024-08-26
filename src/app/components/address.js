import { useState } from "react";

const address = {
    street: {name: "Apple Park Way", zoom: 17}, 
    city: {name: "Cupertino", zoom: 12},
    state: {name: "California", zoom: 7},
    zip: {name: "95014", zoom: 15},
    country: {name: "United States", zoom: 5}
}

export default function Address({ onClick }){
    const [isSkeletonView, setIsSkeletonView] = useState(false)
    const handleClick = (value) => {
        onClick(value)
    }
    console.log(Object.keys(address));

    return (
        <div className="flex flex-col w-5/12 justify-left px-14">
            <div>
                {
                    isSkeletonView 
                    ? <div className="flex flex-wrap">
                            {Object.entries(address).map(([key, value]) => (
                                <div className="address text-4xl" key={key} onClick={() => handleClick(value)}>
                                    <span className="hover:text-blue-600 cursor-pointer relative group">
                                        { value.name }
                                        <small className="hidden group-hover:block px-2 py-1 border-2 border-white rounded-xl bg-blue-500  text-white absolute text-sm font-light right-[50%] -top-8">
                                            {key}
                                        </small>
                                    </span>
                                </div>
                            ))}
                       </div> 
                    : <div className="space-y-6">
                       { Object.entries(address).map(([key, value]) => (
                            <div className="flex flex-col" key={key} onClick={() => handleClick(value)}>
                                <small className="text-sm text-gray-600">{key.toUpperCase()}</small>
                                <span className="hover:text-blue-600 cursor-pointer relative group text-4xl">
                                    { value.name }
                                </span>
                            </div>
                        ))}
                      </div>
                }
            </div>
            <button 
                onClick={() => setIsSkeletonView(!isSkeletonView)}
                className="text-xs absolute bottom-0 my-4 p-2 bg-gray-700 rounded-lg">
                    SKELETON VIEW
            </button>
        </div>
    );
}