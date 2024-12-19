import React from 'react';
import { Calendar, FileText } from 'lucide-react';

interface PatentCardProps {
  title: string;
  inventors: string;
  applicationNo: string;
  filingDate: string;
  grantDate?: string;
  patentNo?: string;
  status: 'granted' | 'pending';
}

const PatentCard: React.FC<PatentCardProps> = ({
  title,
  inventors,
  applicationNo,
  filingDate,
  grantDate,
  patentNo,
  status
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${status === 'granted' ? 'bg-green-100' : 'bg-blue-100'}`}>
          <FileText className={`w-6 h-6 ${status === 'granted' ? 'text-green-600' : 'text-blue-600'}`} />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#1A365D] mb-2">{title}</h4>
          <p className="text-gray-600 mb-2">{inventors}</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-500">Application No: {applicationNo}</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#4A90A0]" />
              <span className="text-gray-500">Filed: {filingDate}</span>
            </div>
            {status === 'granted' && (
              <>
                <p className="text-gray-500">Patent No: {patentNo}</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-gray-500">Granted: {grantDate}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentCard;