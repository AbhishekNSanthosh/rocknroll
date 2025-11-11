"use client";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  X,
  Mail,
  Phone,
  User,
  Users,
  Check,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../common/ImageFallBack";
import Link from "next/link";

interface Package {
  destinations: string;
  duration: string;
  image: string;
  highlights: string[];
}

interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  groupSize: string;
  message: string;
}

const packageCategories = {
  "1-Day Trips": [
    {
      destinations: "Wagamon",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1609732441459-701799ab64ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjBnYXJkZW5zJTIwSW5kaWF8ZW58MXx8fHwxNzYyNjU3NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Sightseeing & nature walks",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Munnar",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Idukki",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1707660515297-44af3d1a98e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB3YXRlcmZhbGxzJTIwS2VyYWxhfGVufDF8fHx8MTc2MjY1NzcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Dam & reservoir visits",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Wonderla",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1762342628328-6c7e3819c747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXb25kZXJsYSUyMGFtdXNlbWVudCUyMHBhcmt8ZW58MXx8fHwxNzYyNjU4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "All-day park access",
        "Kid-friendly activities",
      ],
    },
    {
      destinations: "Thenmala, Palaruvi",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1633037499870-d105eb8b1daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdGhpcmFwYWxseSUyMHdhdGVyZmFsbHMlMjBLZXJhbGF8ZW58MXx8fHwxNzYyNjU4ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Waterfall visits",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Trivandrum",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1706806326312-836000df9e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NjI2NTc3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Beach & temple visits",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Athirapally, Vazhachal",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1633037499870-d105eb8b1daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdGhpcmFwYWxseSUyMHdhdGVyZmFsbHMlMjBLZXJhbGF8ZW58MXx8fHwxNzYyNjU4ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Waterfall sightseeing",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Ernakulam",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1654966786372-b28379e56b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBjaHVyY2glMjBoZXJpdGFnZXxlbnwxfHx8fDE3NjI2NTc3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "City & heritage tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Ooty",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1621864634210-15ed9f6b915b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwaGlsbHMlMjB2YWxsZXl8ZW58MXx8fHwxNzYyNjU3NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Hill station sightseeing",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Kodaikanal",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1669711294933-12a8bb8bd7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwbGFrZSUyMEluZGlhfGVufDF8fHx8MTc2MjU4MTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Lake & viewpoint visits",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Nelliyampathy, Malampuzha",
      duration: "1 Day",
      image:
        "https://images.unsplash.com/photo-1730621697135-fe5772b35889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjI2NTc3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Transportation included",
        "Dam & garden visits",
        "Expert guides & safety measures",
      ],
    },
  ],
  "2-Day Trips": [
    {
      destinations: "Wayanad, Ooty",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1705690525766-421e4dfa0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXlhbmFkJTIwS2VyYWxhJTIwbmF0dXJlfGVufDF8fHx8MTc2MjY1ODgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Sightseeing & nature walks",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Wayanad, Mysore",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Palace & heritage tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Wayanad, Coorg",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Wayanad, Kozhikode",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1705690525766-421e4dfa0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXlhbmFkJTIwS2VyYWxhJTIwbmF0dXJlfGVufDF8fHx8MTc2MjY1ODgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach & city sightseeing",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Ooty, Mysore",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1621864634210-15ed9f6b915b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwaGlsbHMlMjB2YWxsZXl8ZW58MXx8fHwxNzYyNjU3NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Hill station & palace tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Mysore, Coorg",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee/tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Mysore, Bangalore",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "City & heritage tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Coorg, Chikmanglor",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Kodaikanal, Poondi",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1669711294933-12a8bb8bd7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwbGFrZSUyMEluZGlhfGVufDF8fHx8MTc2MjU4MTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Lake & viewpoint visits",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Kanyakumari, Trivandrum",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1706806326312-836000df9e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NjI2NTc3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach & temple visits",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Munnar, Ramakalmedu",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Tea plantation & windmill tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Munnar, Marayoor",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Munnar, Vattavada",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1634010177432-156909f785cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjBoaWxscyUyMG1pc3R8ZW58MXx8fHwxNzYyNjU3NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Vegetable farms & tea estates",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Munnar, Kolukumalai",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Highest tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Idukki, Ramakalmedu",
      duration: "2 Days",
      image:
        "https://images.unsplash.com/photo-1707660515297-44af3d1a98e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB3YXRlcmZhbGxzJTIwS2VyYWxhfGVufDF8fHx8MTc2MjY1NzcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Dam & windmill visits",
        "Expert guides & safety measures",
      ],
    },
  ],
  "3-Day Trips": [
    {
      destinations: "Mysore, Coorg, Chikmanglor",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee/tea plantation tours",
        "Historical sites & heritage (Hampi, Mysore)",
      ],
    },
    {
      destinations: "Mysore, Chikmanglor, Belur",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Temple & heritage tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Ooty, Mysore, Coorg",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1621864634210-15ed9f6b915b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwaGlsbHMlMjB2YWxsZXl8ZW58MXx8fHwxNzYyNjU3NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Hill stations & plantations",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Wayanad, Mysore, Coorg",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1705690525766-421e4dfa0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXlhbmFkJTIwS2VyYWxhJTIwbmF0dXJlfGVufDF8fHx8MTc2MjY1ODgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Sightseeing & nature walks",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Wayanad, Ooty, Mysore",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1705690525766-421e4dfa0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXlhbmFkJTIwS2VyYWxhJTIwbmF0dXJlfGVufDF8fHx8MTc2MjY1ODgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Hill station tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Coorg, Chikmanglor, Wayanad",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Bangalore, Chikmanglor, Belur",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "City & heritage tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Bangalore, Mysore, Coorg",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Palace & plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Kodaikanal, Munnar, Marayoor",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1669711294933-12a8bb8bd7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwbGFrZSUyMEluZGlhfGVufDF8fHx8MTc2MjU4MTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Munnar, Marayoor, Vattavada",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9uc3xlbnwxfHx8fDE3NjI1ODAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Idukki, Vagamon, Munnar",
      duration: "3 Days",
      image:
        "https://images.unsplash.com/photo-1707660515297-44af3d1a98e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB3YXRlcmZhbGxzJTIwS2VyYWxhfGVufDF8fHx8MTc2MjY1NzcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Dam & nature walks",
        "Expert guides & safety measures",
      ],
    },
  ],
  "4-Day Trips": [
    {
      destinations: "Malpe, Dandeli, Gokarna",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1642516864588-aa717e16d1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2thcm5hJTIwYmVhY2glMjBLYXJuYXRha2F8ZW58MXx8fHwxNzYyNjU4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach resorts & camping options",
        "Adventure sports with safety gear",
      ],
    },
    {
      destinations: "Chikmanglor, Dandeli, Malpe",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1702665612461-baf61de29cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYW5kZWxpJTIwcml2ZXIlMjBJbmRpYXxlbnwxfHx8fDE3NjI1ODExMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Adventure sports with safety gear",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Mysore, Chikmanglor, Belur, Coorg",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Historical sites & heritage (Hampi, Mysore)",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Coorg, Belur, Chikmanglor, Malpe",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee plantation tours",
        "Beach & heritage sites",
      ],
    },
    {
      destinations: "Malpe, Goa",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMEluZGlhfGVufDF8fHx8MTc2MjUxMzM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach resorts & camping options",
        "Adventure sports with safety gear",
      ],
    },
    {
      destinations: "Malpe, Gokarna, Goa",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1642516864588-aa717e16d1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2thcm5hJTIwYmVhY2glMjBLYXJuYXRha2F8ZW58MXx8fHwxNzYyNjU4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach resorts & camping options",
        "Kid-friendly activities",
      ],
    },
    {
      destinations: "Ooty, Mysore, Coorg, Wayanad",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1621864634210-15ed9f6b915b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwaGlsbHMlMjB2YWxsZXl8ZW58MXx8fHwxNzYyNjU3NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Hill stations & plantations",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Mysore, Bangalore, Chikmanglor, Coorg",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "City & plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Kodaikanal, Marayoor, Munnar, Wagamon",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1669711294933-12a8bb8bd7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb2RhaWthbmFsJTIwbGFrZSUyMEluZGlhfGVufDF8fHx8MTc2MjU4MTExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Tea plantation tours",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Idukki, Wagamon, Munnar, Vattavada",
      duration: "4 Days",
      image:
        "https://images.unsplash.com/photo-1707660515297-44af3d1a98e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB3YXRlcmZhbGxzJTIwS2VyYWxhfGVufDF8fHx8MTc2MjY1NzcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Dam & plantation visits",
        "Expert guides & safety measures",
      ],
    },
  ],
  "5-6 Day Trips": [
    {
      destinations: "Malpe, Gokarna, Goa",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMEluZGlhfGVufDF8fHx8MTc2MjUxMzM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach resorts & camping options",
        "Adventure sports with safety gear",
      ],
    },
    {
      destinations: "Coorg, Chikmanglor, Goa, Malpe",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1694537623072-a1172819c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMGNvZmZlZSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzYyNTA2OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach resorts & camping options",
        "Coffee/tea plantation tours",
      ],
    },
    {
      destinations: "Bangalore, Wonderla, Mysore, Coorg, Wayanad",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1762342628328-6c7e3819c747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXb25kZXJsYSUyMGFtdXNlbWVudCUyMHBhcmt8ZW58MXx8fHwxNzYyNjU4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Kid-friendly activities",
        "Adventure sports with safety gear",
      ],
    },
    {
      destinations: "Chikmanglor, Goa, Gokarna, Murudeswar",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMEluZGlhfGVufDF8fHx8MTc2MjUxMzM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Beach resorts & camping options",
        "Temple & heritage tours",
      ],
    },
    {
      destinations: "Chikmanglor, Dandeli, Goa, Malpe",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1702665612461-baf61de29cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYW5kZWxpJTIwcml2ZXIlMjBJbmRpYXxlbnwxfHx8fDE3NjI1ODExMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Adventure sports with safety gear",
        "Beach resorts & camping options",
      ],
    },
    {
      destinations: "Bangalore, Hampi, Mysore, Coorg",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYW1waSUyMHJ1aW5zJTIwSW5kaWF8ZW58MXx8fHwxNzYyNTE0MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Historical sites & heritage (Hampi, Mysore)",
        "Expert guides & safety measures",
      ],
    },
    {
      destinations: "Mysore, Belur, Chikmanglor, Coorg, Wayanad",
      duration: "5-6 Days",
      image:
        "https://images.unsplash.com/photo-1753123291266-321b1bade3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNeXNvcmUlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjI2NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Accommodation & meals included",
        "Coffee/tea plantation tours",
        "Historical sites & heritage",
      ],
    },
  ],
};

const tourGroupImages = [
  "https://images.unsplash.com/photo-1719831738921-972e0ec76337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9ucyUyMEtlcmFsYXxlbnwxfHx8fDE3NjI2OTgzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1719831738921-972e0ec76337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9ucyUyMEtlcmFsYXxlbnwxfHx8fDE3NjI2OTgzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1634010177432-156909f785cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjBoaWxscyUyMG1pc3QlMjBJbmRpYXxlbnwxfHx8fDE3NjI2OTgzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1723151616953-8edd19d63ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW5uYXIlMjB3YXRlcmZhbGxzJTIwbmF0dXJlfGVufDF8fHx8MTc2MjY5ODM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export function PackagesSection() {
  const [activeTab, setActiveTab] = useState("1-Day Trips");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    groupSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! Our team will contact you shortly.");
    setSelectedPackage(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      groupSize: "",
      message: "",
    });
  };
  const whatsappNumber = "918848774596";

  // Function to create a WhatsApp link for each package
  const getWhatsAppLink = (pkg: Package) => {
    const message = encodeURIComponent(
      `Hi Rock N Roll Tour Planners, I'm interested in the ${pkg.destinations} (${pkg.duration}) package. Could you please share more details?`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <>
      <div className="px-[5vw] pt-[10vh]">
        {/* OUR PACKAGES Header Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Side - Title and Photo Grid */}
            <div className="md:col-span-5 w-[95%]">
              {/* Photo Grid Collage */}
              <div className="grid grid-cols-2 gap-2">
                {tourGroupImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group"
                  >
                    <ImageWithFallback
                      src={typeof img === "string" ? img : ""}
                      alt={`Munnar destination ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
            {/* Right Side - Package Overview */}
            <div className="md:col-span-7">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-700">Tour Categories</span>
                </div>
                <h3 className="text-gray-900 mb-6">
                  Choose Your Perfect Journey
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:scale-105 transition-transform">
                    <div className="text-orange-700 mb-1">One Day Trips</div>
                    <div className="text-gray-600">11 Destinations</div>
                  </div>

                  <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:scale-105 transition-transform">
                    <div className="text-orange-700 mb-1">Two Day Trips</div>
                    <div className="text-gray-600">15 Combinations</div>
                  </div>

                  <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:scale-105 transition-transform">
                    <div className="text-orange-700 mb-1">Three Day Trips</div>
                    <div className="text-gray-600">11 Combinations</div>
                  </div>

                  <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:scale-105 transition-transform">
                    <div className="text-orange-700 mb-1">Four Day Trips</div>
                    <div className="text-gray-600">10 Combinations</div>
                  </div>

                  <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 col-span-2 hover:scale-105 transition-transform">
                    <div className="text-orange-700 mb-1">
                      Five & Six Day Trips
                    </div>
                    <div className="text-gray-600">7 Extended Journeys</div>
                  </div>
                </div>
                <div className="p-4 bg-linear-to-r from-orange-100 to-red-100 rounded-xl text-center border-2 border-orange-300">
                  <p className="text-gray-800">
                    ✨ All Type of Customised Packages Available ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Duration Tabs */}
        <div className="mb-8">
          <h3 className="text-center text-gray-900 mb-6">
            <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Browse By Duration
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(packageCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === category
                    ? "bg-linear-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packageCategories[activeTab as keyof typeof packageCategories].map(
            (pkg, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-2 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.destinations}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
                    <Clock className="h-3 w-3 text-orange-500" />
                    <span className="text-gray-800">{pkg.duration}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white mb-1 drop-shadow-lg">
                      {pkg.destinations}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 bg-linear-to-br from-white to-orange-50/30 group-hover:from-orange-50/50 group-hover:to-red-50/50 transition-all duration-300 grow flex flex-col">
                  <div className="space-y-2 mb-4 grow">
                    {pkg.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <Check className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Request Button → WhatsApp */}
                  <Link
                    href={getWhatsAppLink(pkg)}
                    target="_blank"
                    className="w-full py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Package</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-orange-400/50" />
                </div>
              </motion.div>
            )
          )}
        </div>
        {/* Customized Packages CTA */}
        <div className="mt-16 text-center">
          <div className="relative bg-linear-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-10 border-2 border-orange-200 overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 shadow-md">
                <Award className="h-4 w-4 text-orange-600" />
                <span className="text-orange-700">Customized Packages</span>
              </div>

              <h3 className="text-gray-900 mb-3">
                Looking for{" "}
                <span className="bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Something Specific?
                </span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We offer fully customized packages tailored to your preferences,
                budget, and travel dates. Contact us to create your perfect
                journey!
              </p>
              <Link
                href="https://wa.me/918848774596?text=Hi%20Rock%20n%20Roll%20Tour%20Planners%2C%20I%20would%20like%20to%20request%20a%20custom%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block"
              >
                <span className="flex items-center gap-2">
                  Request Custom Package
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Enquiry Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
              {/* Hero Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={selectedPackage.image}
                  alt={selectedPackage.destinations}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-white mb-2">
                    {selectedPackage.destinations}
                  </h2>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{selectedPackage.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Multiple Locations</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form */}
              <div className="p-6 max-h-[calc(100vh-16rem)] md:max-h-96 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="text-gray-900 mb-2">
                    Enquire About This Package
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you
                    shortly with all the details.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Preferred Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            travelDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-1" />
                      Group Size
                    </label>
                    <input
                      type="text"
                      value={formData.groupSize}
                      onChange={(e) =>
                        setFormData({ ...formData, groupSize: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g., 20 students, 5 families"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
