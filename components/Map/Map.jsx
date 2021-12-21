import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
      const [viewport, setViewport] = useState();
      return (
            <ReactMapGL
                  mapStyle={"mapbox://styles/wlsp/ckxgofypm8fou14obzxbakhmf"}
                  mapboxApiAccessToken={process.env.mapbox_key}
            >
            </ReactMapGL>
      )
}
