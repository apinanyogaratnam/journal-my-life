import React from 'react'

const SubTitle = () => {
    const subtitle_text = "The place to write down your thoughts, ideas," + 
                          "and so much more while having the freedom to " + 
                          "set your journals publicly or privately"

    return (
        <div className="sub-title">
            <h4>{subtitle_text}</h4>
        </div>
    )
}

export default SubTitle
