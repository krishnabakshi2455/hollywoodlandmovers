import React from "react";
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SignUpForm } from "../authentication/signup";
import { LoginForm } from "../authentication/login";
 const Navbar = () => {
    return (
        <div className="fixed top-0 z-10 w-full bg-[#1a2238]">
            <div className="flex h-20 w-full items-center px-8">
                <img src="/images/aboutus/logo.png" className="w-24 h-24 object-contain" alt="hollywoodlandmovers" />
                <div className="ml-auto flex items-center space-x-6 pr-10">
                    <nav className="hidden md:flex space-x-6">
                        <a href="index.html" className="text-[#f4db7d] text-2xl p-2">Home</a>
                        <a href="#services" className="text-[#f4db7d] text-2xl p-2">Services</a>
                        <a href="#gallery" className="text-[#f4db7d] text-2xl p-2">Gallery</a>
                        <a href="FAQ.html" className="text-[#f4db7d] text-2xl p-2">FAQ</a>
                        <a href="#about-us" className="text-[#f4db7d] text-2xl p-2">About Us</a>
                        <a href="#contact-us" className="text-[#f4db7d] text-2xl p-2">Contact Us</a>
                    </nav>

                    <div className="flex gap-5">
                        {/* <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">SignUp</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                            <SignUpForm/>
                            </DialogContent>
                        </Dialog> */}
                       
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Login</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <LoginForm />
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="md:hidden">
                        <button className="text-[#ecc124] text-2xl">
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar