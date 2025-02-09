import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export const TransactionMonitor = ({ walletService }) => {
    const [transactions, setTransactions] = useState([]);
    const [isMonitoring, setIsMonitoring] = useState(true);

    useEffect(() => {
        if (isMonitoring) {
            const interval = setInterval(fetchTransactionUpdates, 15000);
            return () => clearInterval(interval);
        }
    }, [isMonitoring]);

    const fetchTransactionUpdates = async () => {
        try {
            const pendingTxs = transactions.filter(tx => tx.status === 'pending');

            const updatedTxs = await Promise.all(
                pendingTxs.map(async (tx) => {
                    const status = await walletService.getTransactionStatus(
                        tx.chainSymbol,
                        tx.txId
                    );
                    return { ...tx, status: status?.status || tx.status };
                })
            );

            setTransactions(prev =>
                prev.map(tx => {
                    const updated = updatedTxs.find(u => u.txId === tx.txId);
                    return updated || tx;
                })
            );
        } catch (error) {
            console.error('Error updating transactions:', error);
        }
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Transaction Monitor</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMonitoring(!isMonitoring)}
                    >
                        {isMonitoring ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                </div>
                <CardDescription>Real-time transaction status updates</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Network</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((tx, index) => (
                            <TableRow key={index}>
                                <TableCell>{tx.type}</TableCell>
                                <TableCell>{tx.amount} USDC</TableCell>
                                <TableCell>{tx.network}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            tx.status === 'completed'
                                                ? 'success'
                                                : tx.status === 'pending'
                                                    ? 'warning'
                                                    : 'destructive'
                                        }
                                    >
                                        {tx.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{new Date(tx.timestamp).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
