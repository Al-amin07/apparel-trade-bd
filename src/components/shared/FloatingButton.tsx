"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { BiSolidMessageRoundedDetail } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { Button } from "../ui/button"
import { Mail, MessageCircle, MessageSquare, User } from "lucide-react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export function FloatingButton() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const toastId = toast.loading("Sending email...");
        // Handle form submission here
        const form = e.currentTarget as HTMLFormElement;
        const name = form.fullName.value || "";
        const email = form.email.value || "";

        const message = form.message.value || "";
        try {
            const result = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, comment: message }),
            });
            console.log({ result });
            if (result?.ok) {
                toast.success("Email send successfully. wait for response", {
                    id: toastId,
                });
            } else {
                toast.error("Failed to send email", { id: toastId });
            }
            form.reset();
        } catch (error) {
            console.log("Error sending email:", error);
        }
        console.log(name, email, message)

    }
    return (
        <div className="">

            <DropdownMenu >

                <Tooltip>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild className="">
                            <button

                                className="bg-orange-600 p-2.5 rounded-full shadow-lg fixed cursor-pointer bottom-7 z-40 right-7 transition hover:scale-110"
                                title="Chat"
                            >
                                <BiSolidMessageRoundedDetail className="text-white" size={26} />
                            </button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="left" >
                        <p>We&apos;re Online! <br />
                            How may I help you today?</p>
                    </TooltipContent>

                </Tooltip>

                {/* <button

                        className="bg-orange-600 p-2.5 rounded-full shadow-lg fixed cursor-pointer bottom-7 z-40 right-7 transition hover:scale-110"
                        title="Chat"
                    >
                        <BiSolidMessageRoundedDetail className="text-white" size={26} />
                    </button> */}


                <DropdownMenuContent className="w-96 border-0 mr-8 p-0" align="start">
                    <div>
                        <div className="flex py-5 px-4 items-center justify-between bg-orange-600 text-white">
                            <h1 className="text-2xl font-medium">Contact Us</h1>

                            <DropdownMenuItem className="p-1.5 hover:bg-white hover:text-orange-600 text-2xl  bg-transparent" >
                                <IoMdClose className="text-white hover:text-orange-600 h-16 w-16" size={48} />

                            </DropdownMenuItem>

                        </div>
                    </div>

                    <div className="p-4 bg-gray-50 relative">
                        <p className="text-gray-600 text-sm leading-relaxed pr-12">
                            Please leave your message here! We will send detailed technical info and quotation to you!
                        </p>

                        {/* Social Media Icons */}
                        <div className="absolute right-4 top-4 flex flex-col gap-2">
                            <Button
                                size="sm"
                                className="bg-green-500 hover:bg-green-600 text-white h-8 w-8 p-0 rounded-full"
                                onClick={() => window.open('https://wa.me/8801718556056', '_blank')}
                            >
                                <MessageCircle className="h-4 w-4" />
                            </Button>
                            <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white h-8 w-8 p-0 rounded-full"
                                onClick={() => window.open('https://web.wechat.com/', '_blank')}
                            >
                                <MessageSquare className="h-4 w-4" />
                            </Button>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        {/* Name Field */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                type="text"
                                name="fullName"
                                placeholder="Please enter your name"
                                className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                required
                            />
                        </div>



                        {/* Email Field */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Please enter your email address"
                                className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                            <Textarea
                                name="message"
                                placeholder="Please enter your message"
                                className="pl-10 min-h-[80px] border-gray-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-medium"
                        >
                            Leave info for details
                        </Button>
                    </form>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
