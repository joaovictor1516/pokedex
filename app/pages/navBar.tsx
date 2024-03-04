import React from "react";
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="">
            <ul className="">
                <li className="">
                    <Link href="/">
                        <a className="">
                            Home
                        </a>
                    </Link>
                </li>

                <li className="">
                    <Link href="/games">
                        <a className="">
                            Games
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}