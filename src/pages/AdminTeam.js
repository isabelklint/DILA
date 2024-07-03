import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminTeam = () => {
  const { t } = useTranslation();
  const adminTeamList = t('adminTeamList', { returnObjects: true });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('adminTeam')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {adminTeamList.map((adminTeam, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={adminTeam.img} alt={adminTeam.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{adminTeam.name}</h3>
              <p className="text-gray-600">{adminTeam.role}</p>
              <p className="mt-2 text-gray-800">{adminTeam.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminTeam;
