import { BBSData } from "@/types/types";
import Link from "next/link";

async function getDetailBBSData(id: string) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const bbsDetailData: BBSData = await response.json();
  return bbsDetailData;
}

export default async function BBSDetailPage({
  params,
}: {
  params: Promise<{ bbsId: string }>;
}) {
  const { bbsId } = await params;
  const bbsDetailData = await getDetailBBSData(bbsId);
  const { title, content, username } = bbsDetailData;
  console.log(bbsDetailData);
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{username}</p>
      </div>
      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link
        href="/"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        戻る
      </Link>
    </div>
  );
}
