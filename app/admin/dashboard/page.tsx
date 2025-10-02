'use client'

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.contacts);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Error loading contacts');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getReasonBadgeColor = (reason: string) => {
    switch (reason) {
      case 'preorder':
        return 'bg-green-500';
      case 'collaboration':
        return 'bg-blue-500';
      case 'general':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <div className="text-center py-12">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <div className="text-center py-12 text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={fetchContacts} variant="outline">
            Refresh
          </Button>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold">Total Contacts</h3>
              <p className="text-2xl font-bold text-blue-600">{contacts.length}</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-lg font-semibold">Pre-Orders</h3>
              <p className="text-2xl font-bold text-green-600">
                {contacts.filter(c => c.reason === 'preorder').length}
              </p>
            </Card>
            <Card className="p-4">
              <h3 className="text-lg font-semibold">Collaborations</h3>
              <p className="text-2xl font-bold text-purple-600">
                {contacts.filter(c => c.reason === 'collaboration').length}
              </p>
            </Card>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
          
          {contacts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No contact submissions yet.
            </div>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <Card key={contact.id} className="p-4 border-l-4 border-l-blue-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{contact.name}</h3>
                        <Badge className={getReasonBadgeColor(contact.reason)}>
                          {contact.reason === 'preorder' && 'Pre-Order'}
                          {contact.reason === 'collaboration' && 'Business Collaboration'}
                          {contact.reason === 'general' && 'General Enquiry'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Email:</strong> {contact.email}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Phone:</strong> {contact.phone}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Submitted:</strong> {formatDate(contact.created_at)}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Message:</h4>
                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                        {contact.message}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
