import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Wallet } from "lucide-react";
import { WalletService } from "@/services/WalletService";

interface WalletDashboardProps {
    ethereumAccount: string | null;
    stellarAccount: string | null;
    walletService: WalletService;
}

interface Balances {
    ethereum: string;
    stellar: string;
    total: string;
}

const WalletDashboard = ({ ethereumAccount, stellarAccount, walletService }: WalletDashboardProps) => {
    const [balances, setBalances] = useState<Balances>({
        ethereum: '0',
        stellar: '0',
        total: '0'
    });

    useEffect(() => {
        const fetchBalances = async () => {
            try {
                if (ethereumAccount) {
                    const ethBalance = await walletService.getUSDCBalance(
                        ethereumAccount,
                        'ethereum'
                    );
                    setBalances(prev => ({
                        ...prev,
                        ethereum: ethBalance,
                        total: (parseFloat(ethBalance) + parseFloat(prev.stellar)).toString()
                    }));
                }
                if (stellarAccount) {
                    const stellarBalance = await walletService.getUSDCBalance(
                        stellarAccount,
                        'stellar'
                    );
                    setBalances(prev => ({
                        ...prev,
                        stellar: stellarBalance,
                        total: (parseFloat(prev.ethereum) + parseFloat(stellarBalance)).toString()
                    }));
                }
            } catch (error) {
                console.error('Error fetching balances:', error);
            }
        };

        fetchBalances();
    }, [ethereumAccount, stellarAccount, walletService]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardHeader>
                    <CardTitle>Total Balance</CardTitle>
                    <CardDescription>Combined USDC across networks</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-teal-900">
                        ${parseFloat(balances.total).toLocaleString()}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ethereum USDC</CardTitle>
                    <Wallet className="h-4 w-4 text-teal-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        ${parseFloat(balances.ethereum).toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-500">Network: Ethereum</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Stellar USDC</CardTitle>
                    <Wallet className="h-4 w-4 text-cyan-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        ${parseFloat(balances.stellar).toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-500">Network: Stellar</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default WalletDashboard;