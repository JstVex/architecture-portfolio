'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        };

        handleBodyOverflow(); // Set initial state

        // Cleanup function to remove the event listener
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="flex items-center m-3 sm:mr-5">
            <Link href="/" className="flex-1">
                Eapm.
            </Link>
            <ul className="hidden sm:flex items-center space-x-10">
                <li>
                    <Link href="/sketches">Sketches</Link>
                </li>
                <li>
                    <Link href="/models">Models</Link>
                </li>
                <li>
                    <Link href="/renders">Renders</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
            <Menu
                className="block sm:hidden cursor-pointer"
                onClick={handleMenuClick}
            />
            {/* Overlay for the mobile menu */}
            <div
                className={`fixed inset-0 bg-white z-50 ${isMobileMenuOpen ? "block" : "hidden"
                    } sm:hidden`}
            >
                <div className="relative flex items-center justify-center h-full">
                    <X className="absolute top-3 right-3 font-black cursor-pointer hover:border hover:border-zinc-700 rounded-md" onClick={handleMenuClick} />
                    <ul className="text-center text-lg space-y-6">
                        <li className="hover:underline underline-offset-4">
                            <Link href="/sketches">Sketches</Link>
                        </li>
                        <li className="hover:underline underline-offset-4">
                            <Link href="/models">Models</Link>
                        </li>
                        <li className="hover:underline underline-offset-4">
                            <Link href="/renders">Renders</Link>
                        </li>
                        <li className="hover:underline underline-offset-4">
                            <Link href="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
