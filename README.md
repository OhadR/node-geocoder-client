# node-geocoder-client

    npm i node-geocoder
    
from npm:

https://www.npmjs.com/package/node-geocoder

A wrapper for many providers to get geocoding, and reverse-geocoding.

----
    
## Environment Variables:
    

to allow `debug`:
    
    DEBUG=runner,*

## let debugger stop in TS files

Add the following to  `tsconfig.json`:
    
    //let debugger stop in TS files:
    "sourceMap": true    
    
## Debug from WebStorm

![webstorm](/debug_config.jpg)
    
### OpenStreetMap 

uses nominatim.

http://nominatim.org/release-docs/latest/api/Reverse

i use also the `accept-language` param, to set the language of result.

The full object (actually it is an array of objects) that OSM return is:

    [{
        latitude: 32.10156344707361,
        longitude: 34.85901258256623,
        formattedAddress: 'Em HaMoshavot, Kiryat Aryeh Industrial Zone, Petah Tikva, Petah Tikva Subdistrict, Center District, no, Israel',
        country: 'Israel',
        city: 'Petah Tikva',
        state: 'Center District',
        zipcode: 'no',
        streetName: 'Em HaMoshavot',
        streetNumber: undefined,
        countryCode: 'IL',
        neighbourhood: '',
        provider: 'openstreetmap'
    }]


### MapQuest Open APIs
https://developer.mapquest.com/documentation/open/

#### API Key

Important: Usage of the Open APIs requires an API key. If you do not already have one, please sign in to the [MapQuest Developer Network](http://developer.mapquest.com/) and visit the [Keys & Reporting](https://developer.mapquest.com/user/me/apps) page.

### BigDataCloud

https://www.bigdatacloud.com/customer/account

the HUGE problem with this solution is that if you exceed the quota, BDC exits(!!!). No error is thrown, but your app is dead.

This solution cannot be used (unless you pay).

![BDC](/Image_5.jpg)

### MapBox

    npm install --save mapbox
    
from npm:

UI (GL) based: ~~https://www.npmjs.com/package/@mapbox/mapbox-gl-geocoder~~

mapbox-sdk-js: https://www.npmjs.com/package/mapbox

https://docs.mapbox.com/api/search/#geocoding
