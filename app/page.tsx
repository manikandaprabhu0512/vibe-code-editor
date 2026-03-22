import { Button } from "@/components/ui/button";
import UserButton from "@/module/auth/components/UserButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button className="flex flex-col items-center justify-center bg-gray-100">
        Get Started
      </Button>
      <UserButton />
    </div>
  );
}
