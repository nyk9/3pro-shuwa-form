import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BBSData } from "@/types/types";
import Link from "next/link";

interface BBSCardProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSCardProps) => {
  const { id, title, content, username } = bbsData;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/bbs-posts/${id}`}>Read More</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;
