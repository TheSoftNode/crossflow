"use client"

import { Shield } from "lucide-react";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Menu,
    ChevronRight,
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-teal-100">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center space-x-2">
                            <Shield className="h-8 w-8 text-teal-600" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                StellarBridge
                            </span>
                        </a>

                        <NavigationMenu className="hidden md:flex">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-50 to-cyan-50 p-6 no-underline outline-none focus:shadow-md">
                                                        <Shield className="h-6 w-6 text-teal-600" />
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            Cross-Chain Payments
                                                        </div>
                                                        <p className="text-sm leading-tight text-gray-600">
                                                            Seamless transactions across multiple blockchain networks
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
                                                        <div className="text-sm font-medium leading-none">
                                                            Local Currency Support
                                                        </div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                                            Convert between African currencies and stablecoins
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 focus:bg-teal-50">
                                                        <div className="text-sm font-medium leading-none">
                                                            Smart Routing
                                                        </div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                                            Optimized transaction paths for lowest fees
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                {['How It Works', 'Impact', 'Contact'].map((item) => (
                                    <NavigationMenuItem key={item}>
                                        <NavigationMenuLink
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            {item}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="hidden md:inline-flex">
                            Connect Wallet
                        </Button>
                        <Button className="hidden md:inline-flex bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                            Get Started
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-4 mt-4">
                                    {['Features', 'How It Works', 'Impact', 'Contact'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-lg font-medium hover:text-teal-600 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                    <div className="flex flex-col gap-2 mt-4">
                                        <Button variant="outline">Connect Wallet</Button>
                                        <Button className="bg-gradient-to-r from-teal-600 to-cyan-600">
                                            Get Started
                                        </Button>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;