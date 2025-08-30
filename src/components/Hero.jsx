import { useEffect, useState } from 'react';
import welcomeImage from '../assets/images/welcome-image.webp'; // Adjust path to your image
import { motion } from 'framer-motion';

export default function Hero() {
  return (
	<div className="animate-fadeIn animate-float hover:animate-pulse">
	  <img
		  src={welcomeImage}
		  alt="Welcome"
		  className="
		    mx-auto 
		    w-full 
		    max-w-xs          // Base size - small
		    transition-all 
		    duration-300      // Faster animation
		    hover:scale-105   // Subtler hover
		    object-contain    // Preserve aspect ratio
		  "
	  />
	</div>
  )
}
