import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
    return (
        <div className='flex h-dvh justify-center items-center'>

            <SignIn />
        </div>
    )
}