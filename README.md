# node-geocoder-client

    npm i node-geocoder
    
from npm:

https://www.npmjs.com/package/node-geocoder

A wrapper for many providers to get geocoding, and reverse-geocoding.

----

    npm install --save @mapbox/mapbox-gl-geocoder
    
from npm:

https://www.npmjs.com/package/@mapbox/mapbox-gl-geocoder
    
## Environment Variables:
    

to allow `debug`:
    
    DEBUG=runner,*

## let debugger stop in TS files

Add the following to  `tsconfig.json`:
    
    //let debugger stop in TS files:
    "sourceMap": true    
    
#### OpenStreetMap 

uses nominatim.

http://nominatim.org/release-docs/latest/api/Reverse

i use also the `accept-language` param, to set the language of result.

#### MapQuest Open APIs
https://developer.mapquest.com/documentation/open/

##### API Key

Important: Usage of the Open APIs requires an API key. If you do not already have one, please sign in to the [MapQuest Developer Network](http://developer.mapquest.com/) and visit the [Keys & Reporting](https://developer.mapquest.com/user/me/apps) page.

#### BigDataCloud

https://www.bigdatacloud.com/customer/account

the HUGE problem with this solution is that if you exceed the quota, BDC exits(!!!). No error is thrown, but your app is dead.

This solution cannot be used (unless you pay).

![BDC](/Image_5.jpg)
