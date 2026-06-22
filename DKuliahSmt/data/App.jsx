import { useState } from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid'
import { featureData } from './data/features'

const App = () => {
    const [features] = useState(featureData);

    return (
        <>
            <header />
            <Hero
                title="Solusi Terbaik untuk Bisnismu"
                description="Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil."
                buttonText="Mulai Gratis"
            <CardGrid features />
            <footer class="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
                <p>&copy; 2026 BrandKu. All rights reserved.</p>
            </footer>
        </>
    )
}

