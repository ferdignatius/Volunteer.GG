import User from '../../../../models/user'

export async function GET() {
  try {
    const users = await User.findAll({ order: [['id', 'ASC']] });

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}