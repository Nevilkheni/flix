import styles from '@/styles/herosection.module.css';
import Link from "next/link";

    const Herosection = ({ title, imageUrl }) => {
    return (
        <main className={styles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={styles.hero_content}>
                        <h1>{title}</h1>
                        <p>From award-winning dramas to blockbuster action movies, we&apos;ve got you covered.</p>
                        <Link href="/movie"><button>Explore Movies</button></Link>
                    </div>
                    <div className={styles.hero_image}></div>
                </div>
            </div>
        </main>
    );
};

export default Herosection;
