import { DollarSign, LucideBanknote, Phone } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const WithdrawForm = () => {
    const [method, setMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [details, setDetails] = useState('');

    const withdrawalMethods = [
        { id: 'bank', name: 'Bank Transfer', icon: <LucideBanknote className="h-4 w-4" /> },
        { id: 'mobile', name: 'Mobile Money', icon: <Phone className="h-4 w-4" /> },
        { id: 'pickup', name: 'Cash Pickup', icon: <DollarSign className="h-4 w-4" /> },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Withdraw Funds</CardTitle>
                <CardDescription>Convert USDC to local currency</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Withdrawal Method</Label>
                    <Select value={method} onValueChange={setMethod}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select withdrawal method" />
                        </SelectTrigger>
                        <SelectContent>
                            {withdrawalMethods.map((method) => (
                                <SelectItem key={method.id} value={method.id}>
                                    <div className="flex items-center gap-2">
                                        {method.icon}
                                        <span>{method.name}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Amount USDC</Label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Withdrawal Details</Label>
                    <Input
                        placeholder="Enter bank account / mobile money number"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Exchange Rate</span>
                        <span className="font-medium">1 USD = 460 NGN</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Fee</span>
                        <span className="font-medium">1.5%</span>
                    </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600">
                    Withdraw Funds
                </Button>
            </CardContent>
        </Card>
    );
};

export default WithdrawForm;
