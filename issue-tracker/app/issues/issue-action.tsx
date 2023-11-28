import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueStatusFilter from './_components/issue-status-filter'

const IssueAction = () => {
  return (
      <Flex mb='5' justify='between'>
        <IssueStatusFilter/>
      <Button variant="classic">
        <Link href="/issues/new">New issue</Link>
      </Button>
      </Flex>
  )
}

export default IssueAction
