import { z } from 'zod'

export const formSchemaID = z.object({
  id: z.number(),
})

export const formSchemaQuestion = z.object({
  question: z.string(),
  answer: z.string(),
  explanation: z.string().optional(),
})

export const formSchemaCreateChapter = z.object({
  title: z.string(),
  content: z.string(),
  questions: z.array(formSchemaQuestion),
})

export const formSchemaCreateCourse = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  published: z.boolean(),
  image: z.any().optional(),
  chapters: z.array(formSchemaCreateChapter),
})