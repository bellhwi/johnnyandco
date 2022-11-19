import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Johnny & Co.',
  description:
    'We sell the used tiffany jewelry with the best condition and price',
  keywords: 'tiffanyandco, jewelry',
}

export default Meta
