"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {RiTimeLine } from "@remixicon/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const Page = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <><main className="flex items-center  gap-0 justify-center    max-sm:flex max-sm:flex-col">
      <div className="w-[600px] max-sm:w-[400px] max-sm:h-[550px] rounded-lg  shadow-lg d h-[605px]  ml-[0px] mt-10 max-sm:mb-[300px]">
        <div className=" h-[240px]  w-full   ">
          <Image
            className=" w-full h-[240px] object-center bg-cover rounded-2xl"
            src="/assents/D.png"
            width={500}
            height={240}
            alt="nature" />
        </div>
        <div className=" mt-4">
          <h1 className=" text-black  ml-5  text-3xl "> Divine</h1>
          <p className=" mt-7 ml-5 flex gap-2 ">
            <RiTimeLine></RiTimeLine>
            4:00PM
          </p>
        </div>
        <div className=" mt-7">
          <h2 className="  text-left  w-[360px] ml-4  ">
            GO TOTHE ROOM LOCK THE DOOR CLOOSE YOUR EUSE TALK TO THE REAL YOU AND OPEN THE EYES FROM INSIDE DIVEN IS WWAITING FOR YOU
          </h2>
        </div>

        <p className=" mt-[110px] ml-4 max-sm:mt-[55px]"> cooke setting</p>

      </div>

      <div className=" mt-5 ml-[4px] max-sm:ml-[-90px] w-[600px] h-[600px] max-sm:w-[200px] max-sm:h-[400px] max-sm:mt-[-200px]">
        <div className={cn("grid gap-2")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4  max-sm:w-1" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[600px] h-[568px] p-0" align="start">
              <div className=" relative">
                <div className='rotate-45  skew-y-3  w-[140px] absolute left-[490px] rounded-md h-11  rounded-l-lg shadow-md'>
                  <h1 className=" text-center mt-1"> Calendly</h1>
                </div>

                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2} />
              </div>

            </PopoverContent>
          </Popover>
        </div>
      </div>


    </main><Pagination>
        <PaginationContent>
        <PaginationItem>
            <PaginationPrevious href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/home">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/pagetwo">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/pagethree">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/pagefour">4</PaginationLink>
          </PaginationItem>
          
        </PaginationContent>
      </Pagination></>
  );
};

export default Page;
