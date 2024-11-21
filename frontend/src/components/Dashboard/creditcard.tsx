import Image from 'next/image'
import React from 'react'
import Chep from "../../app/assets/card/Chep.png"

export default function CreditCard(
    {
        userCurrency,
        userId,
        userName,
        userBalance,
        cardDate,
        cardNumber }:
        {
            userCurrency: string
            userId: string
            userBalance: number
            userName: string
            cardDate?: {
                month: number,
                year: number
            },
            cardNumber: number
        }) {

    const handleCurrency = () => {
        switch (userCurrency) {
            case "usd":
                return '\u0024'; // $
            case "euro":
                return '\u20AC'; // €
            case "pound":
                return '\u00A3'; // £
            case "yen":
                return '\u00A5'; // ¥
            case "rupee":
                return '\u20B9'; // ₹
            case "won":
                return '\u20A9'; // ₩
            case "shekel":
                return '\u20AA'; // ₪
            case "krone":
                return '\u006B\u0072'; // kr (Norwegian Krone)
            case "peso":
                return '\u20B1'; // ₱
            case "ruble":
                return '\u20BD'; // ₽
            case "dirham":
                return '\u0662\u065F'; // AED (UAE Dirham)
            case "euroCurrency":
                return '\u20A0'; // ₠ EURO-CURRENCY SIGN
            case "colonSign":
                return '\u20A1'; // ₡ COLON SIGN
            case "cruzeiro":
                return '\u20A2'; // ₢ CRUZEIRO SIGN
            case "frenchFranc":
                return '\u20A3'; // ₣ FRENCH FRANC SIGN
            case "lira":
                return '\u20A4'; // ₤ LIRA SIGN
            case "mill":
                return '\u20A5'; // ₥ MILL SIGN
            case "naira":
                return '\u20A6'; // ₦ NAIRA SIGN
            case "peseta":
                return '\u20A7'; // ₧ PESETA SIGN
            case "rupeeSign":
                return '\u20A8'; // ₨ RUPEE SIGN
            case "dong":
                return '\u20AB'; // ₫ DONG SIGN
            case "kip":
                return '\u20AD'; // ₭ KIP SIGN
            case "tugrik":
                return '\u20AE'; // ₮ TUGRIK SIGN
            case "drachma":
                return '\u20AF'; // ₯ DRACHMA SIGN
            case "germanPenny":
                return '\u20B0'; // ₰ GERMAN PENNY SYMBOL
            case "guarani":
                return '\u20B2'; // ₲ GUARANI SIGN
            case "austral":
                return '\u20B3'; // ₳ AUSTRAL SIGN
            case "hryvnia":
                return '\u20B4'; // ₴ HRYVNIA SIGN
            case "cedi":
                return '\u20B5'; // ₵ CEDI SIGN
            case "livreTournois":
                return '\u20B6'; // ₶ LIVRE TOURNOIS SIGN
            case "spesmilo":
                return '\u20B7'; // ₷ SPESMILO SIGN
            case "tenge":
                return '\u20B8'; // ₸ TENGE SIGN
            case "turkishLira":
                return '\u20BA'; // ₺ TURKISH LIRA SIGN
            case "nordicMark":
                return '\u20BB'; // ₻ NORDIC MARK SIGN
            case "manat":
                return '\u20BC'; // ₼ MANAT SIGN
            case "lari":
                return '\u20BE'; // ₾ LARI SIGN
            case "bitcoin":
                return '\u20BF'; // ₿ BITCOIN SIGN
            default:
                return ''; // Default, if currency not found
        }
    };
    const handleBalance = () => {
        if ((userBalance - userBalance % 1).toString().length > 3) {
            let formattedBalance = `${(userBalance / 1000).toFixed(2)}${userBalance % 1 === 0 ? ".00" : (userBalance % 1).toFixed(2)}`; // 

            formattedBalance = formattedBalance.replace('.', ',');

            return formattedBalance;
        } else {
            return userBalance.toFixed(2);
        }
    };

    const handleCardMask = () => {
        
        return `${cardNumber.toString().slice(0,4)}${"*".repeat(cardNumber.toString().length-8)}${cardNumber.toString().slice(-4)}`
        
    }
    return (
        <div className=' overflow-hidden'>
            <div className='rounded-3xl overflow-hidden'>
                <div className='h-full main_card px-[25px] pb-[35px]'>
                    <div className='flex justify-between pt-[26px]'>
                        <div className='flex flex-col'>
                            <h4 className='lg:text-heading--800 text-heading--900 text-primary--003'>balance</h4>
                            <h3 className='lg:text-heading--500 text-body--100 text-primary--003 card-h'>{handleCurrency()}{handleBalance()}</h3>
                        </div>
                        <div className='pt-[4px]'>
                            <Image className=' lg:w-[35px] w-[30px] lg:h-[35px] h-[30px]' src={Chep} alt="Card logo" />
                        </div>
                    </div>
                    <div className='flex pt-[33px] items-center w-full justify-start gap-[67px]'>
                        <div className='flex flex-col'>
                            <h4 className='lg:text-heading--800 text-heading--001 text-primary--002 card-h1'> CARD HOLDER</h4>
                            <h4 className='lg:text-body--200 text-heading--002 text-primary--003 card-h'>{userName}</h4>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className='lg:text-heading--800 text-heading--001 text-primary--002 card-h1'>VALID THRU</h4>
                            <h4 className='lg:text-body--200 text-heading--002 text-primary--003 card-h'>{cardDate?.month}/{cardDate?.year}</h4>
                        </div>
                    </div>
                </div>
                <div className='px-[25px] main_card flex w-full h-[70px] items-center justify-between '>
                    <h1 className='lg:text-heading--200 text-body--200 text-primary--003 card-h '>{handleCardMask()}</h1>
                    <div className='lg:w-[30px] w-[19px] lg:h-[30px] h-[19px]  bg-primary--001 relative rounded-full'>
                        <div className=' bg-primary--001 right-[50%] absolute w-full h-full rounded-full  '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}