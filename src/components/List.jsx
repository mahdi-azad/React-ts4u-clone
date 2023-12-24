import React from "react";

const List = () => {
    const lists = [
        {
            image: "/image1.png",
            heading: "Cross-Platform Desktop Development",
            description: "Cross-platform development for mobile platforms is often a good way to cut development costs and bring your solution to the market faster."
        },
        {
            image: "/image2.png",
            heading: "Windows Application Development",
            description: "Windows OS supports fast and performant app. It is here to stay and it gives every software vendor the direct access to the whole 700 millions of devices running on Windows 10."
        },
        {
            image: "/image3.png",
            heading: "Linux Application Development",
            description: "Linux OS supports fast and performant app. It is here to stay and it gives every software vendor the direct access to the whole 700 millions of devices running on Windows 10."
        }
    ]
    return (
        <div>
            <ul>
                {
                    lists.map((item, i) => <li className="list">
                        <img src={item.image} alt="image1" /><br/>
                        <h3>{item.heading}</h3> <br/>
                        <p>{item.description}</p>{item.description}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default List
