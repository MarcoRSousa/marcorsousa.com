import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export default function Suggest() {
    return(
    <Layout>
        <Head title="Projects"/>
        <h1>Projects</h1>

        <p>The following are some of the projects I've worked on. Featured projects are generally more substantial.</p>
        
        <p>Many projects here listed here are quite boring! This works as a reference list. Check out my <Link to="/blog">posts</Link> for more exciting content.</p>

        <h3> Featured </h3>
        <ul>
            <li> <a href= "https://github.com/MarcoRSousa/DigitClassification" target = "_blank" rel="noopener noreferrer">Digit Classification of MNIST Dataset</a> ~ Machine Learning and Neural Networks</li>
            <li> <a href= "https://github.com/MarcoRSousa/Numerical-Analysis-Python-Methods" target = "_blank" rel="noopener noreferrer">Numerical Analysis Methods</a> ~ Numerical Analysis</li>
        </ul>
        
        <h3> 2021 </h3>
        <ul>
            <li> <a href= "https://github.com/MarcoRSousa/DigitClassification" target = "_blank" rel="noopener noreferrer">Digit Classification of MNIST Dataset</a> ~ Machine Learning and Neural Networks</li>
        </ul>
        <h3> 2020 </h3>
        <ul>
        <li> <a href= "https://github.com/MarcoRSousa/Numerical-Analysis-Python-Methods" target = "_blank" rel="noopener noreferrer">Numerical Analysis Methods</a> ~ Numerical Analysis</li>
        </ul>
        <h3> 2019 </h3>
        <ul>
            <li> <a href= "https://github.com/MarcoRSousa/MTGDataAnalysis" target = "_blank" rel="noopener noreferrer">MTG Red Deck Wins Data Analysis</a> ~ Bootstrapping, Data Cleaning, Python Development, Statistics</li>
            <li> <a href= "https://drive.google.com/file/d/1t7q5gwWYJWBCXTYvszwovVcq_Koobd1B/view" target = "_blank" rel="noopener noreferrer">Line Approximation to Smooth Curvature</a> ~ Model Fitting, Calculus</li>
            <li> <a href= "https://drive.google.com/file/d/1jmVH7In8Wb-cHZfy6Aug22GR0WIAoIQw/view?usp=sharing" target = "_blank" rel="noopener noreferrer">DSC R Lab 5</a> ~ PCA, Clustering in R</li>
            <li> <a href= "https://drive.google.com/file/d/19lBZ0WlJMb2CEi9WVPVyJVhjkFHoYIoA/view?usp=sharing" target = "_blank" rel="noopener noreferrer">DSC R Lab 4</a> ~ dplyr, Data Cleaning R</li>
            <li> <a href= "https://drive.google.com/file/d/1fEqwEoSAHyWMA3YfmesZ6DvvUdXR98Q3/view?usp=sharing" target = "_blank" rel="noopener noreferrer">DSC R Lab 3</a> ~ Descriptive Statistics in R</li>
        </ul>
        <h3> 2018 </h3>
        <ul>
            <li> <a href= "https://drive.google.com/file/d/1t7q5gwWYJWBCXTYvszwovVcq_Koobd1B/view" target = "_blank" rel="noopener noreferrer">Analysis of the UMassD CONNECT Program</a> ~ Logistic Regression</li>
            <li> <a href= "https://drive.google.com/file/d/1A74vYXhE0PqQOVEPSdw0DqGTNumOUKze/view?usp=sharing" target = "_blank" rel="noopener noreferrer">Analysis of Dune Data</a> ~ ANOVA Analysis, Tukey HSD</li>
        </ul>
    </Layout>

)}