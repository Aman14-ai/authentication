import React from 'react'
import { CheckCircle } from 'lucide-react'

type Props = {
    message?: string;
}

const FormSuccess = (props: Props) => {
    if(!props.message) return null;
  return (
    <div className='bg-green-500/90 p-2 px-3 flex rounded-md gap-2 items-center'>
        <CheckCircle className='text-white' />
        <p className='text-white'>{props.message }</p>
    </div>
  )
}

export default FormSuccess