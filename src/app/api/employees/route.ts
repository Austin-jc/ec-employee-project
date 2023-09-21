// import { User } from "../../utils/utils";
import { prisma } from "../../../utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.employee.findMany();
    return NextResponse.json({ message: "OK", result: result, status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, salary } = body.employee;
  try {
    const res = await prisma.employee.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      },
    });
    return NextResponse.json({ message: "OK", res }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
