import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';

const poppins = Poppins({
    subsets: ['latin'],
    weight: [ '600', '700'],
})
type Props = {
    label:string;
}

const Header = ({label}: Props) => {
  return (
    <div className='w-full flex flex-col items-center justify-center space-y-4'>
        <h1 className={cn("text-3xl font-semibold",poppins.className)}>🌐Auth</h1>
        <p className='text-md text-muted-foreground'>{label}</p>
        <hr className='w-1/2 border-gray-300' />
    </div>
  )
}

export default Header