import { Link } from '@/app/components';
import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

const EditIssueButton = ({ issueId }: {issueId: number}) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>Edit issue</Link>
    </Button>
  );
};

export default EditIssueButton;
