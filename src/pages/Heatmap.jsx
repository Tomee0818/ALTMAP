import React from 'react';
import { useSelector } from 'react-redux';
import { selectIpData } from 'store/ipDataSlice';
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  Tooltip
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import calculateColor from 'utils/calculateColor';

function Mapping(data, index) {
  const [lat, lon] = data.loc.split(',').map(coord => parseFloat(coord));

  const fillColor = calculateColor(data.count, 10);

  return (
    <CircleMarker
      key={index}
      center={[lat, lon]}
      radius={10}
      fillOpacity={0.5}
      stroke={false}
      fillColor={fillColor}
    >
      <Tooltip
        direction='top'
        offset={[0, -10]}
        opacity={10}
      >
        <span style={{ fontSize: '16px' }}>
          <strong>IP:</strong>      {data.ip}<br />
          <strong>Count:</strong>   {data.count}<br />
          <strong>City:</strong>    {data.city}<br />
          <strong>Region:</strong>  {data.region}<br />
          <strong>Country:</strong> {data.country}
        </span>
      </Tooltip>
    </CircleMarker>
  );
}

function Heatmap() {
  const ipInfoData = useSelector(selectIpData);
  const position = [0, 0];

  return (
    <MapContainer style={{ width: '100%', height: '100%' }} center={position} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ipInfoData.map((data, index) => Mapping(data, index))}
    </MapContainer>
  );
}

export default Heatmap;