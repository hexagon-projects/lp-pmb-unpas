import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import AnaliticService from "../fetching/analitics";

const useGoogleAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await AnaliticService.getAnalitic();
        if (response.length > 0 && response[0].ganalytics_code) {
          const trackingIdMatch = response[0].ganalytics_code.match(
            /['"](G-[A-Z0-9]+|UA-[0-9]+-[0-9]+)['"]/
          );
          if (trackingIdMatch) {
            const trackingId = trackingIdMatch[1];
            
            ReactGA.initialize(trackingId, {
              gaOptions: {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              }
            });
            
            setAnalyticsData(trackingId);
          }
        }
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);

  return {
    trackingId: analyticsData
  };
};

export const logPageView = () => {
  if (window.location.pathname) {
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname,
      anonymizeIp: true
    });
  }
};

export default useGoogleAnalytics;