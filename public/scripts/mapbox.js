mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhc2VyeWxsZSIsImEiOiJja3ZtbnJuNTY2cTBoMm5xMTRqcXN0MmF4In0.-opw4esb5sDzKTkkMQ8NOg';
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        types: 'country,region,place,postcode,locality,neighborhood'
    });

    geocoder.addTo('#geocoder');

    //get address container
    const address = document.getElementById('address');
    const geometry = document.getElementById('geometry');

    //pass needed values to form
    geocoder.on('result', (e) => {
        geometry.value = JSON.stringify(e.result.geometry);
        console.log(e.result.geometry);
        address.value = e.result.place_name;
        console.log(e.result);
    });
