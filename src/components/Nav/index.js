import React from 'react'


function Nav(){
    const categories = [{
        name:"About Me"
    },
    {
    name:"Portfolio"
    },
    {
    name: "Contact"
    }
]
    return(
    <header className= "nav container">
        <h2>Justin Jenkins</h2>
        <ul className="tabs container">
            {categories.map((category) =>(
                <li key={category.name}>
                    <span>{category.name}</span>
                    </li>
            ))}
        </ul>

    </header>
)
    }
export default Nav