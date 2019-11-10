import React from "react"

class Footer extends React.Component {

    getStyles = () => (
        {
            color: "orange",
            backgroundColor: "red",
            fontSize: 20
        }
    )

    render = () => (
        <footer>
            <h1 style={this.getStyles()} >This is my footer</h1>
        </footer>
    )
}

export default Footer;