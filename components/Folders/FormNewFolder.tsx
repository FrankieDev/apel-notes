'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Toaster, toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type FolderType } from '@/db/schema'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.'
  })
})

type Folder = Pick<FolderType, 'id' | 'name'>

interface FormNewFolderProps {
  // add props here
  closeModalNewFolder: (value: boolean) => void
  addNewFolder: (folder: Folder) => void
}

export default function FormNewFolder({
  closeModalNewFolder,
  addNewFolder
}: FormNewFolderProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: ''
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the form ', {
      className: 'my-classname',
      description: 'My description',
      duration: 5000
      //icon: <MyIcon />
    })

    const result = await fetch('/api/folders', {
      method: 'POST',
      body: JSON.stringify({ name: data.name, userId: 1 })
    }).then((res) => res.json())

    console.log(result)

    addNewFolder({
      id: result.folder.id,
      name: result.folder.name
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='text-end'>
          <Button
            type='button'
            variant={'ghost'}
            onClick={() => closeModalNewFolder(false)}
          >
            Cancel
          </Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
      <Toaster />
    </Form>
  )
}
