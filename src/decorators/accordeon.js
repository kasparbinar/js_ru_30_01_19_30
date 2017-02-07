import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    state = {
        openId: null
    }

    toggleOpen = openId => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        if (this.state.openId == openId){
            this.setState({
                openId: null
            })
        } else {
            this.setState({
                openId
            })
        }

    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
}
