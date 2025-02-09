// "use client"

// import DepositForm from "@/components/Dashboard/DepositForm";
// import SendForm from "@/components/Dashboard/SendForm";
// import TransactionHistory from "@/components/Dashboard/TransactionHistory";
// import WalletDashboard from "@/components/Dashboard/WalletDashboard";
// import WithdrawForm from "@/components/Dashboard/WithdrawForm";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { AlertCircle, ArrowRightLeft, CheckCircle2, Clock, CreditCard, DollarSign, LucideBanknote, Phone } from "lucide-react";

// // Continuing Dashboard Component
// const Dashboard = () => {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="container mx-auto px-4 py-8">
//                 <WalletDashboard />

//                 <Tabs defaultValue="send" className="space-y-6">
//                     <TabsList className="grid w-full grid-cols-4 mb-8">
//                         <TabsTrigger value="send">Send</TabsTrigger>
//                         <TabsTrigger value="deposit">Deposit</TabsTrigger>
//                         <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
//                         <TabsTrigger value="swap">Swap</TabsTrigger>
//                     </TabsList>

//                     <TabsContent value="send">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <SendForm />
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Network Selection Guide</CardTitle>
//                                     <CardDescription>Choose the best network for your transfer</CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="p-4 rounded-lg bg-teal-50 border border-teal-100">
//                                         <h4 className="font-semibold mb-2">Stellar Network</h4>
//                                         <ul className="space-y-2 text-sm">
//                                             <li className="flex items-center gap-2">
//                                                 <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                                                 <span>Lower transaction fees</span>
//                                             </li>
//                                             <li className="flex items-center gap-2">
//                                                 <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                                                 <span>Faster settlement times</span>
//                                             </li>
//                                             <li className="flex items-center gap-2">
//                                                 <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                                                 <span>Ideal for smaller transfers</span>
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100">
//                                         <h4 className="font-semibold mb-2">Ethereum Network</h4>
//                                         <ul className="space-y-2 text-sm">
//                                             <li className="flex items-center gap-2">
//                                                 <CheckCircle2 className="h-4 w-4 text-cyan-600" />
//                                                 <span>Wider wallet compatibility</span>
//                                             </li>
//                                             <li className="flex items-center gap-2">
//                                                 <CheckCircle2 className="h-4 w-4 text-cyan-600" />
//                                                 <span>Better for large transfers</span>
//                                             </li>
//                                             <li className="flex items-center gap-2">
//                                                 <CheckCircle2 className="h-4 w-4 text-cyan-600" />
//                                                 <span>More DeFi integration options</span>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="deposit">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <DepositForm />
//                             <div className="space-y-6">
//                                 <Card>
//                                     <CardHeader>
//                                         <CardTitle>Deposit Methods</CardTitle>
//                                         <CardDescription>Available options to add funds</CardDescription>
//                                     </CardHeader>
//                                     <CardContent>
//                                         <div className="space-y-4">
//                                             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                                                 <LucideBanknote className="h-6 w-6 text-teal-600 mt-1" />
//                                                 <div>
//                                                     <h4 className="font-semibold">Bank Transfer</h4>
//                                                     <p className="text-sm text-gray-600">Direct bank transfer from your local bank account. Processing time: 1-2 business days.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                                                 <CreditCard className="h-6 w-6 text-teal-600 mt-1" />
//                                                 <div>
//                                                     <h4 className="font-semibold">Card Payment</h4>
//                                                     <p className="text-sm text-gray-600">Instant deposits using your debit or credit card. Additional card processing fees may apply.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                                                 <Phone className="h-6 w-6 text-teal-600 mt-1" />
//                                                 <div>
//                                                     <h4 className="font-semibold">Mobile Money</h4>
//                                                     <p className="text-sm text-gray-600">Use M-Pesa, MTN Mobile Money, or other local mobile payment services.</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="withdraw">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <WithdrawForm />
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Withdrawal Information</CardTitle>
//                                     <CardDescription>Important details about withdrawals</CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="space-y-4">
//                                         <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                                             <Clock className="h-6 w-6 text-teal-600 mt-1" />
//                                             <div>
//                                                 <h4 className="font-semibold">Processing Times</h4>
//                                                 <ul className="text-sm text-gray-600 space-y-1 mt-2">
//                                                     <li>Bank Transfer: 1-2 business days</li>
//                                                     <li>Mobile Money: Instant to 2 hours</li>
//                                                     <li>Cash Pickup: Available immediately</li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                                             <AlertCircle className="h-6 w-6 text-teal-600 mt-1" />
//                                             <div>
//                                                 <h4 className="font-semibold">Important Notes</h4>
//                                                 <ul className="text-sm text-gray-600 space-y-1 mt-2">
//                                                     <li>Minimum withdrawal: $10</li>
//                                                     <li>Maximum withdrawal: $10,000 per day</li>
//                                                     <li>KYC verification required for amounts over $1,000</li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="swap">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Cross-Chain Swap</CardTitle>
//                                     <CardDescription>Swap USDC between Ethereum and Stellar networks</CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="space-y-2">
//                                         <Label>From Network</Label>
//                                         <Select>
//                                             <SelectTrigger>
//                                                 <SelectValue placeholder="Select source network" />
//                                             </SelectTrigger>
//                                             <SelectContent>
//                                                 <SelectItem value="ethereum">Ethereum USDC</SelectItem>
//                                                 <SelectItem value="stellar">Stellar USDC</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>

//                                     <div className="flex justify-center my-4">
//                                         <Button variant="ghost" size="icon">
//                                             <ArrowRightLeft className="h-6 w-6 text-teal-600" />
//                                         </Button>
//                                     </div>

//                                     <div className="space-y-2">
//                                         <Label>To Network</Label>
//                                         <Select>
//                                             <SelectTrigger>
//                                                 <SelectValue placeholder="Select target network" />
//                                             </SelectTrigger>
//                                             <SelectContent>
//                                                 <SelectItem value="ethereum">Ethereum USDC</SelectItem>
//                                                 <SelectItem value="stellar">Stellar USDC</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>

//                                     <div className="space-y-2">
//                                         <Label>Amount USDC</Label>
//                                         <div className="relative">
//                                             <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
//                                             <Input type="number" placeholder="0.00" className="pl-10" />
//                                         </div>
//                                     </div>

//                                     <div className="p-4 bg-gray-50 rounded-lg">
//                                         <div className="flex justify-between text-sm">
//                                             <span className="text-gray-600">Bridge Fee</span>
//                                             <span className="font-medium">0.1%</span>
//                                         </div>
//                                         <div className="flex justify-between text-sm mt-2">
//                                             <span className="text-gray-600">Estimated Time</span>
//                                             <span className="font-medium">2-5 minutes</span>
//                                         </div>
//                                     </div>

//                                     <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600">
//                                         Swap USDC
//                                     </Button>
//                                 </CardContent>
//                             </Card>

//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Bridge Information</CardTitle>
//                                     <CardDescription>About our cross-chain bridge service</CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50">
//                                         <h4 className="font-semibold mb-2">How it works</h4>
//                                         <p className="text-sm text-gray-600">
//                                             Our bridge service uses Allbridge technology to securely swap your USDC between
//                                             Ethereum and Stellar networks. The process is fully automated and typically
//                                             completes within minutes.
//                                         </p>
//                                     </div>

//                                     <div className="space-y-2">
//                                         <div className="flex items-center gap-2 text-sm">
//                                             <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                                             <span>Automated cross-chain transfers</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm">
//                                             <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                                             <span>Competitive bridge fees</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm">
//                                             <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                                             <span>Secure and audited protocol</span>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </TabsContent>
//                 </Tabs>

//                 <div className="mt-8">
//                     <TransactionHistory />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard

// pages/dashboard.tsx
"use client"

import { useEffect } from 'react';
import { useWallet } from "@/hooks/useWallet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';
import { SecurityCheck } from '@/components/Dashboard/SecurityCheck';
import WalletDashboard from '@/components/Dashboard/WalletDashboard';
import { TransactionMonitor } from '@/components/Dashboard/TransactionMonitor';
import SendForm from '@/components/Dashboard/SendForm';
import { NetworkGuide } from '@/components/Dashboard/NetworkGuide';
import DepositForm from '@/components/Dashboard/DepositForm';
import { DepositMethods } from '@/components/Dashboard/DepositMethods';
import WithdrawForm from '@/components/Dashboard/WithdrawForm';
import { WithdrawalInfo } from '@/components/Dashboard/WithdrawalInfo';
import { BridgeInfo } from '@/components/Dashboard/BridgeInfo';
import SwapForm from '@/components/Dashboard/SwapForm';

const Dashboard = () => {
    const {
        ethereumAccount,
        stellarAccount,
        loading,
        connectEthereum,
        connectStellar,
        disconnectEthereum,
        disconnectStellar,
        walletService
    } = useWallet();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Security Status */}
                <SecurityCheck />

                {/* Wallet Dashboard */}
                <WalletDashboard
                    ethereumAccount={ethereumAccount}
                    stellarAccount={stellarAccount}
                    loading={loading}
                    onConnectEthereum={connectEthereum}
                    onConnectStellar={connectStellar}
                    onDisconnectEthereum={disconnectEthereum}
                    onDisconnectStellar={disconnectStellar}
                />

                {/* Transaction Monitor */}
                <div className="mt-6">
                    <TransactionMonitor walletService={walletService} />
                </div>

                {/* Main Operations */}
                <Tabs defaultValue="send" className="mt-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="send">Send</TabsTrigger>
                        <TabsTrigger value="deposit">Deposit</TabsTrigger>
                        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                        <TabsTrigger value="swap">Swap</TabsTrigger>
                    </TabsList>

                    <TabsContent value="send">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ethereumAccount && stellarAccount ? (
                                <>
                                    <SendForm
                                        ethereumAccount={ethereumAccount}
                                        stellarAccount={stellarAccount}
                                        walletService={walletService}
                                    />
                                    <NetworkGuide />
                                </>
                            ) : (
                                <Alert>
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>Wallet Required</AlertTitle>
                                    <AlertDescription>
                                        Please connect both Ethereum and Stellar wallets to perform transfers
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="deposit">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DepositForm
                                walletService={walletService}
                                ethereumAccount={ethereumAccount}
                            />
                            <DepositMethods />
                        </div>
                    </TabsContent>

                    <TabsContent value="withdraw">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <WithdrawForm
                                walletService={walletService}
                                ethereumAccount={ethereumAccount}
                                stellarAccount={stellarAccount}
                            />
                            <WithdrawalInfo />
                        </div>
                    </TabsContent>

                    <TabsContent value="swap">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SwapForm
                                walletService={walletService}
                                ethereumAccount={ethereumAccount}
                                stellarAccount={stellarAccount}
                            />
                            <BridgeInfo />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;
