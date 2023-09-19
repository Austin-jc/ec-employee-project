import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const result = await prisma.employee.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const result = await prisma.employee.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = await request.json();
  const { firstName, lastName, salary } = body.userInfo;
  try {
    const result = await prisma.employee.update({
      where: {
        id: id,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      },
    });
    return NextResponse.json(
      { message: "OK", result: result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
