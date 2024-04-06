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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiCalendarFill,
  RiCheckboxCircleFill,
  RiContactsFill,
  RiEarthFill,
  RiVideoOnFill,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className=" mx-auto items-center flex flex-shrink justify-center">
        <div className=" rounded-md shadow-md w-[800px] h-[600px] mt-10">
          <div className="  flex items-center justify-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" mt-5 flex items-center justify-center">
            <RiCheckboxCircleFill />
            <h1 className=" font-bold text-black  text-xl">
              You are scheduled
            </h1>
          </div>

          <p className=" mt-4 ml-[190px]">
            A calender invention as been send to your Email{" "}
          </p>
          <div className="  ml-[100px] rounded-md w-[600px] h-[210px] border border-slate-4">
            <h1 className="  max-sm:ml-[100px]  font-bold text-xl text-black ml-6"> Diven</h1>
            <div className=" flex-col  max-sm:ml-[80px]  text-slate-500 ">
              <span className=" flex ml-2 p-3 gap-3">
                <RiContactsFill className=" " />
                <p> Vilok Masuti</p>
              </span>
              <span className=" flex ml-2 p-3 gap-3">
                <RiCalendarFill />
                <p> 12:30-12:45.Thursday,NOVEMBER 30</p>
              </span>
              <span className=" flex ml-2 p-3 gap-3">
                <RiEarthFill />
                <p> UK,Irekand,TIME</p>
              </span>
              <span className=" flex ml-2 p-3 gap-3">
                <RiVideoOnFill />
                <p> WEB DEATAILES TO FOLLOW</p>
              </span>
            </div>
            <div className=" ml-[38px] mt-5 w-[550px]   border-b-4 border-slate-400"></div>
            <p className=" ml-[39px] mt-5   max-sm:ml-[90px] text-sm font-bold text-black">
              {" "}
              Schedule your own meeting with Calendly with free{" "}
            </p>
            <p className=" ml-[39px] mt-3 text-sm  max-sm:ml-[90px] ">
              {" "}
              Eliminat the back-and-fourth email for finding time..{" "}
            </p>
            <div className=" flex gap-4 ml-[45px] mt-5  max-sm:ml-[90px]">
              <Button className=" rounded-full border py-6 flex gap-2">
               
                Sign up with Google
              </Button>
              <Button className=" rounded-full border  py-6 border-black ">
                Sign up with Microsoft
              </Button>
             
            </div>
            <p className=" mt-8 ml-[160px] text-sm text-blue-500  cursor-pointer  max-sm:ml-[180px]" >Sign up with email</p>
            <p className=" mt-4  text-sm text-blue-500 cursor-pointer  ml-[-86px]  max-sm:ml-[60px]" >Cookie setting</p>

          </div>
        </div>
      </main>
      <Pagination className=" max-sm:mt-[170px]">
        <PaginationContent className=" ">
         
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
          <PaginationNext href="/" />
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default page;
