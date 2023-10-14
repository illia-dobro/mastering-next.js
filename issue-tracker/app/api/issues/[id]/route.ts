import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { createIssueSchema } from '@/app/validation-schemas';

export async function PATCH(request: NextRequest, { params }: { params: { id: string}}) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
     where: { id: parseInt(params.id)}
  });

  if(!issue){
    return NextResponse.json({ error: 'Invalid'}, { status: 404});
  }

  const issueUpdated = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description
    }
 });

 return NextResponse.json(issueUpdated)
}