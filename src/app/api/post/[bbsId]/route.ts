import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ bbsId: string }> },
) {
  const bbsid = (await params).bbsId;
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsid),
    },
  });
  return NextResponse.json(bbsDetailData);
}
