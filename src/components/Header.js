import React from "react"

// function Header() {
//     return (
//         <header className="navbar">
//             Terrible Jokes
//         </header>
//     )
// }

class Header extends React.Component {

    render = () => (
        <header className="navbar">
            <p>Welcome, {this.props.username}!</p>
        </header>
    )
}

export default Header;