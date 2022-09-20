import React from 'react'
import "./Header.css"
import { AiOutlineSearch, AiFillSetting } from "react-icons/ai"

export const Header = () => {
    return (
        <div className='mainHeader'>
            <div className='header'>
                <div className='textHeader'>
                    <div className='header-hover'>Coins</div>
                    <div className='header-hover'>Exchange</div>
                    <div className='header-hover'>Swap</div>
                </div>
                <div>
                    <img src="/Images/coincaplogo.svg" alt="Coin Cap Logo" className='logoImg' />
                </div>
                <div className='textHeader1'>
                    <AiOutlineSearch style={{ fontSize: '250%' }} />
                    <button>Connect Wallets</button>
                    <AiFillSetting style={{ fontSize: '250%' }} />

                </div>

            </div>
        </div>
    )
}
