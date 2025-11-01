'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Building2, Eye, Star } from 'lucide-react';
import { constructionProjects, constructionCategories, constructionTypes, ConstructionProject } from '@/data/construction-portfolio';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';
import { useLanguage } from '@/lib/i18n/context';

export default function KonstruksiPortfolioPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ConstructionProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageFilter, setImageFilter] = useState<'all' | 'render' | 'technical' | 'photo'>('all');

  const filteredProjects = constructionProjects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const typeMatch = selectedType === 'all' || project.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const featuredProject = constructionProjects.find(p => p.featured);

  const openModal = (project: ConstructionProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setImageFilter('all');
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      const filteredImages = imageFilter === 'all' 
        ? selectedProject.images 
        : selectedProject.images.filter(img => img.type === imageFilter);
      setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const filteredImages = imageFilter === 'all' 
        ? selectedProject.images 
        : selectedProject.images.filter(img => img.type === imageFilter);
      setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const getFilteredImages = () => {
    if (!selectedProject) return [];
    return imageFilter === 'all' 
      ? selectedProject.images 
      : selectedProject.images.filter(img => img.type === imageFilter);
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'render': return 'Render 3D';
      case 'technical': return 'Gambar Kerja';
      case 'photo': return 'Foto Real';
      case 'mixed': return 'Render + Foto';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">{t.constructionPortfolio.title}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.constructionPortfolio.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">{constructionProjects.length}</div>
            <div className="text-sm text-muted-foreground mt-1">{t.constructionPortfolio.projects}</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">{constructionProjects.reduce((acc, p) => acc + p.images.length, 0)}</div>
            <div className="text-sm text-muted-foreground mt-1">{language === 'id' ? 'Gambar' : 'Images'}</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">{constructionProjects.filter(p => p.type === 'render' || p.type === 'mixed').length}</div>
            <div className="text-sm text-muted-foreground mt-1">{t.constructionPortfolio.renderLabel}</div>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary">{constructionProjects.filter(p => p.type === 'photo' || p.type === 'mixed').length}</div>
            <div className="text-sm text-muted-foreground mt-1">{t.constructionPortfolio.photoLabel}</div>
          </div>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => openModal(featuredProject)}
          >
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
              <Star className="w-4 h-4 fill-current" />
              {t.constructionPortfolio.featuredProject}
            </div>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                    {language === 'id' ? constructionCategories.find(c => c.value === featuredProject.category)?.labelId : constructionCategories.find(c => c.value === featuredProject.category)?.labelEn}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                    {getTypeLabel(featuredProject.type)}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{featuredProject.title}</h2>
                <p className="text-white/90 max-w-2xl line-clamp-2">{featuredProject.description}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-white/80">
                  <span>📍 {featuredProject.location}</span>
                  <span>📅 {featuredProject.year}</span>
                  <span>📸 {featuredProject.images.length} gambar</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {constructionCategories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                className="transition-all duration-300"
              >
                <span className="mr-2">{category.icon}</span>
                {language === 'id' ? category.labelId : category.labelEn}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {constructionTypes.map((type) => (
              <Button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                variant={selectedType === type.value ? 'default' : 'outline'}
                size="sm"
              >
                {language === 'id' ? type.labelId : type.labelEn}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{project.images.length} gambar</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {constructionCategories.find(c => c.value === project.category)?.icon}
                      {' '}
                      {language === 'id' ? constructionCategories.find(c => c.value === project.category)?.labelId : constructionCategories.find(c => c.value === project.category)?.labelEn}
                    </span>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">
                      {getTypeLabel(project.type)}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg line-clamp-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                    <span>📍 {project.location}</span>
                    <span>📅 {project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 space-y-4"
          >
            <Building2 className="w-16 h-16 mx-auto text-muted-foreground" />
            <p className="text-xl text-muted-foreground">
              {t.constructionPortfolio.noProjectsInCategory}
            </p>
            <Button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
              }} 
              variant="outline"
            >
              Reset Filter
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t.constructionPortfolio.startYourProject}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.constructionPortfolio.startYourProjectDesc} {language === 'id' ? 'di' : 'in'} {site.serviceAreas.join(', ')} {language === 'id' ? 'dan sekitarnya' : 'and surrounding areas'}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/portofolio">
                Lihat Before & After
              </a>
            </Button>
          </div>
        </motion.section>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-background rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedProject.featured && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {constructionCategories.find(c => c.value === selectedProject.category)?.icon}
                      {' '}
                      {language === 'id' ? constructionCategories.find(c => c.value === selectedProject.category)?.labelId : constructionCategories.find(c => c.value === selectedProject.category)?.labelEn}
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      {getTypeLabel(selectedProject.type)}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{selectedProject.title}</h2>
                  <p className="text-muted-foreground text-lg">{selectedProject.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      📍 {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      📅 {selectedProject.year}
                    </span>
                    {selectedProject.client && (
                      <span className="flex items-center gap-1">
                        👤 {selectedProject.client}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      📸 {selectedProject.images.length} {t.constructionPortfolio.images}
                    </span>
                  </div>
                </div>

                {/* Image Type Filter */}
                <div className="flex gap-2 justify-center flex-wrap">
                  <Button
                    onClick={() => {
                      setImageFilter('all');
                      setCurrentImageIndex(0);
                    }}
                    variant={imageFilter === 'all' ? 'default' : 'outline'}
                    size="sm"
                  >
                    Semua ({selectedProject.images.length})
                  </Button>
                  {selectedProject.images.some(img => img.type === 'render') && (
                    <Button
                      onClick={() => {
                        setImageFilter('render');
                        setCurrentImageIndex(0);
                      }}
                      variant={imageFilter === 'render' ? 'default' : 'outline'}
                      size="sm"
                    >
                      Render 3D ({selectedProject.images.filter(img => img.type === 'render').length})
                    </Button>
                  )}
                  {selectedProject.images.some(img => img.type === 'technical') && (
                    <Button
                      onClick={() => {
                        setImageFilter('technical');
                        setCurrentImageIndex(0);
                      }}
                      variant={imageFilter === 'technical' ? 'default' : 'outline'}
                      size="sm"
                    >
                      Gambar Kerja ({selectedProject.images.filter(img => img.type === 'technical').length})
                    </Button>
                  )}
                  {selectedProject.images.some(img => img.type === 'photo') && (
                    <Button
                      onClick={() => {
                        setImageFilter('photo');
                        setCurrentImageIndex(0);
                      }}
                      variant={imageFilter === 'photo' ? 'default' : 'outline'}
                      size="sm"
                    >
                      Foto Real ({selectedProject.images.filter(img => img.type === 'photo').length})
                    </Button>
                  )}
                </div>

                {/* Image Carousel */}
                <div className="relative">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={getFilteredImages()[currentImageIndex]?.path || selectedProject.coverImage}
                      alt={getFilteredImages()[currentImageIndex]?.caption || selectedProject.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {getFilteredImages().length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {getFilteredImages().length}
                  </div>
                </div>

                {/* Caption */}
                {getFilteredImages()[currentImageIndex]?.caption && (
                  <div className="text-center">
                    <p className="text-muted-foreground">
                      {getFilteredImages()[currentImageIndex].caption}
                    </p>
                  </div>
                )}

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {getFilteredImages().map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-primary scale-95' 
                          : 'border-transparent hover:border-primary/50'
                      }`}
                    >
                      <Image
                        src={image.path}
                        alt={image.caption || `Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6 border-t">
                  <Button asChild className="w-full" size="lg">
                    <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                      {t.constructionPortfolio.consultSimilarProject}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
