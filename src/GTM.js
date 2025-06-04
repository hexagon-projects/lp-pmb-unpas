import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTM_ID = 'GTM-XXXXXXX'; 

const GTM = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return null;
};

export default GTM;