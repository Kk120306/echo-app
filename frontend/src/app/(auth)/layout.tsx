import React from 'react'
import Navbar from '@/components/Navbar'

type layoutProps = {
    children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
    return (
        <div className="h-screen flex justify-center items-center bg-[url('/assets/landing/web-bg.jpg')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/70" />
            <Navbar />
            {children}
        </div>
    )
}

export default layout