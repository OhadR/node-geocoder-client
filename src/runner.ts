var debug = require('debug')('runner');
import * as NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'openstreetmap',
  apiKey: 'ddd',

  // Optional depending on the providers
//  fetch: customFetchImplementation,
//  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
//  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

class Main {

  async openStreetsMap()  {
    debug('[openStreetsMap]');

    const options = {
      provider: 'openstreetmap',
      osmServer: 'https://nominatim.openstreetmap.org',
    };

    const geocoder = NodeGeocoder(options);

    try {
      const  resultStr = await geocoder.reverse({
        lat: 32.101786566878445,
        lon: 34.858965073072056
        // lat: asset.metadata.location.lat,
        // lon: asset.metadata.location.lon
      });

      debug('[openStreetsMap] got result:', resultStr);      //----------------------------------------------------------------------------------------------------------------------------------------
    }
    catch(e) {
      debug('[openStreetsMap] failed execution:', e.stack)
      //return this.error(500, {success: false, error: e.stack });
    }
  }

  async openMapquest ()  {
    debug('[openmapquest]');

    const options = {
      provider: 'openmapquest',
      apiKey: 'BUrnf8yAQyCaW9au00hzKFrGUY3Pyuq9',
    };

    const geocoder = NodeGeocoder(options);

    try {
      const  resultStr = await geocoder.reverse({
        lat: 32.101786566878445,
        lon: 34.858965073072056
        // lat: asset.metadata.location.lat,
        // lon: asset.metadata.location.lon
      });

      debug('[openmapquest] got result:', resultStr);      //----------------------------------------------------------------------------------------------------------------------------------------
    }
    catch(e) {
      debug('[openmapquest] failed execution:', e.stack)
      //return this.error(500, {success: false, error: e.stack });
    }
  }

  async run() {
    await this.openMapquest();
    await this.openStreetsMap();
  }
}

const runner = new Main().run();
