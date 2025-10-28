'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import { furnitureItems, furnitureCategories, FurnitureItem } from '@/data/furniture-portfolio';
import { Button } from '@/components/ui/button';
import { site } from '@/config/site';

export default function FurniturePortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const [viewMode, setViewMode] = useState<'render' | 'construction'>('render');
  const [constructionIndex, setConstructionIndex] = useState<number>(0);

  const filteredItems = selectedCategory === 'all'
    ? furnitureItems
    : furnitureItems.filter(item => item.category === selectedCategory);

  const openModal = (item: FurnitureItem) => {
    setSelectedItem(item);
    setViewMode('render');
    setConstructionIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setConstructionIndex(0);
  };

  const navigateItem = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedItem(filteredItems[newIndex]);
    setViewMode('render');
    setConstructionIndex(0);
  };

  const navigateConstruction = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;
    const maxIndex = selectedItem.constructionImages.length - 1;
    
    if (direction === 'prev') {
      setConstructionIndex(prev => prev > 0 ? prev - 1 : maxIndex);
    } else {
      setConstructionIndex(prev => prev < maxIndex ? prev + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Portfolio Furniture
          </h1>
          <p className="text-lg text-muted-foreground">
            Koleksi desain furniture custom dengan render 3D dan detail konstruksi.
            Kualitas ekspor dengan craftsmanship tinggi dari {site.brand}.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {furnitureCategories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <Image
                    src={item.renderImage}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-xs font-medium text-white/80">{item.code}</p>
                      <p className="text-sm font-semibold line-clamp-2">{item.name}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <ZoomIn className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.code}
                    </span>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {furnitureCategories.find(c => c.value === item.category)?.label}
                    </span>
                  </div>
                  <h3 className="font-semibold line-clamp-2 text-sm">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 space-y-4"
          >
            <p className="text-xl text-muted-foreground">
              Tidak ada furniture di kategori ini
            </p>
            <Button onClick={() => setSelectedCategory('all')} variant="outline">
              Lihat Semua
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Tertarik Custom Furniture?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menerima pesanan custom furniture sesuai desain dan kebutuhan Anda.
            Konsultasi gratis dengan tim ahli kami.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                Konsultasi WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/kontak">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </motion.section>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateItem('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateItem('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8 space-y-6">
                {/* Header Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      {selectedItem.code}
                    </span>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {furnitureCategories.find(c => c.value === selectedItem.category)?.label}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold">{selectedItem.name}</h2>
                  {selectedItem.description && (
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  )}
                </div>

                {/* View Toggle */}
                <div className="flex gap-2 justify-center">
                  <Button
                    onClick={() => {
                      setViewMode('render');
                      setConstructionIndex(0);
                    }}
                    variant={viewMode === 'render' ? 'default' : 'outline'}
                    className="flex-1 max-w-xs"
                  >
                    Render 3D
                  </Button>
                  <Button
                    onClick={() => {
                      setViewMode('construction');
                      setConstructionIndex(0);
                    }}
                    variant={viewMode === 'construction' ? 'default' : 'outline'}
                    className="flex-1 max-w-xs"
                  >
                    Detail Konstruksi
                  </Button>
                </div>

                {/* Image Display */}
                <motion.div
                  key={`${viewMode}-${constructionIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video w-full rounded-xl overflow-hidden bg-muted"
                >
                  <Image
                    src={viewMode === 'render' ? selectedItem.renderImage : selectedItem.constructionImages[constructionIndex]}
                    alt={`${selectedItem.name} - ${viewMode === 'render' ? 'Render' : `Construction ${constructionIndex + 1}`}`}
                    fill
                    className="object-contain"
                  />
                  
                  {/* Construction Navigation */}
                  {viewMode === 'construction' && selectedItem.constructionImages.length > 1 && (
                    <>
                      <button
                        onClick={() => navigateConstruction('prev')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigateConstruction('next')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      
                      {/* Construction Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <p className="text-sm font-medium">
                          {constructionIndex + 1} / {selectedItem.constructionImages.length}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Tanggal</p>
                    <p className="font-medium">{selectedItem.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Kategori</p>
                    <p className="font-medium">
                      {furnitureCategories.find(c => c.value === selectedItem.category)?.label}
                    </p>
                  </div>
                </div>

                {/* CTA in Modal */}
                <div className="pt-6 border-t">
                  <Button asChild className="w-full" size="lg">
                    <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                      Pesan Custom Furniture Serupa
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
