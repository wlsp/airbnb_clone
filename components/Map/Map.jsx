import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

export default function Map({ searchResults }) {
      const [selectedLocation, setSelectedLocation] = useState({});
      const coordinates = searchResults.map(({ long, lat }) => ({
            longitude: long,
            latitude: lat,
      }));

      const center = getCenter(coordinates);

      const [viewport, setViewport] = useState({
            width: "100%",
            height: "100%",
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,
      });

      return (
            <ReactMapGL
                  mapStyle={"mapbox://styles/wlsp/ckxgofypm8fou14obzxbakhmf"}
                  mapboxApiAccessToken={process.env.mapbox_key}
                  {...viewport}
                  onViewportChange={(nextViewport) => setViewport(nextViewport)}>
                  {searchResults.map((result) => (
                        <div key={result.long}>
                              <Marker
                                    longitude={result.long}
                                    latitude={result.lat}
                                    offsetLeft={-20}
                                    offsetTop={-10}>
                                    <p role="img"
                                          onClick={() => setSelectedLocation(result)} className="cursor-pointer animate-bounce">📍</p>
                              </Marker>
                              {selectedLocation.long === result.long ? (
                                    <Popup onClose={() => setSelectedLocation({})}
                                          closeOnClick={true}
                                          latitude={result.lat}
                                          longitude={result.long}
                                          className="z-50">
                                          {result.title}
                                    </Popup>) : (
                                    false
                              )}
                        </div>
                  ))}
            </ReactMapGL>
      )
}
