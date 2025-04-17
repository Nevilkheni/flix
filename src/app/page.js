// import React from 'react';
// import Herosection from '@/Header/herosection';
// import styles from '@/styles/movie.module.css';
// import '@/app/globals.css';
// import
//
// const Page = async () => {
//     const url = process.env.NEXT_PUBLIC_RAPID_URL;
//     const apiKey = process.env.RAPID_API_KEY;
//
//     if (!url || !apiKey) {
//         console.error("❌ Missing environment variables: NEXT_PUBLIC_RAPID_URL or RAPID_API_KEY");
//         return (
//             <div style={{ padding: '2rem', color: 'red' }}>
//                 <h2>Environment variable error</h2>
//                 <p>
//                     Make sure <code>NEXT_PUBLIC_RAPID_URL</code> and <code>RAPID_API_KEY</code> are set correctly in
//                     <strong> Vercel Environment Settings </strong> or your local <code>.env.local</code> file.
//                 </p>
//             </div>
//         );
//     }
//
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': apiKey,
//             'x-rapidapi-host': 'netflix54.p.rapidapi.com',
//         },
//         next: { revalidate: 60 }, // ISR
//     };
//
//     let main_data = [];
//
//     try {
//         const res = await fetch(url, options);
//         const data = await res.json();
//         main_data = data?.titles || [];
//     } catch (err) {
//         console.error('Fetch error:', err);
//     }
//
//     return (
//         <>
//             <Herosection title="Welcome to Netflix Universe" imageUrl="/tree.png" />
//             <main className={styles.movieSection}>
//                 {main_data.length === 0 ? (
//                     <p>No movie data found.</p>
//                 ) : (
//                     <p>🎉 Movies loaded! (You can now render your MovieCard list here)</p>
//                 )}
//             </main>
//         </>
//     );
// };
//
// export default Page;





import React from 'react';
import Herosection from '@/Header/herosection';
import styles from '@/styles/movie.module.css';
import '@/app/globals.css';

const Page = () => {
    return (
        <>
            <Herosection title="Welcome to Netflix Universe" imageUrl="/tree.png" />
            <main className={styles.movieSection}>
                <p>🔥 Explore your favorite content here!</p>
            </main>
        </>
    );
};

export default Page;
