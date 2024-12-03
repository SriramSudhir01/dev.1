"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolSelector from '@/components/ToolSelector';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import BulkProcessor from '@/components/BulkProcessor';
import FolderUploader from '@/components/FolderUploader';
import ImageLinkProcessor from '@/components/ImageLinkProcessor';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdContainer from '@/components/AdContainer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Hero />
            
            <AdContainer className="my-8" slot="1234567890" format="horizontal" />

            <div id="tools" className="mt-12 scroll-mt-20">
              <Tabs defaultValue="single" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                  <TabsTrigger value="single">Single Image</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
                  <TabsTrigger value="folder">Folder Upload</TabsTrigger>
                  <TabsTrigger value="url">Image URL</TabsTrigger>
                </TabsList>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-3">
                    <TabsContent value="single">
                      <ToolSelector />
                    </TabsContent>
                    <TabsContent value="bulk">
                      <BulkProcessor />
                    </TabsContent>
                    <TabsContent value="folder">
                      <FolderUploader />
                    </TabsContent>
                    <TabsContent value="url">
                      <ImageLinkProcessor />
                    </TabsContent>
                  </div>
                  <div className="hidden lg:block">
                    <AdContainer className="sticky top-24" slot="2345678901" format="vertical" />
                  </div>
                </div>
              </Tabs>
            </div>

            <AdContainer className="my-12" slot="3456789012" format="rectangle" />
            
            <HowItWorks />
            <Features />

            <AdContainer className="my-12" slot="4567890123" format="horizontal" />

            <Testimonials />

            <AdContainer className="my-12" slot="5678901234" format="rectangle" />
          </div>
        </div>
      </main>
      <Footer />

      <Button
        variant="default"
        size="icon"
        className={`fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}