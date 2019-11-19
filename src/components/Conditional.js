import React from "react"


class Conditional extends React.Component {

    render() {

        return (
            <div>
                {this.props.isLoading ? <h1>Loading...</h1> : <h1>This is the conditional component</h1>}
            </div>
        )

    }
}
export default Conditional;