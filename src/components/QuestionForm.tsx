import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface QuestionFormProps {
  propertyId: string;
  propertyAddress: string;
  propertyType: 'rental' | 'sale';
  onClose: () => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  propertyAddress,
  onClose,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Question submitted for:', propertyAddress);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Ask a Question</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-gray-400 mb-4 text-sm">{propertyAddress}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Your Question</label>
            <textarea
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white min-h-[100px]"
              placeholder="What would you like to know about this property?"
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
          <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 rounded-full">
            Submit Question
          </Button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
