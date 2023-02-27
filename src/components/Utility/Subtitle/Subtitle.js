import React from 'react'

const Subtitle = ({title}) => {
    return (
        <div className='text-center'>
            <h2
                className='sub-tile'
                style={{
                    textTransform: 'capitalize',
                    color: 'var(--primary-color)'
                }}
            >
                {title}
            </h2>
        </div>
    )
}

export default Subtitle