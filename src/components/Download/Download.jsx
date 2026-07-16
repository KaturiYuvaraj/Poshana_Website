import "./Download.css";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import phoneMockup from "../../assets/download-phones.png";
import qrAppStore from "../../assets/qr-appstore.png";
import qrPlayStore from "../../assets/qr-playstore.png";
import badgeApple from "../../assets/badge-apple.png";
import badgePlay from "../../assets/badge-play.png";

const STORE_LINKS = {
    apple: "https://apps.apple.com/in/app/poshana/id6743692625",
    play: "https://play.google.com/store/apps/details?id=com.aits.poshana&pcampaignid=web_share",
};

export default function Download() {
    return (
        <section className="download-section" id="download">
            {/* Decorative blobs */}
            <div className="dl-blob dl-blob--1" />
            <div className="dl-blob dl-blob--2" />

            <div className="download-container">
                {/* Left: text column */}
                <motion.div
                    className="download-text-col"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="dl-eyebrow">
                        <span className="dl-eyebrow-dot" />
                        Available Now
                    </div>

                    <h2 className="dl-heading">
                        Get <span className="dl-heading--accent">Poshana</span><br />Today
                    </h2>

                    <p className="dl-subtext">
                        Start your personalized wellness journey.<br />
                        Available now on iOS and Android.
                    </p>

                    {/* Rating row */}
                    <div className="dl-rating">
                        <div className="dl-stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="#EFFF1E" color="#EFFF1E" />
                            ))}
                        </div>
                        <span className="dl-rating-text">4.8 · 50k+ Downloads</span>
                    </div>

                    {/* QR codes — side by side, above buttons */}
                    <motion.div
                        className="dl-qr-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                    >
                        {/* App Store QR */}
                        <div className="dl-qr-card">
                            <div className="dl-qr-img-wrap">
                                <img src={qrAppStore} alt="Scan to download on App Store" className="dl-qr-img" />
                            </div>
                            <div className="dl-qr-platform dl-qr-platform--apple">
                                <span className="dl-qr-platform-dot" />
                                App Store
                            </div>
                        </div>

                        {/* Play Store QR */}
                        <div className="dl-qr-card">
                            <div className="dl-qr-img-wrap">
                                <img src={qrPlayStore} alt="Scan to download on Google Play" className="dl-qr-img" />
                            </div>
                            <div className="dl-qr-platform dl-qr-platform--play">
                                <span className="dl-qr-platform-dot" />
                                Google Play
                            </div>
                        </div>
                    </motion.div>

                    {/* Store buttons — below QR */}
                    <div className="dl-buttons">
                        <motion.a
                            href={STORE_LINKS.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dl-store-btn"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                            whileHover="hover"
                            whileTap={{ scale: 0.96 }}
                        >
                            <motion.span
                                className="dl-btn-shimmer"
                                variants={{
                                    hover: { x: "200%", transition: { duration: 0.5, ease: "easeInOut" } },
                                }}
                                initial={{ x: "-100%" }}
                            />
                            <img
                                src={badgeApple}
                                alt="Download on the App Store"
                                className="dl-badge-img"
                            />
                        </motion.a>

                        <motion.a
                            href={STORE_LINKS.play}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dl-store-btn"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.55, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                            whileHover="hover"
                            whileTap={{ scale: 0.96 }}
                        >
                            <motion.span
                                className="dl-btn-shimmer"
                                variants={{
                                    hover: { x: "200%", transition: { duration: 0.5, ease: "easeInOut" } },
                                }}
                                initial={{ x: "-100%" }}
                            />
                            <img
                                src={badgePlay}
                                alt="Get it on Google Play"
                                className="dl-badge-img"
                            />
                        </motion.a>
                    </div>

                </motion.div>

                {/* Right: phone mockup */}
                <motion.div
                    className="download-phones-col"
                    initial={{ opacity: 0, x: 60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                >
                    <div className="dl-phone-glow" />
                    <img src={phoneMockup} alt="Poshana app on iPhone" className="dl-phone-img" />
                </motion.div>
            </div>
        </section>
    );
}
