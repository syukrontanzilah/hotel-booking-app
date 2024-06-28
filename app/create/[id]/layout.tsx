import type { ReactNode } from 'react'

type LayoutType = {
    children: ReactNode
}

const LayoutCreation = ({children}: LayoutType) => {
  return (
    <div className='mt-10'> {children}</div>
  )
}

export default LayoutCreation