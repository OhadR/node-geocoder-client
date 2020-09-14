var debug = require('debug')('runner');
import * as NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'openmapquest',
  apiKey: 'ddd',

  // Optional depending on the providers
//  fetch: customFetchImplementation,
//  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
//  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

class Main {

  async main()  {
    try {
      const  resultStr = await geocoder.reverse({
        lat: 32.101786566878445,
        lon: 34.858965073072056
        // lat: asset.metadata.location.lat,
        // lon: asset.metadata.location.lon
      });

      const result = JSON.parse(resultStr);

      debug('got result:', result);      //----------------------------------------------------------------------------------------------------------------------------------------
    }
    catch(e) {
      debug('failed execution:', e.stack)
      //return this.error(500, {success: false, error: e.stack });
    }
  }


}

debug('starting runner...');
const runner = new GetLayersByBoundingBox();
runner.handler();