'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes';

const DeleteIssueButton = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm delete</AlertDialog.Title>
        <AlertDialog.Description>
          Are you suer you wont to delete?
        </AlertDialog.Description>
        <Flex mt='4' gap='3'>
        <AlertDialog.Cancel>
            <Button variant='soft' color='gray'>Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
          <Button variant='soft' color='red'>Yes, delete</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
