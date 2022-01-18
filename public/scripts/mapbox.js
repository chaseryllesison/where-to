mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhc2VyeWxsZSIsImEiOiJja3ZtbnJuNTY2cTBoMm5xMTRqcXN0MmF4In0.-opw4esb5sDzKTkkMQ8NOg';
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        types: 'country,region,place,postcode,locality,neighborhood'
    });

    geocoder.addTo('#geocoder');

    //get address container
    const address = document.getElementById('address');
    const geometry = document.getElementById('geometry');
    // Get the geocoder results container.
    const results = document.getElementById('result');
    // Add geocoder result to container.
    geocoder.on('result', (e) => {
        // results.innerText = JSON.stringify(e.result, null, 2);
        geometry.value = JSON.stringify(e.result.geometry);
        console.log(e.result.geometry);
        address.value = e.result.place_name;
        console.log(e.result);
    });

    // Clear results container when search is cleared.
    // geocoder.on('clear', () => {
    //     results.innerText = '';
    // });