'use client'

import React from 'react'

type Props = {
  error: Error
}

const ErrorPage = ({ error}: Props) => {
  return (
    <div>An unexpected error has occurred</div>
  )
}

export default ErrorPage