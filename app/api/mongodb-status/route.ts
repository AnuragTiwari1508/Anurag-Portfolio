import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

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
      url: 'mongodb://localhost:27017/anurag-portfolio',
      question: 'क्या आप MongoDB से कनेक्ट हो गए हैं?',
      response: 'हां, MongoDB से सफलतापूर्वक कनेक्ट हो गया है! डेटाबेस का नाम है: ' + db.databaseName
    };

    return NextResponse.json(connectionStatus);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { 
        isConnected: false, 
        error: 'Failed to connect to MongoDB', 
        message: 'Connection to database failed. Please check your MongoDB configuration.',
        question: 'क्या आप MongoDB से कनेक्ट हो गए हैं?',
        response: 'नहीं, MongoDB से कनेक्शन में समस्या आई है। कृपया अपने कनेक्शन URL की जांच करें।'
      },
      { status: 500 }
    );
  }
}