import './index.scss';
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo/index';
import LogoPic from '../../assets/images/Sule.png';


const Home = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    const welcomeArray = ['π','W','e','l','c','o','m','e','_','t','o','_','m','y','_','ποΈ','_','o','n','_','t','h','e','π',]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <main>
            <div className="container home-page">
                <div className="text-zone">
                    <h1 className='animate-character'>
                        π αααΊαΉααα¬αα« π§
                    </h1>
                        <h2>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={welcomeArray}
                        idx={12}/>
                        </h2>
                            <h3>
                                <span> const Min = </span> Full-Stack Web Dev πΎ MERN | Public Policy Research π¬ | Burmese Foods Entrepreneurship π | Street Photography πΈ | USPTA Tennis Instructor πΎ | PADI Scuba π€Ώ | UNESCO Volunteer ποΈ
                            </h3>
                                <img className='coverP' 
                                src={LogoPic} alt="Β©copyrighted Sule Protest: February, Yangon 2021">
                                </img>
                    <Link to="/contact" className='flat-button'>π§ CONTACT ME π€ </Link>
                </div>
            </div>
                <Logo/>
        </main>

    );
}


export default Home