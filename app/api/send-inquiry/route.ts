export async function POST(request: Request) {
  try {
    const body = await request.json()

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, just log to console
    console.log('Wholesale inquiry received:', body)

    // Return success response
    return Response.json({ success: true })
  } catch (error) {
    console.error('Failed to process inquiry:', error)
    return Response.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
