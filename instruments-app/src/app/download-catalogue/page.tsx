"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import styles from './download.module.css';

const CATALOGUES = [
    {
        id: 'gor',
        name: 'Gas and Oil Relays Catalogue',
        fileName: 'GOR Cat.pdf',
        icon: '🛡️'
    },
    {
        id: 'mog',
        name: 'MOG Catalogue',
        fileName: 'MOG.pdf',
        icon: '📊'
    },
    {
        id: 'sgb',
        name: 'Silica Gel Breather Catalogue',
        fileName: 'SGB Catlog.pdf',
        icon: '💨'
    }
];

export default function DownloadCataloguePage() {
    const [selectedId, setSelectedId] = useState<string | null>(CATALOGUES[0].id);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);

    const activeCatalogue = CATALOGUES.find(c => c.id === selectedId);

    const handleClose = () => setSelectedId(null);
    const handleMinimize = () => setIsMinimized(!isMinimized);
    const handleMaximize = () => setIsMaximized(!isMaximized);

    return (
        <div className={styles.cataloguePage}>
            {/* Overlay for maximized mode */}
            {isMaximized && (
                <div 
                    style={{ 
                        position: 'fixed', 
                        inset: 0, 
                        background: 'rgba(0,0,0,0.4)', 
                        backdropFilter: 'blur(10px)',
                        zIndex: 999 
                    }} 
                    onClick={() => setIsMaximized(false)}
                />
            )}
            
            <header className={styles.pageHeader}>
                <div className={styles.headerInner}>
                    <span className={styles.headerLabel}>Resource Center</span>
                    <h1>Download Catalogue</h1>
                    <p className={styles.headerSub}>
                        Access our complete product documentation. View catalogues directly in your browser or download them for offline use.
                    </p>
                </div>
            </header>

            <main className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {CATALOGUES.map((cat) => (
                        <motion.div
                            key={cat.id}
                            className={`${styles.catalogueCard} ${selectedId === cat.id ? styles.activeCard : ''}`}
                            onClick={() => {
                                setSelectedId(cat.id);
                                setIsMinimized(false);
                                if (window.innerWidth <= 768) {
                                    setIsMaximized(true);
                                }
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <FileText size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>{cat.name}</h3>
                            </div>
                            
                            <a 
                                href={`/catalog/${cat.fileName}`}
                                download
                                className={styles.downloadLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Download size={18} />
                                Download PDF
                            </a>
                        </motion.div>
                    ))}
                </aside>

                {/* Viewer */}
                <section className={`${styles.viewerContainer} ${isMinimized ? styles.minimized : ''} ${isMaximized ? styles.maximized : ''}`}>
                    <AnimatePresence mode="wait">
                        {activeCatalogue ? (
                            <motion.div
                                key={activeCatalogue.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <div className={styles.viewerHeader}>
                                    <span className={styles.viewerTitle}>{activeCatalogue.name}</span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <div className={`${styles.dot} ${styles.red}`} onClick={handleClose} title="Close" />
                                        <div className={`${styles.dot} ${styles.orange}`} onClick={handleMinimize} title="Minimize" />
                                        <div className={`${styles.dot} ${styles.green}`} onClick={handleMaximize} title="Maximize" />
                                    </div>
                                </div>
                                {!isMinimized && (
                                    <iframe
                                        src={`/catalog/${activeCatalogue.fileName}#toolbar=0`}
                                        className={styles.pdfFrame}
                                        title={activeCatalogue.name}
                                    />
                                )}
                            </motion.div>
                        ) : (
                            <div className={styles.emptyViewer}>
                                <Eye size={64} />
                                <p>Select a catalogue to view it here</p>
                            </div>
                        )}
                    </AnimatePresence>
                </section>
            </main>
        </div>
    );
}
