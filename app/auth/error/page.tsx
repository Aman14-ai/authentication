import Cardwrapper from '@/components/auth/Cardwrapper'
import React from 'react'
import { BsExclamationTriangle } from 'react-icons/bs'

const page = () => {
  return (
    <Cardwrapper headerlabel="something went wrong" backButtonhref='/auth/login' backButtonlabel='Back to Login' useSocial={false} className='w-[400px]'>
      <div className='flex w-full items-center justify-center'>
        <BsExclamationTriangle className='text-destructive' size={50} />
      </div>
    </Cardwrapper>
  )
}

export default page
