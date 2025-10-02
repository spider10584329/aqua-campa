import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Valid email is required'),
  reason: z.string().min(1, 'Reason is required'),
  message: z.string().min(1, 'Message is required'),
  verification: z.string().refine(val => val === 'black', {
    message: 'Verification answer is incorrect'
  })
});

export async function POST(request: NextRequest) {
  console.log('🚀 API Route /api/contact - POST request received');
  console.log('📅 Timestamp:', new Date().toISOString());
  
  try {
    const body = await request.json();
    console.log('📝 Request body received:', JSON.stringify(body, null, 2));
    
    // Validate the data
    console.log('✅ Starting validation...');
    const validatedData = contactSchema.parse(body);
    console.log('✅ Validation successful:', JSON.stringify(validatedData, null, 2));
    
    // Insert into Supabase database
    console.log('💾 Attempting to save to Supabase...');
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: validatedData.name,
          phone: validatedData.phone,
          email: validatedData.email,
          reason: validatedData.reason,
          message: validatedData.message,
        }
      ])
      .select()
      .single();
    
    if (error) {
      console.error('❌ Supabase error:', error);
      console.error('❌ Error details:', JSON.stringify(error, null, 2));
      throw new Error('Failed to save to database');
    }
    
    console.log('✅ New contact submission saved successfully:', data);
    
    console.log('🎉 Sending success response...');
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: data.id 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      console.error('❌ Validation failed - Details:', JSON.stringify(error.errors, null, 2));
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    console.error('❌ Unexpected error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// GET endpoint for admin to retrieve contacts
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to fetch from database');
    }

    return NextResponse.json({
      success: true,
      contacts: data,
      total: data.length
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch contacts' 
      },
      { status: 500 }
    );
  }
}
