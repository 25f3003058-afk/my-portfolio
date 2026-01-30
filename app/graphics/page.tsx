"use client";

import { ArrowLeft, Palette, Image as ImageIcon, Instagram, PenTool, X, Filter, ChevronLeft, ChevronRight, MousePointer2, Layers, Zap, Shapes } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// ... existing interfaces ...
interface GraphicWork {
  title: string;
  category: "Social Media" | "Poster" | "Branding" | "Office";
  description: string;
  images?: string[];
  color: string;
}

const works: GraphicWork[] = [
  {
    title: "Mangus Brand Identity",
    category: "Branding",
    description: "Complete visual identity including posters, pamphlets, and social media assets for Mangus.",
    color: "bg-purple-600",
  },
  {
    title: "Social Media Reels",
    category: "Social Media",
    description: "Engaging short-form video content and static posts for Instagram and LinkedIn.",
    color: "bg-pink-600",
  },
  {
    title: "Professional Branding",
    category: "Branding",
    description: "LinkedIn profile optimization and professional banner designs.",
    color: "bg-blue-600",
  },
  {
    title: "Office Documentation",
    category: "Office",
    description: "Structured and professionally designed office paperwork and forms.",
    color: "bg-emerald-600",
  },
  {
    title: "Event Posters",
    category: "Poster",
    description: "Eye-catching event posters designed using Canva for various startups.",
    color: "bg-orange-600",
  },
  {
    title: "Marketing Flyers",
    category: "Poster",
    description: "Promotional flyers for local businesses and community events.",
    color: "bg-yellow-500",
  },
];

const categories = ["All", "Social Media", "Poster", "Branding", "Office"];

// --- Decorative Components ---

const CrazyAvatar = () => (
  <motion.div 
    className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", duration: 1.5 }}
  >
    {/* Abstract Head Shape */}
    <motion.div 
      animate={{ rotate: [0, 5, -5, 0] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[3rem] rotate-3 border-4 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.2)]" 
    />
    
    {/* Floating Eyes */}
    <div className="absolute top-20 left-12 flex gap-8">
       <motion.div 
         className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-black relative overflow-hidden"
         whileHover={{ scale: 1.2 }}
       >
          <motion.div 
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-6 h-6 bg-black rounded-full" 
          />
       </motion.div>
       <motion.div 
         className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-black relative overflow-hidden"
         whileHover={{ scale: 1.1 }}
       >
          <motion.div 
            animate={{ x: [0, 10, 0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-6 h-6 bg-black rounded-full" 
          />
          {/* Monocle Logic */}
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full opacity-50" />
       </motion.div>
    </div>

    {/* Mouth */}
    <motion.div 
      className="absolute bottom-20 left-24 w-16 h-8 bg-black rounded-b-full overflow-hidden"
      whileHover={{ height: 40 }}
    >
       <div className="w-10 h-4 bg-red-500 mx-auto mt-4 rounded-t-full" />
    </motion.div>

    {/* Decorative Elements on Avatar */}
    <motion.div 
      className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black z-10"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
        <Zap className="w-10 h-10 text-black fill-current" />
    </motion.div>
    
    <div className="absolute bottom-4 -left-4 bg-white px-4 py-2 rounded-full border-2 border-black font-mono font-bold text-sm transform -rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        DESIGNER
    </div>
  </motion.div>
);

const FloatingTool = ({ icon: Icon, delay, x, y, color }: { icon: any, delay: number, x: number, y: number, color: string }) => (
    <motion.div
        className={`absolute ${color} p-3 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm z-0 pointer-events-none`}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [y, y - 20, y],
            x: [x, x + 10, x],
            rotate: [0, 10, -10, 0]
        }}
        transition={{ 
            duration: 5, 
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}
    >
        <Icon className="w-6 h-6 text-white" />
    </motion.div>
);

export default function GraphicsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GraphicWork | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const filteredWorks = selectedCategory === "All" 
    ? works 
    : works.filter(work => work.category === selectedCategory);
  
  const handleOpenProject = (work: GraphicWork) => {
      setSelectedImage(work);
      setCurrentImageIndex(0);
  }

  const handleNextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedImage && selectedImage.images) {
          setCurrentImageIndex((prev) => (prev + 1) % selectedImage.images!.length);
      }
  }

  const handlePrevImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (selectedImage && selectedImage.images) {
          setCurrentImageIndex((prev) => (prev - 1 + selectedImage.images!.length) % selectedImage.images!.length);
      }
  }

  return (
    <main className="min-h-screen bg-[#050505] relative overflow-hidden selection:bg-purple-500/30">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingTool icon={PenTool} delay={0} x={20} y={100} color="bg-pink-500/20" />
            <FloatingTool icon={Palette} delay={2} x={-30} y={300} color="bg-purple-500/20" />
            <FloatingTool icon={Layers} delay={4} x={50} y={500} color="bg-blue-500/20" />
            <FloatingTool icon={Shapes} delay={1} x={-20} y={200} color="bg-orange-500/20" />
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Navbar-ish */}
        <div className="flex justify-between items-center mb-16">
            <a href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full border border-white/5 hover:bg-white/5 hover:border-white/20">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
            </a>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 border border-white/5 px-3 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                AVAILABLE FOR FREELANCE
            </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-24">
            <motion.div 
                className="flex-1 space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                     <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none">
                        VISUAL
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                            PLAYGROUND
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                        A curated collection of brand identities, social media magic, and pixel-perfect chaos. Built with Canva, refined with obsession.
                    </p>
                </div>
                
                {/* Stats / Badges */}
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-dark-200 border border-white/10 rounded-lg">
                        <span className="block text-2xl font-bold text-white">20+</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Projects</span>
                    </div>
                     <div className="px-4 py-2 bg-dark-200 border border-white/10 rounded-lg">
                        <span className="block text-2xl font-bold text-white">100%</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Creativity</span>
                    </div>
                </div>
            </motion.div>

            <div className="flex-1 flex justify-center lg:justify-end relative">
                {/* Background Blob */}
                <motion.div style={{ y: y2 }} className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[100px] -z-10" />
                <CrazyAvatar />
            </div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-4 z-40 mb-12">
            <motion.div 
                className="inline-flex flex-wrap gap-1 p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                            selectedCategory === cat 
                            ? "text-black" 
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        {selectedCategory === cat && (
                             <motion.div 
                                layoutId="activePill"
                                className="absolute inset-0 bg-white"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                             />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
            {filteredWorks.map((work, index) => (
                <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={work.title} 
                    className="group"
                    onClick={() => handleOpenProject(work)}
                >
                     <div className="bg-dark-100 rounded-[2rem] overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 cursor-pointer h-full flex flex-col relative group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.4)]">
                        
                        {/* Image Area */}
                        <div className={`aspect-[4/3] w-full ${work.color} relative overflow-hidden p-8 flex items-center justify-center`}>
                             {/* Background Pattern */}
                             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
                             
                             {work.images && work.images.length > 0 ? (
                                <Image 
                                    src={work.images[0]} 
                                    alt={work.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                             ) : (
                                 <motion.div 
                                    className="relative z-10 text-white flex flex-col items-center"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                 >
                                     <ImageIcon className="w-20 h-20 mb-4 drop-shadow-lg" />
                                     <div className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 text-xs font-mono">
                                         {work.images ? `${work.images.length} Assets` : 'No Preview'}
                                     </div>
                                 </motion.div>
                             )}

                             {/* Hover Overlay */}
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <motion.div 
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                                >
                                    <ArrowLeft className="w-6 h-6 text-black rotate-180" />
                                </motion.div>
                             </div>
                        </div>

                        {/* Card Footer */}
                        <div className="p-6 bg-[#0a0a0a]">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold tracking-wider text-purple-400 uppercase">{work.category}</span>
                                <MousePointer2 className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">{work.title}</h3>
                            <p className="text-gray-400 text-xs line-clamp-2">{work.description}</p>
                        </div>
                     </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal (Same logic, better style) */}
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:rotate-90"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f0f0f] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Viewer */}
                        <div className={`w-full md:w-3/4 h-[50vh] md:h-auto ${selectedImage.color} relative flex items-center justify-center overflow-hidden bg-opacity-10`}>
                            {/* Texture Overlay */}
                             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                             
                            {selectedImage.images && selectedImage.images.length > 0 ? (
                                <>
                                    <div className="relative w-full h-full p-8 md:p-16 flex items-center justify-center">
                                        <div className="relative w-full h-full shadow-2xl">
                                             <Image 
                                                src={selectedImage.images[currentImageIndex]} 
                                                alt={`${selectedImage.title}`}
                                                fill 
                                                className="object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Navigation */}
                                    {selectedImage.images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={handlePrevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all border border-white/10"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button 
                                                onClick={handleNextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-all border border-white/10"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-white/30 space-y-4">
                                    <div className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center border-2 border-dashed border-white/10">
                                        <ImageIcon className="w-12 h-12" />
                                    </div>
                                    <p className="font-mono text-sm">Preview Unavailable</p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Info */}
                        <div className="w-full md:w-1/4 p-8 bg-[#111] border-l border-white/5 flex flex-col">
                             <div className="mb-8">
                                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/20">
                                    {selectedImage.category}
                                </span>
                                <h2 className="font-display text-3xl font-bold text-white mb-4 leading-tight">{selectedImage.title}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {selectedImage.description}
                                </p>
                             </div>

                             <div className="space-y-6 mt-auto">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tools Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Canva', 'Illustrator', 'Figma'].map((tool) => (
                                            <span key={tool} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5">{tool}</span>
                                        ))}
                                    </div>
                                </div>

                                {selectedImage.images && selectedImage.images.length > 0 && (
                                     <div className="pt-6 border-t border-white/5">
                                        <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                                            <span>ASSET PREVIEW</span>
                                            <span>{currentImageIndex + 1} / {selectedImage.images.length}</span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-purple-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((currentImageIndex + 1) / selectedImage.images.length) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                             </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </main>
  );
}
