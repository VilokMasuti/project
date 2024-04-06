"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import { RiTimeLine } from "@remixicon/react";
import { RiCalendar2Fill } from "@remixicon/react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import check from "@/constnts/check";

interface checks {
  id: string;
  label: string;
}

const page = () => {
  return (
    <>
      <main className=" flex max-sm:flex-col">
        <div className="w-[500px] text-sm text-slate-500 max-sm:w-[400px] max-sm:h-[550px] rounded-lg  shadow-lg d h-[660px] max-sm:mr-[-323px]  flex-shrink ml-[10px] mt-2 max-sm:mb-[300px]">
          <div className=" h-[240px]  w-full   ">
            <Image
              className=" w-full h-[240px] object-center bg-cover rounded-2xl"
              src="/assents/D.png"
              width={500}
              height={240}
              alt="nature"
            />
          </div>
          <div className=" mt-4">
            <h1 className=" text-black  ml-5 font-bold  text-3xl "> Divine</h1>
            <p className=" mt-7 ml-5 flex gap-2 ">
              <RiTimeLine></RiTimeLine>
              4:00PM
            </p>
          </div>
          <div className=" flex gap-2 mt-4 ml-4">
            <RiCalendar2Fill color="black" />
            <p>
              {" "}
              12:00-12:45 Thursday,
              <br />
              November ,2023{" "}
            </p>
          </div>
          <div className=" mt-7">
            <h2 className="  text-left  w-[320px] ml-4  ">
              GO TOTHE ROOM LOCK THE DOOR CLOOSE YOUR EUSE TALK TO THE REAL YOU
              AND OPEN THE EYES FROM INSIDE DIVEN IS WWAITING FOR YOU
            </h2>
          </div>

          <p className=" mt-[75px] ml-4 max-sm:mt-[25px]"> cooke setting</p>
        </div>
        <div className=" w-[1000px]  max-sm:mt-[-230px] h-[669px] shadow-lg rounded-sm ">
          <h1 className=" font-bold text-xl text-black ml-5">
            {" "}
            Enter your Details{" "}
          </h1>
          <div className=" mt-4 gap-6 ml-5">
            <Input className="w-[400px] mt-3 " type="NAME" placeholder="Name" />

            <Input
              className="w-[400px] mt-3"
              type="Email"
              placeholder="Email"
            />
            <Button className=" rounded-full border-blue-600 border bg-white  bg-none mt-4 p-2  text-blue-600">
              {" "}
              Add Guests
            </Button>
          </div>
          <p className=" pt-4 pl-4  font-bold">Fill the mark </p>
          {check.map((check: checks, index: number) => (
  <div key={index} className="flex items-center gap-2 pt-4 pl-4">
      
    <Checkbox id={check.id} />
    <label
      htmlFor={check.id}
      className="text-sm font-medium leading-none ml-2  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {check.label}
    </label>
  </div>
))}
<div>
     <h1 className=" text-black  font-bold  pl-4 pt-3 "> please share anything that will help us</h1>  
     <textarea className=" border-r-black border  ml-2 rounded-sm w-[320px]" ></textarea>

     <h1 className=" text-black  font-bold pl-4 pt-3 "> please share  the EVENT NAME  to help us</h1>  
     <Input className="w-[320px] mt-3 ml-3 " type="NAME" placeholder="" />
     <Button className=" bg-blue-500 text-white rounded-lg p-2 py-3 ml-4 mt-3 hover:none"> Stetting EVENT </Button>
</div>

        </div>
      </main>
      <Pagination>
        <PaginationContent className=" max-sm: mt-[50px]">
        <PaginationItem>
         
            <PaginationLink href="/">1</PaginationLink>
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
      </Pagination>
    </>
  );
};

export default page;
