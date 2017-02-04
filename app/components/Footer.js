import React from 'react'
import Link from './Link'

const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <Link active={true} onClick={() => console.log('filter selected: all')}>
        All
      </Link>
      {' '}
      <Link active={false} onClick={() => console.log('filter selected: completed')}>
        Completed
      </Link>
      {' '}
      <Link active={false} onClick={() => console.log('filter selected: active')}>
        Active
      </Link>
    </p>
  )
}

export default Footer
