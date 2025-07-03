import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, language, timestamp } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Create email content
    const emailSubject = language === 'es' 
      ? 'Nueva suscripción a lista de espera - OntheDot'
      : 'New Waitlist Subscription - OntheDot';

    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 5px; }
          .label { font-weight: bold; color: #2563eb; }
          .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 ${language === 'es' ? 'Nueva Suscripción a Lista de Espera' : 'New Waitlist Subscription'}</h1>
          </div>
          <div class="content">
            <p>${language === 'es' 
              ? 'Se ha registrado una nueva persona en la lista de espera de OntheDot:'
              : 'A new person has registered for the OntheDot waitlist:'
            }</p>
            
            <div class="info-row">
              <span class="label">${language === 'es' ? 'Nombre:' : 'Name:'}</span>
              ${name}
            </div>
            
            <div class="info-row">
              <span class="label">${language === 'es' ? 'Correo:' : 'Email:'}</span>
              <a href="mailto:${email}">${email}</a>
            </div>
            
            <div class="info-row">
              <span class="label">${language === 'es' ? 'Teléfono:' : 'Phone:'}</span>
              <a href="tel:${phone}">${phone}</a>
            </div>
            
            <div class="info-row">
              <span class="label">${language === 'es' ? 'Idioma:' : 'Language:'}</span>
              ${language === 'es' ? 'Español' : 'English'}
            </div>
            
            <div class="info-row">
              <span class="label">${language === 'es' ? 'Fecha de registro:' : 'Registration date:'}</span>
              ${new Date(timestamp).toLocaleString(language === 'es' ? 'es-ES' : 'en-US')}
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0;">
                <strong>${language === 'es' ? '💡 Recordatorio:' : '💡 Reminder:'}</strong>
                ${language === 'es' 
                  ? 'Esta persona espera obtener un año gratis del plan cuando se lance la plataforma.'
                  : 'This person expects to get a free year of the plan when the platform launches.'
                }
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p>OntheDot - ${language === 'es' ? 'Sistema de Gestión de Lista de Espera' : 'Waitlist Management System'}</p>
            <p>${new Date().getFullYear()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Here you would normally send the email using a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - etc.

    // For now, we'll simulate sending the email and log the data
    console.log('📧 New waitlist subscription:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Language:', language);
    console.log('Timestamp:', timestamp);
    console.log('---');
    console.log('Email to send to francisco.onel@walventus.com:');
    console.log('Subject:', emailSubject);
    console.log('Content:', emailContent);
    console.log('---');

    // TODO: Replace this with actual email sending
    // Example with Nodemailer:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com', // or your SMTP server
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@onthedot.com',
      to: 'francisco.onel@walventus.com',
      subject: emailSubject,
      html: emailContent
    });
    */

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: language === 'es' 
          ? 'Suscripción registrada exitosamente'
          : 'Subscription registered successfully'
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error processing waitlist subscription:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to process subscription'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}; 