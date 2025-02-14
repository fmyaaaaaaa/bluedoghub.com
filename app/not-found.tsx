import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="text-center space-y-6">
        <h1 className="text-display-lg text-brand">404</h1>
        <h2 className="text-heading-lg text-black-900">Page not found</h2>
        <p className="text-body-lg text-black-700 max-w-md">Sorry, the page you are looking for does not exist.</p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
