-- Create the contact_submissions table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  reason VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better query performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row Level Security (RLS) for security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON contact_submissions;

-- Create policy to allow insert for anonymous users (for the contact form)
CREATE POLICY "Enable insert for anonymous users" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Create policy to allow insert for authenticated users as well
CREATE POLICY "Enable insert for authenticated users" ON contact_submissions
  FOR INSERT TO authenticated WITH CHECK (true);

-- Create policy to allow select for authenticated users and service role (for admin access)
CREATE POLICY "Enable read for authenticated users" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

-- Create policy to allow select for service role (for API access)
CREATE POLICY "Enable read for service role" ON contact_submissions
  FOR SELECT TO service_role USING (true);

-- Optional: Create a view for admin dashboard with formatted data
CREATE OR REPLACE VIEW admin_contact_submissions AS
SELECT 
  id,
  name,
  phone,
  email,
  reason,
  message,
  created_at,
  CASE 
    WHEN reason = 'preorder' THEN 'Pre-Order'
    WHEN reason = 'collaboration' THEN 'Business Collaboration'
    WHEN reason = 'general' THEN 'General Enquiry'
    ELSE reason 
  END as formatted_reason
FROM contact_submissions
ORDER BY created_at DESC;
