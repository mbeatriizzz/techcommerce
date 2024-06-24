"use client";

import React from 'react';
import Carousel from "@/components/carousel";
import Content from "@/components/content";
import Header from "@/components/header";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Filter from '@/components/filter';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-10 p-6">
      <Header/>
      <Filter/>
      <Carousel/>
      <Content/>
      <Footer/>
    </main>
  );
}
