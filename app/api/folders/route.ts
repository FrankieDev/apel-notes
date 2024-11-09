import { NextResponse } from 'next/server'
import { db } from '@/db/turso'
import { foldersTable } from '@/db/schema'

export async function GET() {
  //TODO: add where clause to filter folders by user and active status

  try {
    const result = await db.select().from(foldersTable).all()

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
  const { name, userId } = await request.json()

  if (!name || !userId) {
    return new Response(
      JSON.stringify({ error: 'Name and userId are required' }),
      { status: 400 }
    )
  }

  const newFolder = await db
    .insert(foldersTable)
    .values({ name: name, userId, isActive: 1, dateAdd: new Date().toString() })
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
