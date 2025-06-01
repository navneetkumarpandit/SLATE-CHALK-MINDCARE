
// src/app/admin/layout.tsx
import { redirect } from 'next/navigation';
import { isAdminSession } from '@/lib/auth-utils';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Ensure layout checks auth on initial load, pages will re-check dynamically if needed
export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: ReactNode }) {

  return (
    <div>
       {/* Optional: Add a simple admin header or back navigation */}
        <div className="container mx-auto py-4 border-b mb-6">
            <Button asChild variant="outline" size="sm">
                <Link href="/admin">
                     <ArrowLeft className="mr-2 h-4 w-4" /> Back to Admin Dashboard
                </Link>
            </Button>
        </div>
      {children}
    </div>
  );
}
