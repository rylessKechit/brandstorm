import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
})

// Types pour TypeScript
type ValidationErrorDetail = {
  field: string
  message: string
}

type ApiResponse = {
  success?: boolean
  message?: string
  error?: string
  details?: ValidationErrorDetail[]
}

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5 // max 5 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitStore.get(ip)
  
  if (!userLimit || now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, lastReset: now })
    return true
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }
  
  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json<ApiResponse>(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Basic honeypot check (if a hidden field is filled)
    if (body.website) {
      return NextResponse.json<ApiResponse>(
        { error: 'Submission rejected' },
        { status: 400 }
      )
    }

    // Simulate email sending (replace with actual email service)
    // In production, use services like Resend, SendGrid, or AWS SES
    const emailData = {
      to: 'hello@vizionaire.com',
      from: 'noreply@vizionaire.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: generateEmailTemplate(validatedData),
      replyTo: validatedData.email
    }

    // Log the submission (in production, save to database)
    console.log('New contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip,
      userAgent: request.headers.get('user-agent')
    })

    // Send confirmation email to user
    const confirmationEmail = {
      to: validatedData.email,
      from: 'hello@vizionaire.com',
      subject: 'Thank you for contacting VIZIONAIRE!',
      html: generateConfirmationTemplate(validatedData.name)
    }

    // In production, actually send the emails
    // await sendEmail(emailData)
    // await sendEmail(confirmationEmail)

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json<ApiResponse>(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const details: ValidationErrorDetail[] = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message
      }))
      
      return NextResponse.json<ApiResponse>(
        { 
          error: 'Validation failed', 
          details
        },
        { status: 400 }
      )
    }

    // Handle other errors
    console.error('Contact form error:', error)
    return NextResponse.json<ApiResponse>(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

// Generate email template for internal notification
function generateEmailTemplate(data: z.infer<typeof contactSchema>): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #ec4899; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Contact Form Submission</h1>
          <p>You have received a new inquiry from your website!</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ` : ''}
          
          ${data.company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          
          ${data.service ? `
          <div class="field">
            <div class="label">Service Needed:</div>
            <div class="value">${data.service}</div>
          </div>
          ` : ''}
          
          ${data.budget ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${data.budget}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the VIZIONAIRE contact form on ${new Date().toLocaleString()}</p>
          <p>Respond promptly to convert this lead! 🎯</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate confirmation email template for user
function generateConfirmationTemplate(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting VIZIONAIRE!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .cta { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 20px 0; font-weight: bold; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        .social { margin: 20px 0; text-align: center; }
        .social a { color: #ec4899; text-decoration: none; margin: 0 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 VIZIONAIRE</h1>
          <h2>Thank You, ${name}!</h2>
          <p>We've received your message and we're excited to help transform your business.</p>
        </div>
        
        <div class="content">
          <h3>What happens next?</h3>
          
          <div style="margin: 20px 0;">
            <strong>⚡ Quick Response:</strong> We'll get back to you within 2 hours during business hours (Sun-Thu, 9AM-6PM GST).
          </div>
          
          <div style="margin: 20px 0;">
            <strong>📞 Free Consultation:</strong> We'll schedule a 30-minute strategy call to discuss your goals and challenges.
          </div>
          
          <div style="margin: 20px 0;">
            <strong>📋 Custom Proposal:</strong> You'll receive a detailed proposal with strategy, timeline, and investment options.
          </div>
          
          <div style="margin: 20px 0;">
            <strong>🚀 Launch & Grow:</strong> Start seeing results within 30 days as we implement your campaigns.
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #2d5a2d; margin-top: 0;">🎁 Free Bonus!</h4>
            <p style="color: #2d5a2d; margin-bottom: 0;">Since you contacted us this week, you'll receive a complimentary competitor analysis and digital audit (valued at $500) - no strings attached!</p>
          </div>
          
          <div style="text-align: center;">
            <a href="https://vizionaire.com/about" class="cta">Learn More About Us</a>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out our <a href="https://vizionaire.com/demo" style="color: #ec4899;">success stories</a></li>
            <li>Follow us on social media for daily tips</li>
            <li>Call us directly at <a href="tel:+97141234567" style="color: #ec4899;">+971 4 123 4567</a></li>
          </ul>
          
          <div class="social">
            <a href="#">LinkedIn</a> |
            <a href="#">Instagram</a> |
            <a href="#">Twitter</a>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>VIZIONAIRE Digital Marketing</strong></p>
          <p>DIFC, Dubai, UAE | hello@vizionaire.com | +971 4 123 4567</p>
          <p>Revolutionizing digital marketing in the Middle East 🇦🇪</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}