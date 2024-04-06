import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export default function Home({  className,
}: React.HTMLAttributes<HTMLDivElement>) {

 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/home" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/home">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/about">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/home" />
    </PaginationItem>
    <PaginationEllipsis />
  </PaginationContent>
</Pagination>

  
    </main>
  );
}
