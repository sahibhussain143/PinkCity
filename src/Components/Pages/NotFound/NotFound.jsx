import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiArrowLeft, FiHome, FiCompass, FiGithub } from 'react-icons/fi';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const FloatingIsland = () => {
  const islandRef = useRef();
  const cloudRefs = useRef([]);

  useFrame(({ clock }) => {
    islandRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    islandRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;

    cloudRefs.current.forEach((cloud, i) => {
      cloud.position.x = Math.sin(clock.getElapsedTime() * 0.2 + i) * 3;
      cloud.position.z = Math.cos(clock.getElapsedTime() * 0.2 + i) * 3;
    });
  });

  return (
    <group>
      <mesh ref={islandRef} position={[0, -1, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#4f46e5" />
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.8, 1.5, 0.5, 32]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
        <mesh position={[0, 1.7, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      </mesh>

      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={el => (cloudRefs.current[i] = el)}
          position={[Math.sin(i) * 3, 1, Math.cos(i) * 3]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

const NotFound = () => {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-full w-full opacity-30">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingIsland />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center"
      >
        {/* 404 Text */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                '0 0 10px rgba(99, 102, 241, 0)',
                '0 0 20px rgba(99, 102, 241, 0.5)',
                '0 0 10px rgba(99, 102, 241, 0)',
              ],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            404
          </motion.h1>
          <motion.h2 className="text-4xl font-semibold mb-2" variants={itemVariants}>
            Lost in Space
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-lg" variants={itemVariants}>
            The page you're looking for has drifted into the cosmic void.
          </motion.p>
        </motion.div>

        {/* Terminal-like Box */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800/80 backdrop-blur-md rounded-xl p-6 mb-12 w-full max-w-md border border-gray-700 shadow-xl"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-left">
            <p className="text-green-400 mb-2">$ npm find /lost-page</p>
            <p className="text-red-400 mb-2">ERROR 404: Page not found in repository</p>
            <p className="text-purple-400 mb-2">$ git checkout main</p>
            <motion.p
              className="text-blue-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              █
            </motion.p>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4">
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded-lg font-medium"
            >
              <FiArrowLeft />
              <Link to="/">Go Back</Link>
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg font-medium"
            >
              <FiHome />
              <Link to="/">Home Page</Link>
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg font-medium"
            >
              <FiCompass />
              <Link to="/explore">Explore</Link>
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg font-medium"
            >
              <FiGithub />
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                Report Issue
              </a>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Astronaut Animation */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 right-8 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        >
          👨‍🚀
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 2,
            height: Math.random() * 10 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
