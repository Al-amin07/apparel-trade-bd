"use client";
import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export default function FloatingChatFAB() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed cursor-pointer bottom-7 right-7 z-50 flex flex-col items-end space-y-3">
            {/* Conditional Buttons */}
            {open ? (
                <>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="tel:+8801611247183"
                                className="bg-green-400 p-2.5 rounded-full shadow-lg transition hover:scale-110"
                                title="Call"
                            >
                                <FaPhoneAlt className="text-white" size={26} />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="left" >
                            <p>Telephone</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* WhatsApp Button */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="https://wa.me/8801611247183"
                                className="bg-green-500 p-2.5 rounded-full shadow-lg transition hover:scale-110"
                                title="WhatsApp"
                            >
                                <FaWhatsapp className="text-white" size={26} />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="left" >
                            <p>Whats App</p>
                        </TooltipContent>
                    </Tooltip>



                    {/* Hide Label and Close Button */}
                    <div className="flex items-center">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="bg-orange-600 p-2.5 rounded-full shadow-lg transition hover:scale-110"
                                    title="Close"
                                >
                                    <IoIosArrowDown className="text-white" size={26} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="left" >
                                <p>Hide</p>
                            </TooltipContent>
                        </Tooltip>

                    </div>
                </>
            ) : (
                // Initial Chat Icon
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-orange-600 p-2.5 rounded-full shadow-lg transition hover:scale-110"
                            title="Chat"
                        >
                            <BiSolidMessageRoundedDetail className="text-white" size={26} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" >
                        <p>Show</p>
                    </TooltipContent>
                </Tooltip>

            )}
        </div>
    );
}
