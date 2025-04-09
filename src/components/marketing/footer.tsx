import Link from "next/link";
import Image from "next/image";
import Container from "../global/container";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/logof.png" // points to public/images/logof.png
                                alt="Logo"
                                width={192} // adjust according to your design
                                height={192} // adjust according to your design
                                className="w-auto h-14"
                            />
                            <span className="text-base md:text-lg font-medium text-foreground">
                                7Gence
                            </span>
                        </div>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Product
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Features
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Contact us
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                    <li>
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            LinkedIN
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Email: anasmd017@gmail.com
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                            Phone: +918102772594
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-foreground">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Blog: (Stay Tuned)
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Newsletters: (Stay Tuned)
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()}. All rights reserved - Bengaluru,India
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
