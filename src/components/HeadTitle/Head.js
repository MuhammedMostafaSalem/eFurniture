import React from 'react'

const Head = (props) => {

    document.title = 'eFurniture ' + props.title

    return (
        <div>{props.children}</div>
    )
}

export default Head