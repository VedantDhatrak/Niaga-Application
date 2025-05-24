import React, { useRef, useEffect, useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const { width, height } = Dimensions.get('window');

export default function ModelScreen() {
  const glRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Define the setupScene function to initialize the scene and camera
  const setupScene = (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    scene.background = new THREE.Color(0xeeeeee);  // Background color

    camera.position.z = 5;  // Position the camera

    loadModel(scene, renderer, camera); // Pass the scene, renderer, and camera to the loadModel function

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  };

  // Load the 3D model
  const loadModel = async (scene, renderer, camera) => {
    const loader = new GLTFLoader();

    // Initialize Draco Loader (optional if model uses Draco compression)
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);

    try {
      // Load the GLB model from Expo's asset system
      const asset = Asset.fromModule(require('../../assets/mac.glb'));  // Correct path to your asset
      await asset.downloadAsync();

      // Create a URL for the asset (the actual GLB file)
      const glbUri = asset.localUri || asset.uri;

      // Load the model using GLTFLoader
      loader.load(
        glbUri,
        (gltf) => {
          scene.add(gltf.scene);
          setLoading(false);  // Model is loaded
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
          setLoading(false);  // In case of error, stop loading state
        }
      );
    } catch (e) {
      console.error('Error loading GLB asset:', e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (glRef.current) {
      setupScene(glRef.current);  // Call setupScene when the GLView is ready
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading && <Text>Loading Model...</Text>}
      <GLView
        style={{ flex: 1 }}
        ref={glRef}
        onContextCreate={setupScene}  // Use the setupScene function to set up the WebGL context
      />
    </View>
  );
}
