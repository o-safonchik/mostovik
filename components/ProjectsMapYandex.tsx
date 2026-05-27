'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from '@/styles/projectsmap.module.css';

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

const ProjectsMap: React.FC = () => {
  const [projects, setProjects] = useState<ProjectWithCoordinates[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectWithCoordinates | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const ymapsRef = useRef<any>(null);

  // Fetch projects with coordinates
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects...');
        const response = await fetch('/api/projects?where[latitude][exists]=true&where[longitude][exists]=true');
        const data = await response.json();
        
        console.log('Projects data:', data);
        
        // Filter projects that have both latitude and longitude
        const projectsWithCoords = (data.docs || []).filter(
          (project: any) => project.latitude !== null && project.longitude !== null
        );
        
        console.log('Projects with coordinates:', projectsWithCoords);
        
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

  // Initialize Yandex Map
  useEffect(() => {
    if (loading || projects.length === 0 || !mapRef.current) {
      console.log('Skipping map init - loading:', loading, 'projects:', projects.length, 'mapRef:', !!mapRef.current);
      return;
    }

    console.log('Initializing map with projects:', projects);

    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || 'YOUR_YANDEX_API_KEY';

    // Check if ymaps already loaded
    if (window.ymaps) {
      console.log('ymaps already loaded');
      initializeMap(window.ymaps);
      return;
    }

    // Load Yandex Maps script
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = () => {
      console.log('Yandex Maps script loaded');
      window.ymaps.ready(() => {
        console.log('ymaps ready');
        initializeMap(window.ymaps);
      });
    };
    script.onerror = () => {
      console.error('Failed to load Yandex Maps script');
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [projects, loading]);

  const initializeMap = (ymaps: any) => {
    if (!mapRef.current) {
      console.log('mapRef not available');
      return;
    }

    try {
      console.log('Creating map...');
      
      // Calculate map center based on projects
      const mapCenter: [number, number] = projects.length > 0
        ? [
            projects.reduce((sum, p) => sum + p.latitude, 0) / projects.length,
            projects.reduce((sum, p) => sum + p.longitude, 0) / projects.length,
          ]
        : [55.7558, 37.6173]; // Moscow default

      console.log('Map center:', mapCenter);

      const map = new ymaps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 4,
        controls: ['zoomControl', 'fullscreenControl'],
      });

      console.log('Map created, adding placemarks...');

      // Add placemarks directly to map (without ObjectManager for better debugging)
      projects.forEach((project, index) => {
        console.log(`Adding placemark ${index}:`, project.title, [project.latitude, project.longitude]);
        
        const placemark = new ymaps.Placemark(
          [project.latitude, project.longitude],
          {
            balloonContent: `<strong>${project.title}</strong><br>${project.locationName}`,
            hintContent: project.title,
          },
          {
            preset: 'islands#blueDotIcon',
            cursor: 'pointer',
          }
        );

        placemark.events.add('click', () => {
          console.log('Placemark clicked:', project.title);
          setSelectedProject(project);
          map.panTo([project.latitude, project.longitude], {
            flying: true,
            duration: 1000,
          });
        });

        placemark.events.add('mouseenter', () => {
          console.log('Placemark hover:', project.title);
          setSelectedProject(project);
        });

        map.geoObjects.add(placemark);
      });

      console.log('Map initialized successfully');
      mapInstanceRef.current = map;
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

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
            Проекты с координатами не найдены. Убедитесь что в Payload CMS добавлены координаты (latitude/longitude).
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
          <div 
            className={styles.mapContainer}
            ref={mapRef}
            style={{ height: '100%', width: '100%' }}
          />

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
          <div 
            className={styles.mapContainer}
            ref={mapRef}
            style={{ height: '100%', width: '100%' }}
          />

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
