import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MyGoogleMap = () => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 35.6892,
    lng: 51.389,
  };

  const API_KEY = "AIzaSyAEExDG0Gsc0AkDJtozaeyli-hwdf1Ed50";

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
  };

  const shareCoordinates = async () => {
    if (selectedLocation) {
      const message = `عرض جغرافیایی: ${selectedLocation.lat}, طول جغرافیایی: ${selectedLocation.lng}`;
      try {
        await navigator.clipboard.writeText(message);
        alert("مختصات با موفقیت در کلیپ‌بورد کپی شد!");
      } catch (error) {
        console.error("خطا در کپی کردن مختصات:", error);
        alert("مشکلی در کپی مختصات پیش آمد.");
      }
    } else {
      alert("لطفاً ابتدا مکانی را روی نقشه انتخاب کنید!");
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}
        >
          {selectedLocation && <Marker position={selectedLocation} />}
        </GoogleMap>
      </LoadScript>
      <div className="mt-4 text-center">
        <button
          onClick={shareCoordinates}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          کپی کردن مختصات
        </button>
      </div>
    </div>
  );
};

export default MyGoogleMap;
