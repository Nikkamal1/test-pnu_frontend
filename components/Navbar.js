"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Globe } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#730903] text-white sticky top-0 z-50">
            {/* Top bar with contact info */}
            <div className="hidden md:flex justify-end items-center px-6 py-1 text-xs bg-black/20">
                <div className="flex gap-4">
                    <Link href="#" className="hover:underline">หน้าหลัก</Link>
                    <Link href="#" className="hover:underline">ติดต่อเรา</Link>
                    <Link href="#" className="hover:underline">ช่วยเหลือ</Link>
                    <div className="flex items-center gap-2 ml-4">
                        <Globe size={14} />
                        <select className="bg-transparent text-xs border-none focus:ring-0">
                            <option value="th">ไทย</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/EngineeringPNU_W.png"
                            alt="Engineering Faculty Logo"
                            width={120}  // ขนาดที่ต้องการแสดง
                            height={120} // ขนาดที่ต้องการแสดง
                            className="h-12 w-auto"
                            layout="intrinsic"  // ปรับขนาดภาพให้เหมาะสม
                        />

                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-white font-medium hover:text-gold transition">หน้าหลัก</Link>
                    <Link href="#" className="text-white font-medium hover:text-gold transition">เกี่ยวกับเรา</Link>
                    <Link href="#" className="text-white font-medium hover:text-gold transition">หลักสูตร</Link>
                    <Link href="#" className="text-white font-medium hover:text-gold transition">บุคลากร</Link>
                    <Link href="#" className="text-white font-medium hover:text-gold transition">ข่าวสาร</Link>
                    <Link href="#" className="text-white font-medium hover:text-gold transition">กิจกรรม</Link>
                    <Link href="#" className="text-white font-medium hover:text-gold transition">งานวิจัย</Link>
                    <button className="ml-2 p-2 rounded border border-white text-white hover:bg-white/20 hover:text-white">
                        <Search className="h-4 w-4" />
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-2 md:hidden">
                    <button className="p-2 rounded border border-white text-white hover:bg-white/20 hover:text-white">
                        <Search className="h-4 w-4" />
                    </button>

                    <button
                        className="p-2 rounded border border-white text-white hover:bg-white/20 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[60px] bg-maroon p-4 z-40 md:hidden">
                    <div className="flex flex-col space-y-4">
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">หน้าหลัก</Link>
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">เกี่ยวกับเรา</Link>
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">หลักสูตร</Link>
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">บุคลากร</Link>
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">ข่าวสาร</Link>
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">กิจกรรม</Link>
                        <Link href="#" className="text-white font-medium hover:text-gold px-4 py-2 rounded hover:bg-white/10">งานวิจัย</Link>
                        <div className="border-t border-white/20 pt-4 mt-4">
                            <Link href="#" className="text-white text-sm px-4 py-2 block hover:bg-white/10 rounded">ติดต่อเรา</Link>
                            <Link href="#" className="text-white text-sm px-4 py-2 block hover:bg-white/10 rounded">ช่วยเหลือ</Link>
                            <div className="flex items-center gap-2 px-4 py-2">
                                <Globe size={14} />
                                <select className="bg-transparent text-sm border-none focus:ring-0 w-full">
                                    <option value="th">ไทย</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
