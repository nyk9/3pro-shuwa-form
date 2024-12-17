import BBSCardList from "@/components/layouts/BBSCardList";
import { BBSData } from "@/types/types";

async function getBBSAllData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/post`, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
