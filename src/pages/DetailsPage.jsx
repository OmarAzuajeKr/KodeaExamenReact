import React from 'react';
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import useGetLegById from '../hooks/useGetLegById';
import { useParams } from 'react-router';

export const DetailsPage = () => {
  const { legId1, legId2 } = useParams();
  const { leg: leg1, loading: loadingLeg1 } = useGetLegById(legId1);
  const { leg: leg2, loading: loadingLeg2 } = useGetLegById(legId2);

  if (loadingLeg1 || loadingLeg2) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Card leg={leg1} />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Card leg={leg2} />
      </div>
    </div>
  );
};
