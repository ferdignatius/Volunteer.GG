import { NextResponse } from 'next/server';
import { Organization, OrganizationImage, OrganizationMember, User } from '@/db/models';
import { Op } from 'sequelize';

// GET /api/organization - Get all organizations
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const organizations = await Organization.findAndCountAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`
        }
      },
      include: [
        {
          model: OrganizationImage,
          attributes: ['image_url']
        },
        {
          model: OrganizationMember,
          include: [
            {
              model: User,
              attributes: ['name', 'email']
            }
          ]
        }
      ],
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });

    return NextResponse.json({
      organizations: organizations.rows,
      total: organizations.count,
      page,
      totalPages: Math.ceil(organizations.count / limit)
    });
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// POST /api/organization - Create new organization
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, logo_url } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const organization = await Organization.create({
      name,
      description,
      logo_url,
      avg_rating: 0,
      credibility: 'pending' // default status
    });

    return NextResponse.json(organization, { status: 201 });
  } catch (error) {
    console.error('Error creating organization:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// GET /api/organization/[id] - Get single organization
export async function GET_ONE(request: Request, { params }: { params: { id: string } }) {
  try {
    const organization = await Organization.findByPk(params.id, {
      include: [
        {
          model: OrganizationImage,
          attributes: ['image_url']
        },
        {
          model: OrganizationMember,
          include: [
            {
              model: User,
              attributes: ['name', 'email']
            }
          ]
        }
      ]
    });

    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error fetching organization:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// PUT /api/organization/[id] - Update organization
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { name, description, logo_url, credibility } = body;

    const organization = await Organization.findByPk(params.id);
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    await organization.update({
      name,
      description,
      logo_url,
      credibility
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error updating organization:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// DELETE /api/organization/[id] - Delete organization
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const organization = await Organization.findByPk(params.id);
    if (!organization) {
      return NextResponse.json(
        { error: 'Organization not found' },
        { status: 404 }
      );
    }

    await organization.destroy();
    return NextResponse.json(
      { message: 'Organization deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting organization:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
