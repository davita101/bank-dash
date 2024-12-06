
import { Balance } from "@/components/Dashboard/balance";
import { Chart } from "@/components/Dashboard/chart";
import CreditCard from "@/components/Dashboard/creditcard";
import { Ovali } from "@/components/Dashboard/ovali";
import Recent from "@/components/Dashboard/recent";
import Transfer from "@/components/Dashboard/transfer";

export default function Page() {
    interface Transition {
        date: string
        amount: number
        type: string
        description: string
    }
    interface FinancialInfo {
        userCurrency: string
        userBalance: number
        transactionHistory: Transition[]
    }
    interface CardDate {
        month: number
        year: number
    }
    interface CardDetails {
        cardNumber: number
        cardType: string
        cardIssuer: string
        cardDate: CardDate
    }

    interface Address {
        street: string;
        city: string;
        state: string;
        country: string;
        postalCode: string
    }
    interface PersonalInfo {
        userId: string;
        userName: string;
        email: string;
        phone: string;
        dateOfBirth: string;
        address: Address;
    }
    interface NotificationPreferences {
        email: boolean;
        sms: boolean;
        app: boolean;
    }
    interface AccountSettings {
        status: string;
        preferredLanguage: string;
        notificationsEnabled: boolean;
        notificationPreferences: NotificationPreferences;
    }

    interface Card {
        financialInfo: FinancialInfo
        cardDetails: CardDetails
        accountSettings: AccountSettings
    }

    interface Security {
        twoFactorAuthentication: boolean;
        lastLogin: string;
        passwordLastUpdated: string;
    }
    interface Preferences {
        theme: string;
        defaultCurrency: string;
        timezone: string;
    }
    interface User {
        personalInfo: PersonalInfo;
        cards: { [key: string]: Card };
        security: Security;
        preferences: Preferences;
    }
    const users: User[] = [
        {
            personalInfo: {
                userId: "123",
                userName: "Eddy Grdzelilsihvili",
                email: "eddy.grdzelilsihvili@example.com",
                phone: "+995-555-123456",
                dateOfBirth: "1990-12-05", // Format: YYYY-MM-DD
                address: {
                    street: "123 Freedom Street",
                    city: "Tbilisi",
                    state: "Tbilisi",
                    country: "Georgia",
                    postalCode: "0105"
                }
            },
            cards: {
                [`mastercard`]: {
                    financialInfo: {
                        userCurrency: "usd",
                        userBalance: 12300.3,
                        transactionHistory: [
                            { date: "2024-11-20", amount: 500, type: "Deposit", description: "Salary" },
                            { date: "2024-11-15", amount: -200, type: "Withdrawal", description: "ATM" }
                        ]
                    },
                    cardDetails: {
                        cardNumber: 377333333331234,
                        cardType: "Debit",
                        cardIssuer: "BankName",
                        cardDate: { month: 12, year: 30 }
                    },
                    accountSettings: {
                        status: "active",
                        preferredLanguage: "English",
                        notificationsEnabled: true,
                        notificationPreferences: {
                            email: true,
                            sms: false,
                            app: true
                        }
                    }
                },
                [`mastercard_1`]: {
                    financialInfo: {
                        userCurrency: "euro",
                        userBalance: 14.4,
                        transactionHistory: [
                            { date: "2024-11-21", amount: 444, type: "Deposit", description: "Freelance Payment" },
                            { date: "2024-11-16", amount: -120, type: "Withdrawal", description: "Grocery Store" }
                        ]
                    },
                    cardDetails: {
                        cardNumber: 1231231312344445,
                        cardType: "Credit",
                        cardIssuer: "GlobalBank",
                        cardDate: { month: 11, year: 25 }
                    },
                    accountSettings: {
                        status: "active",
                        preferredLanguage: "English",
                        notificationsEnabled: false,
                        notificationPreferences: {
                            email: false,
                            sms: true,
                            app: true
                        }
                    }
                }
            },
            security: {
                twoFactorAuthentication: true,
                lastLogin: "2024-11-15T14:23:00Z",
                passwordLastUpdated: "2024-06-20"
            },
            preferences: {
                theme: "dark",
                defaultCurrency: "usd",
                timezone: "GMT+4"
            }
        }
    ];
    return (
        <>
            <div className="flex flex-1 flex-col gap-[25px] py-4 container">
                <div className="grid auto-rows-min gap-[25px] grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col w-full col-span-2">
                        <div className="flex justify-between">
                            <h2 className="text-heading--200 font-semibold text-primary--200">My Cards</h2>
                            <h2 className="text-heading--200 font-semibold text-primary--200">see all</h2>
                        </div>

                        <div className="flex gap-[25px]">
                            {Object.keys(users[0].cards).map((cardKey) => {
                                const card = users[0].cards[cardKey]; // Get the card object dynamically based on the key

                                return (
                                    <div className="w-full h-full rounded-xl  " >
                                        <CreditCard
                                            userCurrency={card.financialInfo.userCurrency}
                                            userBalance={card.financialInfo.userBalance}
                                            userId={users[0].personalInfo.userId}
                                            userName={users[0].personalInfo.userName}
                                            cardDate={card.cardDetails.cardDate}
                                            cardNumber={card.cardDetails.cardNumber}
                                        />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="h-full overflow-hidden rounded-3xl" >
                        <h2 className="text-heading--200 font-semibold text-primary--200">Recent Transaction</h2>
                        <Recent />
                    </div>
                    <div className=" rounded-xl md:col-span-2 col-span-2" >
                        <Chart />
                    </div>
                    <div className="  rounded-xl " >
                        <Ovali />
                    </div>
                </div>
                <div className="grid  gap-[1rem] grid-cols-1 md:grid-cols-5">
                    <div className="w-full h-full pb-[49px] md:col-span-2  rounded-xl" >
                        <Transfer />
                    </div>
                    <div className="w-full md:col-span-3 rounded-xl " >
                        <Balance />
                    </div>
                </div>
            </div>
        </>
    )
}