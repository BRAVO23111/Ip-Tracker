import React, { useEffect, useState } from "react";
import Maps from "./Maps";
import SearchBar from "./SearchBar";
import Stats from "./Stats";

const Ipaddress = () => {
  const [IPaddress, setIPaddress] = useState("");
  const [Location, setLocation] = useState("");
  const [Timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

  const fetchLocation = async (IpAddress = "") => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_ipSkwh5BNfUP4hQxVFKKxRiogjWBu&ipAddress=${IpAddress}`
      );
      const data = await response.json();
      setIPaddress(data.ip);
      setLocation(
        `${data.location.city}, ${data.location.country}, ${data.location.postalCode}`
      );
      setTimezone(`UTC ${data.location.timezone}`);
      setISP(data.isp);
      setCoordinates({ lat: data.location.lat, lng: data.location.lng });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <SearchBar
      setiPaddress={setIPaddress}
      fetchLocation ={fetchLocation} 
      />
      <Stats 
      ipaddress={IPaddress}
      location={Location}
      timezone={Timezone}
      isp={ISP}/>
      <Maps coordinates={coordinates}/>
    </div>
  );
};

export default Ipaddress;
