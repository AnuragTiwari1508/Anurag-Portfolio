'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type ConnectionStatus = {
  isConnected: boolean;
  database?: string;
  message: string;
  error?: string;
  url?: string;
  question?: string;
  response?: string;
};

export default function MongoDBStatus() {
  const [status, setStatus] = useState<ConnectionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/mongodb-status');
      const data = await response.json();
      setStatus(data);
    } catch (err) {
      setError('Failed to check MongoDB connection status');
      console.error('Error checking MongoDB status:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto my-8"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            MongoDB Connection Status
            {status && (
              <Badge variant={status.isConnected ? "success" : "destructive"}>
                {status.isConnected ? "Connected" : "Disconnected"}
              </Badge>
            )}
          </CardTitle>
          <CardDescription>
            Check your MongoDB connection status
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-destructive py-2">{error}</div>
          ) : status ? (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-md">
                <h3 className="font-medium mb-2">{status.question}</h3>
                <p className="text-sm">{status.response}</p>
              </div>
              
              {status.url && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Connection URL:</span>
                  <code className="bg-muted p-2 rounded text-xs overflow-x-auto">
                    {status.url}
                  </code>
                </div>
              )}
              
              {status.database && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Database:</span>
                  <span className="text-sm">{status.database}</span>
                </div>
              )}
              
              {status.message && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium">Message:</span>
                  <span className="text-sm">{status.message}</span>
                </div>
              )}
              
              {status.error && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-destructive">Error:</span>
                  <span className="text-sm text-destructive">{status.error}</span>
                </div>
              )}
            </div>
          ) : null}
        </CardContent>
        <CardFooter>
          <Button 
            onClick={checkConnection} 
            disabled={loading}
            className="w-full"
          >
            {loading ? "Checking..." : "Check Connection"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}