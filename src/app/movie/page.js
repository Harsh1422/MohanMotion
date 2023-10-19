import React from 'react';
import Link from "next/link";
import axios from "axios";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Page = async () => {
    const options = {
        method: 'GET', url: 'https://netflix54.p.rapidapi.com/search/', params: {
            query: 'stranger', offset: '0', limit_titles: '50', limit_suggestions: '20', lang: 'en'
        }, headers: {
            'X-RapidAPI-Key': 'f3edbabfabmshbea3f17ad640655p15de1djsnca105a961143',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await axios.request(options);
    const main_data = res.data.titles;
    console.log(res.data)
    return (

        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}> {main_data.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />
                    })}</div>

                </div>
            </section>
        </>);
};

export default Page;