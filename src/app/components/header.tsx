import React from 'react'
import { ModeToggle } from './modeToggle'
import Link from 'next/link'

function Header() {
    return (
        <div className="flex items-center justify-between m-5">
            <div className="font-bold uppercase">Startup</div>
            <ul className="flex gap-10 text-xl font-bold">
                <Link href='/'>Home</Link>
                <Link href='/project'>Project</Link>
                <Link href='/contact'>Contact</Link>
            </ul>
            <ModeToggle />
        </div>
    )
}

export default Header
