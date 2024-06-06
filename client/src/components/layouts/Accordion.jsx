import React, { useState } from 'react';
import Accordion2 from "/Accordion.svg";


const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const toggleMobileAccordion = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <div className="w-full max-w-xs p-4 bg-gray-100 rounded-lg shadow-md">
            {/* Mobile view button */}
            <div className="lg:hidden flex items-center justify-between p-2 border rounded-lg">
                <button
                    className="flex items-center gap-3"
                    onClick={toggleMobileAccordion}
                >
                    <img src={Accordion2} alt="" />
                    <span className="font-semibold">Filter</span>
                </button>
                <button
                    className="flex items-center"
                    onClick={toggleMobileAccordion}
                >
                    {isMobileOpen ? (
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>
            {/* Mobile view accordion */}
            {isMobileOpen && (
                <div className="lg:hidden mt-2">
                    <div className="mb-4">
                        <ul>
                            <li><label><input type="radio" name="category" className="mr-2" />Makanan Ringan</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Aneka Nasi</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Minuman</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Manis</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Ayam & Bebek</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Sapi & Kambing</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Bakso & Mie</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Seafood</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Western</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Asian</label></li>
                            <li><label><input type="radio" name="category" className="mr-2" />Timur Tengah</label></li>
                        </ul>
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Berdasarkan Bahan</label>
                        <input type="text" className="w-full px-2 py-1 border rounded-lg" placeholder="Masukan Bahan" />
                    </div>
                </div>
            )}
            {/* Desktop view accordion */}
            <div className="hidden lg:block">
                <div className='flex ml-3'>
                    <img src={Accordion2} alt="" />
                    <span className="font-semibold">Filter</span>
                </div>

                <button
                    className="w-full px-4 py-2 text-left font-semibold bg-gray-100 rounded-lg flex items-center justify-between focus:outline-none"
                    onClick={toggleAccordion}
                >
                    Berdasarkan Kategori
                    <span>
                        {isOpen ? (
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 15l7-7 7 7"
                                ></path>
                            </svg>
                        )}
                    </span>
                </button>
                {isOpen && (
                    <div className="mt-2">
                        <div className="mb-4">
                            <ul>
                                <li><label><input type="radio" name="category" className="mr-2" />Makanan Ringan</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Aneka Nasi</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Minuman</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Manis</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Ayam & Bebek</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Sapi & Kambing</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Bakso & Mie</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Seafood</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Western</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Asian</label></li>
                                <li><label><input type="radio" name="category" className="mr-2" />Timur Tengah</label></li>
                            </ul>
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Berdasarkan Bahan</label>
                            <input type="text" className="w-full px-2 py-1 border rounded-lg" placeholder="Masukan Bahan" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
