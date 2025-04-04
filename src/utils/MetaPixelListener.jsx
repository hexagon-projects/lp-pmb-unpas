import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import MetaService from '../fetching/meta';

const MetaPixelListener = () => {
    const location = useLocation();

    useEffect(() => {
        const initializePixel = async () => {
            try {
                const metaData = await MetaService.getMeta();
                if (metaData && metaData.length > 0) {
                    const pixelId = metaData[0].pixel_code.match(/fbq\('init', '(\d+)'\)/)[1];

                    ReactPixel.init(pixelId, {}, {
                        autoConfig: true,
                        debug: false
                    });

                    ReactPixel.pageView();
                }
            } catch (error) {
                console.error('Error initializing Meta Pixel:', error);
            }
        };

        initializePixel();
    }, []);
    useEffect(() => {
        ReactPixel.pageView();
    }, [location]);

    return null;
};

export default MetaPixelListener;