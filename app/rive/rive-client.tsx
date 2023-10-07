'use client';

import Rive, { Layout, Fit } from '@rive-app/react-canvas';

const RiveClient = () => {
  return (
    <Rive
      src="https://cdn.rive.app/animations/vehicles.riv"
      stateMachines="bumpy"
      style={{ width: '300px', height: '200px' }}
      layout={
        new Layout({
          fit: Fit.Contain,
        })
      }
    />
  );
};

export default RiveClient;
