var debug = require('debug')('runner');
import * as NodeGeocoder from 'node-geocoder';

class Main {

  async openStreetsMap() : Promise<string> {
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

      debug('[openStreetsMap] got result:', resultStr);

      if(!resultStr || !resultStr.length) {
        debug('[openStreetsMap] resultStr is null:');
        return null;
      }

      return resultStr[0].formattedAddress;
    }
    catch(e) {
      debug('[openStreetsMap] failed execution:', e.stack)
    }
  }

  async openMapquest() : Promise<string> {
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

      debug('[openmapquest] got result:', resultStr);
      if(!resultStr || !resultStr.length) {
        debug('[openmapquest] resultStr is null:');
        return null;
      }

      return resultStr[0].city + ', ' +resultStr[0].country;
    }
    catch(e) {
      debug('[openmapquest] failed execution:', e.stack)
    }
  }


  async google()  {
    debug('[google]');

    const options = {
      provider: 'google',
      apiKey: 'AIzaSyBOQku871N0tiOejLIdP_5kKz1nMNeAB5M',
      clientId: '406508809484-o12uk87v05tqn7qgff495q7835sh80fi.apps.googleusercontent.com',
    };

    const geocoder = NodeGeocoder(options);

    try {
      const  resultStr = await geocoder.reverse({
        lat: 32.101786566878445,
        lon: 34.858965073072056
        // lat: asset.metadata.location.lat,
        // lon: asset.metadata.location.lon
      });

      debug('[google] got result:', resultStr);      //----------------------------------------------------------------------------------------------------------------------------------------
    }
    catch(e) {
      debug('[google] failed execution:', e.stack)
    }
  }

  async run() {
    let formattedLocation;

    formattedLocation = await this.openMapquest();
    debug('openMapquest() output: ' + formattedLocation);

    formattedLocation = await this.openStreetsMap();
    debug('openStreetsMap() output: ' + formattedLocation);

    formattedLocation = await this.google();
  }
}

const runner = new Main().run();
