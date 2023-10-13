import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueAction = () => {
  return (
      <Button variant="classic">
        <Link href="/issues/new">New issue</Link>
      </Button>
  )
}

export default IssueAction
