import React from 'react'
import FLink from '../components/FLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FLink filter='SHOW_ALL'>
      All
    </FLink>
    {', '}
    <FLink filter='SHOW_COMPLETED'>
      Completed
    </FLink>
    {', '}
    <FLink filter='SHOW_ACTIVE'>
      Active
    </FLink>
  </p>
)

export default Footer
