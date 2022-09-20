import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./CoinCapData.css"
// const dataPerPage = 50;


export const CoinCapData = () => {
    const [data, setData] = useState([])
    const [view, setView] = useState(50)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            let receive = await fetch("https://api.coincap.io/v2/assets?limit=2000")
            let res = await receive.json()
            // console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }




    const handleShow = () => {
        setView((view) => view + 50);

    }

    // console.log(data)

    return (
        <div>
            <div className='detailsMain'>
                <div className='details'>
                    <div>
                        <p>MARKET CAP <br />
                            $1.35T</p>
                    </div>
                    <div>
                        <p>EXCHANGE VOL<br />
                            $60.90B</p>
                    </div>
                    <div>
                        <p>ASSETS<br />2,295</p>
                    </div>
                    <div>
                        <p>Exchanges<br />73</p>
                    </div>
                    <div>
                        <p>MARKETS<br />14,034</p>
                    </div>
                    <div>
                        <p>BTC DOM INDEX<br />31.3%</p>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>VWAP (24hr)</th>
                        <th>Supply</th>
                        <th>Volume (24hr)</th>
                        <th>Change(24hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, view).map((e) => (
                        <tr key={e.rank}>
                            <td >{e.rank}</td>

                            <td>
                                <div className='table-flex'>
                                    <img
                                        src={`https://assets.coincap.io/assets/icons/${e.symbol.toLowerCase()}%402x.png`}
                                        alt="logo"
                                        className='logo-img'
                                    />
                                    <div className='logoText'>
                                        {e.name}<br />
                                        <span>{e.symbol}</span>
                                    </div>
                                </div>


                            </td>

                            <td>${parseFloat(e.priceUsd).toFixed(2)}</td>
                            <td>
                                ${Math.abs(e.marketCapUsd) >= 1.0e9
                                    ? (Math.abs(e.marketCapUsd) / 1.0e9).toFixed(2) + "B"
                                    : Math.abs(e.marketCapUsd) >= 1.0e6
                                        ? (Math.abs(e.marketCapUsd) / 1.0e6).toFixed(2) + "M"
                                        : Math.abs(e.marketCapUsd) >= 1.0e3
                                            ? (Math.abs(e.marketCapUsd) / 1.0e3).toFixed(2) + "K"
                                            : Math.abs(e.marketCapUsd)}
                            </td>

                            <td>${parseFloat(e.vwap24Hr).toFixed(2)}</td>
                            <td>
                                {Math.abs(e.supply) >= 1.0e9
                                    ? (Math.abs(e.supply) / 1.0e9).toFixed(2) + "B"
                                    : Math.abs(e.supply) >= 1.0e6
                                        ? (Math.abs(e.supply) / 1.0e6).toFixed(2) + "M"
                                        : Math.abs(e.supply) >= 1.0e3
                                            ? (Math.abs(e.supply) / 1.0e3).toFixed(2) + "K"
                                            : Math.abs(e.supply)}
                            </td>
                            <td>
                                ${Math.abs(e.volumeUsd24Hr) >= 1.0e9
                                    ? (Math.abs(e.volumeUsd24Hr) / 1.0e9).toFixed(2) + "B"
                                    : Math.abs(e.volumeUsd24Hr) >= 1.0e6
                                        ? (Math.abs(e.volumeUsd24Hr) / 1.0e6).toFixed(2) + "M"
                                        : Math.abs(e.volumeUsd24Hr) >= 1.0e3
                                            ? (Math.abs(e.volumeUsd24Hr) / 1.0e3).toFixed(2) + "K"
                                            : Math.abs(e.volumeUsd24Hr)}
                            </td>
                            {e.changePercent24Hr < 0 ? (
                                <td className="redText">
                                    {parseFloat(e.changePercent24Hr).toFixed(2)}%
                                </td>
                            ) : (
                                <td className="greenText">
                                    {parseFloat(e.changePercent24Hr).toFixed(2)}%
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='view' onClick={handleShow}>View More</button>
        </div>
    );
}
