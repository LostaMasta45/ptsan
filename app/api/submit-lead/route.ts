import { NextRequest, NextResponse } from 'next/server';
import { estimateFormSchema, contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Determine which schema to use based on the presence of certain fields
    const isEstimate = 'service' in body && 'budget' in body;
    const schema = isEstimate ? estimateFormSchema : contactFormSchema;
    
    // Validate the data
    const validatedData = schema.parse(body);
    
    // Log the submission (demo purposes)
    console.log('📨 New lead submission:', validatedData);
    console.log('Type:', isEstimate ? 'Estimate Request' : 'Contact Form');
    
    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // TODO: Integrate with CRM (HubSpot, Salesforce, etc.)
    // TODO: Send notification to WhatsApp Business API
    
    // Example email integration (commented out):
    /*
    await sendEmail({
      to: site.email,
      subject: isEstimate ? 'Permintaan Estimasi Baru' : 'Pesan Kontak Baru',
      body: JSON.stringify(validatedData, null, 2),
    });
    */
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Terima kasih! Tim kami akan segera menghubungi Anda.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead submission:', error);
    
    if (error instanceof Error && 'issues' in error) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Data tidak valid', 
          errors: error 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Terjadi kesalahan. Silakan coba lagi.' 
      },
      { status: 500 }
    );
  }
}
