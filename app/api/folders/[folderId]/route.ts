import { NextResponse } from 'next/server'
import { db } from '@/db/turso'
import { notesTable } from '@/db/schema'
import { eq, sql } from 'drizzle-orm'

export async function GET({
  params
}: {
  params: Promise<{ folderId: string }>
}) {
  //TODO: add where clause to filter folders by user and active status
  const folderId = (await params).folderId

  try {
    const result = await db
      .select()
      .from(notesTable)
      .where(sql`${(notesTable.folderId, folderId)}`)
      .all()

    console.log(result)

    return NextResponse.json({
      data: result
    })
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  const { userId, content, folderId } = await request.json()

  if (!folderId || !userId) {
    return new Response(
      JSON.stringify({ error: 'Name and userId are required' }),
      { status: 400 }
    )
  }

  const newFolder = await db
    .insert(notesTable)
    .values({
      title: 'Titulo de prueba',
      content: content,
      folderId,
      userId,
      isActive: 1
    })
    .returning()

  console.log(newFolder)

  return NextResponse.json(
    {
      message: 'Folder created successfully',
      folder: newFolder[0]
    },
    { status: 201 }
  )
}
