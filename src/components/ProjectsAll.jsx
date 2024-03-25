import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Row from './Row';
import Card from './Card';

function Projects() {
  const [privGardenProjects, setPrivGardenProjects] = useState([])
  const [gardCentreProjects, setGardCentreProjects] = useState([])
  const [comGardenProjects, setComGardenProjects] = useState([])
  const privGarden = "Private_Garden"
  const gardCentre = "Garden_Centre"
  const comGarden = "Community_Garden"

  useEffect(() => {
    fetchData(privGarden);
    fetchData(gardCentre);
    fetchData(comGarden);
  }, []);

  const handleResponse = (response) => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 204) {
      return [];
    } else {
      throw new Error("Invalid response: " + response.status)
    }
  };

  const handleJSON = (json, type) => {
    if (json.constructor === Array) {
      if (type === "Private_Garden") {
        setPrivGardenProjects(json)
      } else if (type === "Garden_Centre"){
        setGardCentreProjects(json)
      } else if (type === "Community_Garden") {
        setComGardenProjects(json)
      }
    } else {
      throw new Error("Invalid JSON: " + json)
    }
  };

  const fetchData = (type) => {
    fetch('https://w20016240.nuwebspace.co.uk/groupwork/testapi/projects?type=' + type)
      .then(response => handleResponse(response))
      .then(json => handleJSON(json, type))
      .catch(err => console.log(err.message))
  };

  return (
    <div>
      <div className="mb-4">
        <Link to="/searchprojects" className="py-0.5">Search</Link> {/* Add this button */}
      </div>
      <Row>
        <h2>Private Garden Projects</h2>
        <Link to="/myprojects/Private_Garden" className="py-0.5">View All</Link>
        {privGardenProjects.map((privGardenProjects, index) => (
          <Card 
            key={`card_${index}`} 
            title={privGardenProjects.title} 
            description={privGardenProjects.description}
            location={privGardenProjects.location}
            endDate={privGardenProjects.endDate}
            positions={privGardenProjects.positions}
            type={privGardenProjects.type}
          />
        ))}
      </Row>
      <Row>
        <h2>Garden Centre Projects</h2>
        <Link to="/myprojects/Garden_Centre" className="py-0.5">View All</Link>
        {gardCentreProjects.map((gardCentreProjects, index) => (
          <Card 
            key={`card_${index}`} 
            title={gardCentreProjects.title} 
            description={gardCentreProjects.description}
            location={gardCentreProjects.location}
            endDate={gardCentreProjects.endDate}
            positions={gardCentreProjects.positions}
            type={gardCentreProjects.type}
          />
        ))}
      </Row>
      <Row>
        <h2>Community Garden Projects</h2>
        <Link to="/myprojects/Community_Garden" className="py-0.5">View All</Link>
        {comGardenProjects.map((comGardenProjects, index) => (
          <Card 
            key={`card_${index}`} 
            title={comGardenProjects.title} 
            description={comGardenProjects.description}
            location={comGardenProjects.location}
            endDate={comGardenProjects.endDate}
            positions={comGardenProjects.positions}
            type={comGardenProjects.type}
          />
        ))}
      </Row>
    </div>
  );
}

export default Projects;