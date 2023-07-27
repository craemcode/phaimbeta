import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';

export default function Welcome({ auth }) {
    const url = 'img/Logo-phaim.svg'
    return (
        <>
            <Head title="Please Login" />

            <div id="body" className="">
                
                <nav className="fixed min-w-full border-b-2 bg-white border-green-800 container mx-auto p-4 pt-0 items-end">
        
                    <div className="flex items-center justify-between ">
        
                        <div className="pt-2 flex">
                            <ApplicationLogo className="h-16 w-16 fill-current text-blue-700 inline">

                            </ApplicationLogo>
                            <span className='font-extrabold self-center tracking-wider ml-5 text-blue-700 text-3xl'> PHAIM </span> 
                        </div>
                        <div className="hidden self-end lg:flex space-x-12">
                               
                                <div>
                                    <a
                                        href=""
                                        className=" hover:border-b-2 border-blue-700"
                                    >
                                        Pricing
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href=""
                                        className=" hover:border-b-2 border-blue-700"
                                    >
                                        About us
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href=""
                                        className=" hover:border-b-2 border-blue-700"
                                    >
                                        Buy us tea
                                    </a>
                                </div>
                            </div>
                       
        
                            <div className="flex self-end shrink-1">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className=" p-3 px-6 pt-2 text-white bg-green-700 rounded-full baseline md:block   hover:text-green-700 hover:bg-white hover:font-black"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className=" mx-4 p-3 px-4 pt-2 text-white bg-green-700 rounded-full baseline md:block  hover:text-red-700 hover:bg-white hover:font-black"
                                        >
                                            Log in
                                        </Link>
                                        <span className="  md:block font-semibold self-center">
                                            {" "}
                                            or{" "}
                                        </span>
                                        <Link
                                            href={route("register")}
                                            className=" mx-4 p-3 px-4 pt-2 text-white bg-green-700 rounded-full baseline md:block  hover:text-green-700 hover:bg-white hover:font-black"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        
                    </div>
                </nav>
                <section id="hero" className="pt-16">
                    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
                        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                                Manage Your Pharmacy the 21st century way
                            </h1>
                            <p className="max-w-sm text-center md:text-left">
                                More than 2 decades into the 21st century, it is
                                a pressing priority for all businesses to
                                automate most of their operations. We have
                                decided to help you, the landlord, to manage all
                                your Apartments Workers, Bills, Payments and so
                                much more...
                            </p>

                            <div className="flex justify-center md:justify-start">
                                <a
                                    href=""
                                    className="p-3 px-6 pt-2 text-white bg-blue-700 baseline mx-4 rounded-full baseline hover:text-green-800 hover:bg-white hover:font-black "
                                >
                                    <Link href={route("register")} className="">
                                        Register
                                    </Link>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="img/moneycash.svg"
                                alt=""
                                className=""
                            />
                        </div>
                    </div>
                </section>
                <section id="features">
                    <div className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                        <div className="flex flex-col space-y-12 md:w-1/2">
                            <h2 className="max-w-md text-4xl font-bold text-center">
                                What's Different About Phaim?
                            </h2>
                            <p className="max-w-sm text-center md:text-left">
                                Phaim has been built with simplicity and
                                efficiency in mind. We have built a simple
                                intuitive interface which makes it usable for
                                any computer literate person. The application
                                also enables management of the smallest but
                                tiring records, such as water, repairs, and
                                payments. Finally, the application has automated
                                repetitive actions including Auto rent rooms,
                                Excel imports
                            </p>
                        </div>
                        <div className="flex flex-col space-y-8 md:w-1/2">
                            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                <div className="rounded-l-full bg-green-600 max-w-md md:bg-transparent">
                                    <div className="flex items-center space-x-2">
                                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-800">
                                            1
                                        </div>
                                        <h3 className="text-base text-white font-bold md:mb-4 md:hidden">
                                            Enable efficient record keeping
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                                        Enable efficient record keeping
                                    </h3>
                                    <p className="text-darkGrayishBlue max-w-md ml-6 md:ml-0 ">
                                        Our database program ensures that all
                                        your records are meticulosly kept. By
                                        all, we mean everything. The system was
                                        built with input from a real user,
                                        meaning the product is finetuned to
                                        Kenyan Landlord's needs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                <div className="rounded-l-full bg-green-700 max-w-md md:bg-transparent">
                                    <div className="flex items-center space-x-2">
                                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-700">
                                            2
                                        </div>
                                        <h3 className="text-base text-white font-bold md:mb-4 md:hidden">
                                            Secure Collaborations
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                                        Secure Collaborations
                                    </h3>
                                    <p className="text-darkGrayishBlue max-w-md ml-6 md:ml-0">
                                        The application features an robust and
                                        highly flexible authorization scheme. We
                                        acknowledge that you may be too busy to
                                        actively manage your property. The
                                        application lets you assign permissions
                                        to workers, which limits what data they
                                        can view, edit, or delete. Assigning and
                                        revoking these permissions is as easy as
                                        ticking a box.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                                <div className="rounded-l-full max-w-md bg-green-800 md:bg-transparent">
                                    <div className="flex items-center space-x-2">
                                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-600">
                                            3
                                        </div>
                                        <h3 className="text-base text-white font-bold md:mb-4 md:hidden">
                                            Very Affordable
                                        </h3>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                                        Very Affordable
                                    </h3>
                                    <p className="text-darkGrayishBlue max-w-md ml-6 md:ml-0">
                                        Our subscription model and cheap pricing
                                        ensures that you retain a large part
                                        part of your profit while reducing
                                        technology cost. You will never hundreds
                                        spend hundreds thousands of shillings
                                        buying an app that you cannot resell in
                                        the future.
                                        <p>
                                            We are also 30% cheaper than the
                                            competition!
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="cta" className="bg-green-800 mt-10 ">
                    <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                            Get a free 1 month trial now!
                        </h2>

                        <div>
                            <a
                                href=""
                                className="p-3 px-6 pt-2 text-red-800 font-black bg-white baseline mx-4 rounded-lg baseline hover:text-white hover:bg-red-800 hover:font-black "
                            >
                                <Link href={route("register")} className="">
                                    Register
                                </Link>
                            </a>
                        </div>
                    </div>
                </section>
                <Footer>

                </Footer>
            </div>
            
        </>
    );
}
