import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import Link from "next/link"; // ใช้ Link จาก next/link

const Footer = () => {
    return (
        <footer className="bg-[#730903] text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-4">คณะวิศวกรรมศาสตร์</h3>
                        <p className="mb-2">Faculty of Engineering</p>
                        <div className="flex items-start gap-2 mb-2">
                            <MapPin className="w-5 h-5 min-w-5 mt-1" />
                            <p className="text-sm text-gray-200">
                                ศูนย์ราชการใหม่ เขตโคกเขือ ตำบลโคกเคียน จังหวัดนราธิวาส 96000
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <Phone className="w-4 h-4" />
                            <p className="text-sm text-gray-200">+66 73-709030 ต่อ  3200-1</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <Mail className="w-4 h-4" />
                            <p className="text-sm text-gray-200">engineering@pnu.ac.th</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <p className="text-sm text-gray-200">ทำการ จันทร์ - ศุกร์ 8:30 - 16:30 น.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4">หลักสูตร</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm hover:text-gold">วิศวกรรมเครื่องกล</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">วิศวกรรมไฟฟ้า</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">วิศวกรรมโยธา</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">วิศวกรรมอุตสาหการ</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">วิศวกรรมคอมพิวเตอร์</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4">ลิงค์ด่วน</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm hover:text-gold">เกี่ยวกับคณะ</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">ข่าวสารและกิจกรรม</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">งานวิจัย</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">บริการวิชาการ</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">ดาวน์โหลด</Link></li>
                            <li><Link href="#" className="text-sm hover:text-gold">ติดต่อเรา</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4">ติดตามเรา</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <Link href="#" className="bg-blue-500 text-maroon p-2 rounded-full hover:bg-gold transition-colors">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="bg-red-500 text-maroon p-2 rounded-full hover:bg-gold transition-colors">
                                <Youtube className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="bg-black text-maroon p-2 rounded-full hover:bg-gold transition-colors">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="bg-red-500 text-maroon p-2 rounded-full hover:bg-gold transition-colors">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>

                        <h3 className="font-bold text-xl mb-4">แผนที่</h3>
                        <div className="bg-white p-1 rounded">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31717.323315559865!2d101.784819!3d6.437001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b3f208c1d66fe9%3A0x5718e807605b4d1f!2sFaculty%20of%20Engineering%2C%20Princess%20of%20Naradhiwas%20University!5e0!3m2!1sen!2sth!4v1743490926522!5m2!1sen!2sth"
                                width="100%" height="250" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="rounded"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

                <div className="border-t border-white/20 mt-6">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-sm text-gray-300">
                                © 2567 คณะวิศวกรรมศาสตร์ นราธิวาสราชนครินทร์ สงวนลิขสิทธิ์.
                            </p>
                            <div className="flex gap-4 mt-2 md:mt-0">
                                <Link href="#" className="text-xs text-gray-300 hover:text-white">นโยบายความเป็นส่วนตัว</Link>
                                <Link href="#" className="text-xs text-gray-300 hover:text-white">ข้อกำหนดการใช้งาน</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
