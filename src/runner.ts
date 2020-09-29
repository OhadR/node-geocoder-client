var debug = require('debug')('runner');
import * as NodeGeocoder from 'node-geocoder';
const client = require('@bigdatacloudapi/client')('df8899cb610e475aa93a6a880352b834');
//import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

interface LatLon {
  lat: number,
  lon: number
}

class Main {

  async openStreetsMap(location: LatLon) : Promise<string> {
    debug('[openStreetsMap]');

    const options = {
      provider: 'openstreetmap',
      osmServer: 'https://nominatim.openstreetmap.org',
    };

    const geocoder = NodeGeocoder(options);

    try {
      const  resultStr = await geocoder.reverse({
        // lat: 32.101786566878445,
        // lon: 34.858965073072056,
        lat: location.lat,
        lon: location.lon,
        'accept-language': 'en',
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

  async openMapquest(location: LatLon) : Promise<string> {
    debug('[openmapquest]');

    const options = {
      provider: 'openmapquest',
      apiKey: 'BUrnf8yAQyCaW9au00hzKFrGUY3Pyuq9',
    };

    const geocoder = NodeGeocoder(options);

    try {
      const  resultStr = await geocoder.reverse({
        // lat: 32.101786566878445,
        // lon: 34.858965073072056
        lat: location.lat,
        lon: location.lon
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


  async google(location: LatLon)  {
    debug('[google]');

    const options = {
      provider: 'google',
      apiKey: 'AIzaSyBOQku871N0tiOejLIdP_5kKz1nMNeAB5M',
      clientId: '406508809484-o12uk87v05tqn7qgff495q7835sh80fi.apps.googleusercontent.com',
    };

    const geocoder = NodeGeocoder(options);

    try {
      const  resultStr = await geocoder.reverse({
        // lat: 32.101786566878445,
        // lon: 34.858965073072056
        lat: location.lat,
        lon: location.lon
      });

      debug('[google] got result:', resultStr);
    }
    catch(e) {
      debug('[google] failed execution:', e.stack)
    }
  }

  private async bigDataCloud(location: LatLon) {
    if(!location.lon ||
        !location.lat ||
        location.lon > 180 ||
        location.lon < -180) {
      debug(`malformed lon/lat: ${JSON.stringify(location)}`);
      return null;
    }
    try {
      const resultStr = await client.getReverseGeocode({
        latitude: location.lat,
        longitude: location.lon
        // latitude: '32.101786566878445',
        // longitude: '34.858965073072056'
      });

      debug('[bigDataCloud] got result:', resultStr);
      if(!resultStr || !resultStr.length) {
        debug('[bigDataCloud] resultStr is null:');
        return null;
      }
      return resultStr[0].city + ', ' +resultStr[0].country;
    }
    catch(e) {
      debug('[bigDataCloud] failed execution:', e.stack)
    }
  }

  async mapbox(location: LatLon)  {
    debug('[mapbox]');

    const geocodingClient = new MapboxGeocoder({
      accessToken: 'pk.eyJ1Ijoib2hhZHIiLCJhIjoiY2tmZGdxZWRzMWg4NDJ3bGQ3ODZweDBkcCJ9.BSO07F6VHDIp3QxPVaFyKw',
    });

    try {
      geocodingClient.reverseGeocode({
        query: [location.lat, location.lon]
      })
          .send();

      debug('[mapbox] got result:', 'resultStr');
    }
    catch(e) {
      debug('[mapbox] failed execution:', e.stack)
    }
  }

  async run() {
    let formattedLocation;

    formattedLocation = await this.openMapquest();
    debug('openMapquest() output: ' + formattedLocation);

    formattedLocation = await this.openStreetsMap();
    debug('openStreetsMap() output: ' + formattedLocation);

    formattedLocation = await this.google();

    formattedLocation = await this.bigDataCloud({
      lat: 32.101786566878445,
      lon: 34.858965073072056});
    debug('bigDataCloud() output: ' + formattedLocation);
  }
}

const runner = new Main().run();
