import React, { Component } from 'react'

interface contentCardProps {
    title: string
    subtitle: string
    createdAt: string
}

const ContentCard = (props: contentCardProps) => {
    const {title, subtitle, createdAt} = props
    return(
        <>
            <div className="w-96 h-24 bg-white shadow rounded">
                <p className="w-96 h-24 font-bold text-center">
                    <br/>{title}<br/>{subtitle}
                    <div className='text-xs'>
                            {createdAt}
                    </div>
                </p>
            </div>
        </>
    )
}


export default ContentCard