import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface TourRequestFormProps {
  propertyId: string;
  propertyAddress: string;
  propertyType: 'rental' | 'sale';
  onClose: () => void;
}

const TourRequestForm: React.FC<TourRequestFormProps> = ({
  propertyAddress,
  onClose,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tour request submitted for:', propertyAddress);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Request a Tour</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-gray-400 mb-4 text-sm">{propertyAddress}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              placeholder="(555) 555-5555"
            />
          </div>
          <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 rounded-full">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TourRequestForm;
