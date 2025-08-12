import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('Contact form submission:', { name, email, subject });

    // Validate the request body
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    
    console.log('MongoDB connected successfully');

    // Insert the contact form data into the database
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    
    // More detailed error message for debugging
    const errorMessage = error instanceof Error 
      ? `${error.name}: ${error.message}` 
      : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: errorMessage,
        time: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();

    // Check connection status
    const connectionStatus = {
      isConnected: true,
      database: db.databaseName,
      message: 'Successfully connected to MongoDB!',
    };

    return NextResponse.json(connectionStatus);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { 
        isConnected: false, 
        error: 'Failed to connect to MongoDB', 
        message: 'Connection to database failed. Please check your MongoDB configuration.'
      },
      { status: 500 }
    );
  }
}