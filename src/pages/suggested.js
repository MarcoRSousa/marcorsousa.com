import React from "react"

import Layout from '../components/layout'
import Head from "../components/head"

import * as suggestedStyle from "../styles/suggested.module.scss"

export default function Suggest() {
  return(
  <Layout>
    <Head title="Suggested"/>
    <h1> Suggested Content </h1>
    <p> I enjoy a great deal of content creators and books, and I would like to support some of them here. Please note that the views held in the following are not my own.</p>
    <br/>
    <div className={suggestedStyle.suggested}>
      <h2>Content Creators</h2>
      <h4> Mathematics </h4>
      <ol>
        <li> <a href= "http://standupmaths.com/" target = "_blank" rel="noopener noreferrer">Matt Parker</a></li>
        <li> <a href= "https://www.numberphile.com/" target = "_blank" rel="noopener noreferrer">Numberphile</a></li>
        <li> <a href= "https://victorzhou.com/" target = "_blank" rel="noopener noreferrer">Victor Zhou</a></li>
      </ol>
      <h4> Philosophy </h4>
      <ol className={suggestedStyle.suggested}>
        <li> <a href= "https://www.andrewklavan.com/" target = "_blank" rel="noopener noreferrer">Andrew Klavan</a></li>
        <li> <a href= "https://www.jordanbpeterson.com/" target = "_blank" rel="noopener noreferrer">Jordan Peterson</a></li>
        <li> See book list below for more works via authors</li>
      </ol>
      <h4> Music </h4>
      <ol className={suggestedStyle.suggested}>
        <li> <a href= "https://www.youtube.com/user/akirathedon/videos" target = "_blank" rel="noopener noreferrer">Akira the Don</a></li>
        <li> <a href= "https://www.youtube.com/c/projectroyal/videos" target = "_blank" rel="noopener noreferrer">Project Royal</a></li>
        <li> Classical and <a href= "https://www.youtube.com/c/twosetviolin/videos" target = "_blank" rel="noopener noreferrer"> TwoSetViolin</a></li>
      </ol>
      <h2>Book List</h2>
      <p>Note that these are 'lazy links'; you may find better sellers/products yourself.
        Also, these are not all great books, but only those that I have had the opportunity to read at present.
      </p>
      <br/>
      <h4> Philosophy, Life, and Great Works</h4>
  
      <ol className={suggestedStyle.suggested}>
        <li> <a href= "https://www.amazon.com/12-Rules-for-Life-audiobook/dp/B0797Y87JC/ref=sr_1_4?dchild=1&keywords=jordan+peterson+maps+of+meaning&qid=1621970554&s=books&sr=1-4" target = "_blank" rel="noopener noreferrer">Jordan Peterson: 12 Rules for Life</a></li>
        <li> <a href= "https://www.amazon.com/Maps-Meaning-Architecture-Jordan-Peterson/dp/0415922224/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1621970598&sr=1-1" target = "_blank" rel="noopener noreferrer">Jordan Peterson: Maps of Meaning</a></li>

        <li> <a href= "https://www.amazon.com/Thus-Spoke-Zarathustra-Friedrich-Nietzsche/dp/1984056204/ref=sr_1_6?crid=1Q36F86G76959&dchild=1&keywords=nietzsche+thus+spoke+zarathustra&qid=1621970529&s=books&sprefix=nietzsche+thus+spoke+zara%2Cstripbooks%2C177&sr=1-6" target = "_blank" rel="noopener noreferrer">Nietzsche: Thus Spoke Zarathustra</a></li>
        <li> <a href= "https://www.amazon.com/Essential-Nietzsche-Beyond-Genealogy-Morals/dp/0785835431/ref=sr_1_2?crid=2K0PJTDMM09VA&dchild=1&keywords=essential+nietzsche&qid=1621970488&s=books&sprefix=Nietzsche%3A+the+essential%2Cstripbooks%2C226&sr=1-2" target = "_blank" rel="noopener noreferrer">Nietzsche: Beyond Good and Evil</a></li>
        <li> <a href= "https://www.amazon.com/Essential-Nietzsche-Beyond-Genealogy-Morals/dp/0785835431/ref=sr_1_2?crid=2K0PJTDMM09VA&dchild=1&keywords=essential+nietzsche&qid=1621970488&s=books&sprefix=Nietzsche%3A+the+essential%2Cstripbooks%2C226&sr=1-2" target = "_blank" rel="noopener noreferrer">Nietzsche: The Genealogy of Morals</a></li>
        <li> <a href= "https://www.amazon.com/Will-Power-Friedrich-Nietzsche-1968-08-12/dp/B01FIW3F88/ref=sr_1_6?dchild=1&keywords=Nietzsche%3AThe+Will+To+Power&qid=1621970416&s=books&sr=1-6" target = "_blank" rel="noopener noreferrer">Nietzsche:The Will To Power</a></li>

        <li> <a href= "https://www.amazon.com/Origins-History-Consciousness-Neumann-Paperback/dp/B011SK2KNK/ref=sr_1_5?dchild=1&keywords=Neumann%3AThe+Origins+and+History+of+Consciousness&qid=1621970360&s=books&sr=1-5" target = "_blank" rel="noopener noreferrer">Neumann: The Origins and History of Consciousness</a></li>
        <li> <a href= "https://www.amazon.com/Modern-Man-Search-Soul-Jung/dp/1684220904/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1621970222&sr=1-2" target = "_blank" rel="noopener noreferrer">Jung:Modern Man in Search of a Soul</a></li>
        <li> <a href= "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273/ref=sr_1_1?dchild=1&keywords=Man%27s+Search+For+Meaning&qid=1621970170&s=books&sr=1-1" target = "_blank" rel="noopener noreferrer">Frankel: Man's Search For Meaning</a></li>

        <li> <a href= "https://www.amazon.com/Demons-Novel-Three-Vintage-Classics/dp/0679734511/ref=sr_1_1?dchild=1&keywords=dostoevsky+demons&qid=1621970105&s=books&sr=1-1" target = "_blank" rel="noopener noreferrer">Dostoevsky: Demons</a></li>
        <li> <a href= "https://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132/ref=sr_1_1?crid=2SDU8VZ3AYWE1&dchild=1&keywords=crime+and+punishment+penguin+classics&qid=1621969787&s=books&sprefix=Crime+and+Punishment+penguin+class%2Cstripbooks%2C172&sr=1-1" target = "_blank" rel="noopener noreferrer">Dostoevsky: Crime and Punishment</a></li>

        <li> <a href= "https://www.amazon.com/Rage-Responsibility-Conservative-Peterson-America/dp/1557789363/ref=sr_1_2?crid=24GH650FOZGQJ&dchild=1&keywords=from+rage+to+responsibility&qid=1621970123&s=books&sprefix=from+rage+to+resp%2Cstripbooks%2C183&sr=1-2" target = "_blank" rel="noopener noreferrer">Jesse Lee Peterson: From Rage to Responsibility</a></li>
        <li> <a href= "https://www.amazon.com/Meditations-Marcus-Aurelius/dp/1503280462/ref=pd_lpo_14_img_2/134-0895165-7367607?_encoding=UTF8&pd_rd_i=1503280462&pd_rd_r=9f311800-58b6-4b8d-9217-6cf1bb3d056a&pd_rd_w=r8m4o&pd_rd_wg=dq41W&pf_rd_p=a0d6e967-6561-454c-84f8-2ce2c92b79a6&pf_rd_r=3PBY4EM8AWR9AZ1X3HVF&psc=1&refRID=3PBY4EM8AWR9AZ1X3HVF" target = "_blank" rel="noopener noreferrer">Aurelius: Meditations</a></li>

        <li> <a href= "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523" target = "_blank" rel="noopener noreferrer">Huxley: Brave New World</a></li>
        <li> <a href= "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310" target = "_blank" rel="noopener noreferrer">Bradbury: Fahrenheit 451</a></li>
        <li>Golding: Lord of the Flies</li>
        <li>Orwell: 1984</li>
      </ol>

      <h4> Mathematics </h4>
      <ol>
        <li> <a href= "https://www.amazon.com/Humble-Pi-Comedy-Maths-Errors/dp/0241360234" target = "_blank" rel="noopener noreferrer">Matt Parker: Humble Pi: A Comedy of Maths Errors</a></li>
      </ol>
    </div>
  </Layout>
  )
}