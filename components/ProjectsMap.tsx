'use client';

import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '@/styles/projectsmap.module.css';
import Image from 'next/image';

interface ProjectWithCoordinates {
  id: string;
  title: string;
  slug: string;
  locationName: string;
  latitude: number;
  longitude: number;
  description: string;
  previewImage?: {
    url: string;
    alt?: string;
  };
  startYear?: number;
  endYear?: number;
}

// Custom marker icon
const createMarkerIcon = (isActive: boolean = false) => {
  return L.divIcon({
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background-color: ${isActive ? '#1a3f7f' : '#2c5aa0'};
        border: 3px solid white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 20px;
        box-shadow: 0 ${isActive ? '4px 12px' : '2px 8px'} rgba(0, 0, 0, ${isActive ? '0.25' : '0.15'});
        transform: ${isActive ? 'scale(1.15)' : 'scale(1)'};
        transition: all 0.2s ease;
      ">
        📍
      </div>
    `,
    className: `custom-marker ${isActive ? 'active' : ''}`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const ProjectsMap: React.FC = () => {
  const [projects, setProjects] = useState<ProjectWithCoordinates[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectWithCoordinates | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  // Fetch projects with coordinates
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects?where[latitude][exists]=true&where[longitude][exists]=true');
        const data = await response.json();
        
        // Filter projects that have both latitude and longitude
        const projectsWithCoords = (data.docs || []).filter(
          (project: any) => project.latitude !== null && project.longitude !== null
        );
        
        setProjects(projectsWithCoords);
        
        // Set initial selected project
        if (projectsWithCoords.length > 0) {
          setSelectedProject(projectsWithCoords[0]);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Calculate map center based on projects
  const mapCenter: [number, number] = projects.length > 0
    ? [
        projects.reduce((sum, p) => sum + p.latitude, 0) / projects.length,
        projects.reduce((sum, p) => sum + p.longitude, 0) / projects.length,
      ]
    : [55.7558, 37.6173]; // Moscow default center

  if (loading) {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.noProjects}>Загрузка карты...</div>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.noProjects}>
            Проекты с координатами не найдены
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ПРОЕКТЫ НА КАРТЕ</h2>
        </div>

        <div className={styles.mapWrapper}>
          <div className={styles.mapContainer}>
            <MapContainer
              center={mapCenter}
              zoom={4}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
              scrollWheelZoom={true}
              className={styles.mapContainer}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {projects.map((project) => (
                <Marker
                  key={project.id}
                  position={[project.latitude, project.longitude]}
                  icon={createMarkerIcon(selectedProject?.id === project.id)}
                  eventHandlers={{
                    click: () => setSelectedProject(project),
                    mouseover: () => setSelectedProject(project),
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: '200px' }}>
                      <strong>{project.title}</strong>
                      <p>{project.locationName}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className={styles.cardContainer}>
            {selectedProject ? (
              <div className={styles.projectCard}>
                {selectedProject.previewImage && (
                  <img
                    src={selectedProject.previewImage.url}
                    alt={selectedProject.title}
                    className={styles.cardImage}
                  />
                )}

                <h3 className={styles.cardTitle}>
                  {selectedProject.title}
                </h3>

                <div className={styles.cardLocation}>
                  <span className={styles.locationIcon}>📍</span>
                  {selectedProject.locationName}
                </div>

                {selectedProject.description && (
                  <p className={styles.cardDescription}>
                    {selectedProject.description}
                  </p>
                )}

                {(selectedProject.startYear || selectedProject.endYear) && (
                  <div className={styles.cardMeta}>
                    Период: {selectedProject.startYear || '—'} 
                    {selectedProject.endYear ? ` - ${selectedProject.endYear}` : ' - н.в.'}
                  </div>
                )}

                <a href={`/projects/${selectedProject.slug}`}>
                  <button className={styles.cardButton}>
                    Подробнее →
                  </button>
                </a>
              </div>
            ) : (
              <div className={styles.emptyState}>
                Выберите проект на карте
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMap;
