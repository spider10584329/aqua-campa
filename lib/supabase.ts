import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flrfnklpswvbnzfjvwau.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZscmZua2xwc3d2Ym56Zmp2d2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzODc3MzYsImV4cCI6MjA3NDk2MzczNn0.Nn0TQHPBr5vRnsuypcU7BdZxsxFmQPJ7qBOiu6mKeO0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id: string
  name: string
  phone: string
  email: string
  reason: string
  message: string
  created_at: string
}
