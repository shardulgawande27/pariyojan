import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { addProjectSteps } from "../store/project/projectActions";
import projectServices from "../api/projectServices";

const LocationForm = () => {
  const dispatch = useDispatch();
  const formDataSelector = useSelector((state) => state.project);

  const [locationData, setLocationData] = useState({
    societyName: "",
    streetName: "",
    cityName: "",
    stateName: "",
    latitude: "",
    longitude: "",
  });

  const state = {
    center: [locationData.latitude, locationData.longitude],
    zoom: 13,
  };


  const saveData = async () => {
    try {
      console.log("This is formDataSelector", formDataSelector);
      const response = await projectServices.addPrroject({
        ...formDataSelector.project_form_step_1,
        ...formDataSelector.project_form_step_2,
        ...formDataSelector.project_form_step_3,
        ...formDataSelector.project_form_step_4,
        ...formDataSelector.project_form_step_5,
        ...locationData,

      });
      console.log("response from add project", response);
    } catch (error) {
      console.log("Error in full form saving", error);
    }
  };



  const saveLocation = async () => {
    const page = 6;
    dispatch(addProjectSteps({ formData: locationData, page }))
   
   
    await saveData()
   
  };



  useEffect(() => {
    console.log(locationData);
  }, [locationData]);

  return (
    <div className="flex gap-12 w-[100%] mt-6">
      <div className="Map w-[45%]">
        <MapContainer center={state.center} zoom={state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={state.center}>
            <Popup>
              Jondhali Baug Rd, Dhobi Ali, Charai, Thane West, Thane,
              Maharashtra 400601.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="location-form w-[55%] flex flex-col gap-6 text-white">
        <div className="flex gap-12 w-[100%]">
          <div className="max-md:max-w-full">
            <div>Society Name</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder="Enter society name"
              type="text"
              value={locationData.projectName}
              onChange={(event) =>
                setLocationData({
                  ...locationData,
                  societyName: event.target.value,
                })
              }
            />
          </div>
          <div className="max-md:max-w-full">
            <div>Street Name / Landmark</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder="Enter street name / landmark"
              type="text"
              value={locationData.streetName}
              onChange={(event) =>
                setLocationData({
                  ...locationData,
                  streetName: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex gap-12 w-[100%]">
          <div className="max-md:max-w-full">
            <div>City</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder="Enter city name"
              type="text"
              value={locationData.cityName}
              onChange={(event) =>
                setLocationData({
                  ...locationData,
                  cityName: event.target.value,
                })
              }
            />
          </div>
          <div className="max-md:max-w-full">
            <div>State</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder="Enter State name"
              type="text"
              value={locationData.stateName}
              onChange={(event) =>
                setLocationData({
                  ...locationData,
                  stateName: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex gap-12 w-[100%]">
          <div className="max-md:max-w-full">
            <div>Latitude</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder="Enter latitude"
              type="text"
              value={locationData.latitude}
              onChange={(event) =>
                setLocationData({
                  ...locationData,
                  latitude: event.target.value,
                })
              }
            />
          </div>
          <div className="max-md:max-w-full">
            <div>Longitude</div>
            <input
              className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white w-[100%]  bg-transparent placeholder:text-zinc-500"
              placeholder="Enter longitude"
              type="text"
              value={locationData.longitude}
              onChange={(event) =>
                setLocationData({
                  ...locationData,
                  longitude: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="justify-center self-end px-5 py-3 mt-24 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10 float-right"
            type="submit"
            onClick={() => {
              saveLocation();
            }}
          >
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
