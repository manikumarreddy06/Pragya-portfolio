import React from 'react';
import { Calendar, FileText } from 'lucide-react';

interface CopyrightCardProps {
  title: string;
  authors: string;
  diaryNo: string;
  filingDate: string;
  registrationNo: string;
  registrationDate: string;
}

const CopyrightCard: React.FC<CopyrightCardProps> = ({
  title,
  authors,
  diaryNo,
  filingDate,
  registrationNo,
  registrationDate
}) => {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#4A90A0]/10 p-3 rounded-lg">
          <FileText className="w-6 h-6 text-[#4A90A0]" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#1A365D] mb-2">{title}</h4>
          <p className="text-gray-600 mb-3 text-sm">{authors}</p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-500">Diary No: {diaryNo}</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#4A90A0]" />
              <span className="text-gray-500">Filed: {filingDate}</span>
            </div>
            <p className="text-gray-500">Registration: {registrationNo}</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-green-600" />
              <span className="text-gray-500">Registered: {registrationDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightCard;