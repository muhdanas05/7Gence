import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-0">
                        <Link href="/" className="flex items-center gap-4">
                            <img 
                                src="/images/logof.png"
                                alt="7Gence Logo"
                                className="h-12 w-auto filter  "
                            />
                            <span className="text-xl font-semibold hidden lg:block">
                                7Gence
                            </span>
                        </Link>
                    </div>

                    

                    <div className="flex items-center gap-4">
                        <Link href="https://app.cal.com/event-types/1890398?tabName=setup" className="hidden lg:block">
                            <Button variant="blue">
                                Get Started
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
