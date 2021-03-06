import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface SpeakersTemplateData {

}

const speakersData = [
    {
        firstName: "Daniel",
        lastName: "Young",
        image: "resources/img/UBX19_Young.png",
        jobInfo: "Head of Digital Experience easyJet",
        description: 'Daniel Young is a high caliber digital experience specialist, delivering pioneering solutions and driving commercial and customer experience results. In his role as Head of Digital Experience at easyJet, he is responsible for all customer-facing mobile app development, associated mobile initiatives and innovation projects. How to deliver best-in-class mobile customer experience through award-winning mobile leadership, Dan will explain at UBX.'
    },
    {
        firstName: "Dirk",
        lastName: "von Gehlen",
        image: "resources/img/UBX19_vonGehlen.png",
        jobInfo: "Diploma Journalist Sueddeutsche Zeitung",
        description: 'Dirk von Gehlen is an author, journalist, head of the Social Media/Innovation department at one of Germanys most important newspapers and has been researching the social consequences of digitisation for years. As the inventor of the "pragmatism principle" ¯\_(ツ)_/¯ he pleads for a culturally pragmatic approach to the new – which will be perfectly fitting into the spirit of UBX.'
    },
    {
        firstName: "Cindy-Ricarda",
        lastName: "Robert",
        image: "resources/img/UBX19_RcardaRoberts.png",
        jobInfo: "Scientist / PhD Student Technical University, Munich",
        description: "Cindy-Ricarda Roberts is a research assistant at the Chair of Media Ethics at the Munich School of Philosophy. Currently she is completing her doctoral thesis on democracy and digitization. Her research topics include fake news, hacking and their consequences for democratic processes. At UBX she will participate in an expert panel on the balance of AI and ethics together with Dagmar Schuller and Christian Greb."
    },
    {
        firstName: "Sam",
        lastName: "Conniff Allende",
        image: "resources/img/UBX19_Conniff.png",
        jobInfo: "Author & Serial Entrepreneur",
        description: 'Sam Conniff Allende is an award-winning serial entrepreneur and founder of start-ups. He advises governments, think tanks and brands from Red Bull to Unilever on CSR and has mentored thousands of young entrepreneurs. At UBX, the author of "Be More Pirate" opens the true and unimagined strategy of pirates as pioneers of change, leadership and social innovation.'
    },
    {
        firstName: "Sudan",
        lastName: "Jackson",
        image: "resources/img/UBX19_Sudan.png",
        jobInfo: "Manager Organisational & Cultural Development REWE Digital",
        description: "Sudan Jackson is responsible for the cultural and organisational development of REWE Digital's technology division. His work focuses on the active creation of a collaborative environment for the creation of modern, innovative, creative and customer-oriented solutions. At UBX, he lets us participate how one can be inspired every day to improve people's (working) lives."
    },
    {
        firstName: "Charles",
        lastName: "C. Uno",
        image: "resources/img/UBX19_Onu.png",
        jobInfo: "Founder & AI Research Lead Ubenwa Intelligence Solutions",
        description: 'Charles C. Uno has founded a company that applies AI and mobile technology to enable timely diagnosis of birth asphyxia from a newborn cry. He has over six years experience in the development of machine learning software for real-world health care problems such as breast cancer patient care and intensive care unit (ICU) monitoring. At UBX, he will share his passion about developing high impact technologies that address social challenges, especially in resource-poor settings.'
    },
    {
        firstName: "Anne-Kathrin",
        lastName: "Bedoy",
        image: "resources/img/UBX19_Bedoy.png",
        jobInfo: "Digital & Communication Director Active Cosmetics, L'Oréal",
        description: "Anne-Kathrin Bedoy heads the digital agenda of the dermocosmetics division at L'Oréal Germany. Together with Linda Schreurs, who is on the same mission for L'Oréal's skincare brand La Roche-Posay, she implements ‘My Skin Track UV', the first wearable sensor and companion app to determine personal UV exposure, pollution, pollen levels and humidity. At UBX, their tandem lecture will show how scientific and technological progress can take the user experience onto a new level."
    },
    {
        firstName: "Tom",
        lastName: "De Bruyne",
        image: "resources/img/UBX19_deBruyn.png",
        jobInfo: "Founder & Creative Director SUE Behavioural Design",
        description: 'Tom De Bruyne is an expert in persuasion design, persuasion psychology, marketing strategy, and innovation. Using behavioural methods, he creates opportunities for brands and organisations to connect with consumers in a new context. His credo: "In order to convince, you have to think ideas the other way round". At UBX, he will be demonstrating what this means.'
    },
    {
        firstName: "Bjørn",
        lastName: "Karmann",
        image: "resources/img/UBX19_Karmann.png",
        jobInfo: "Interaction Designer Tellart, Amsterdam",
        description: 'The multiple award-winning designer Bjørn Karmann is constantly pushing the thinking of machine learning as a means of prototyping and enriching spatial interaction. At UBX, Bjørn and his fellow designer Tore Knudsen will talk about their joint invention Project Alias, a teachable „parasite“ designed to give users more control over their smart assistants through a simple app. They will explain why they freely share the plans for 3D printing and reflect on how the big tech players are influencing privacy and shaping our lives.'
    },
    {
        firstName: "Tore",
        lastName: "Knudsen",
        image: "resources/img/UBX19_Knudsen.png",
        jobInfo: "Interaction Designer Topp Innovation & Design, Malmø",
        description: 'Tore Knudsen mainly works with UX design and prototyping for digital products and experiences. His personal work is often driven by the interest to explore and challenge our relationship with modern technology, and he has won multiple awards with work that strives to do so. Along with his designing counterpart Bjørn Karmann, Tore will talk about their joint invention Project Alias – recently awarded the prestigious Starts Prize – at UBX. Showing how thoughtful UX design is able to forces smart home systems to respect our privacy.'
    },
    {
        firstName: "Christian",
        lastName: "Greb",
        image: "resources/img/UBX19_Greb.png",
        jobInfo: "Diplom Psychologist & Chief Innovation Officer at Precire",
        description: 'Christian Greb explores and analyses linguistic and written communication by using AI. His credo: words transport more than pure content. By combining technology with human emotions, he identifies hidden personality traits and special abilities and potentials. At UBX, the co-founder of Precire shows how written and spoken language is decoded and broken down into tens of thousands of tiny digital building blocks and elements using software – practical approaches included.'
    },
    {
        firstName: "Dagmar",
        lastName: "Schuller",
        image: "resources/img/UBX19_Schuller.png",
        jobInfo: "CEO & Co-Founder audEERING, Munich/Berlin",
        description: "Dagmar Schuller is among the most important experts in (emotional) artificial intelligence, machine learning and big data. Developing and working on it for over ten years, with a clear focus on the benefits of intelligent audio analysis for the people. With her team at the AI innovator audEERING, she is thus developing new applications for a wide range of fields, from medicine and automotive to smart personal assistants. At UBX she is part of a top-class expert panel on AI and ethics."
    },
    {
        firstName: "Dennis",
        lastName: "Maier",
        image: "resources/img/UBX19_Meier.png",
        jobInfo: "AI Researcher & Software Developer Cairo AG, Mannheim",
        description: "Dennis Maier takes the technical lead in software development and AI research at Cairo AG. He focuses on data science, machine learning, image classification & object detection to open up new solutions in the field of AI and the IIoT. He was also nominated for this year' s Digital Leader's Award and will participate in the discussion round \"How to become a Digital Leader\" at UBX, which will be moderated by IDG."
    },
    {
        firstName: "Thomas",
        lastName: "Henzler",
        image: "resources/img/UBX19_Henzler.png",
        jobInfo: "Chief Information Officer Piller Blowers & Compressors, Moringen",
        description: "Thomas Henzel is CIO of PB&C, a well-known manufacturer of high-power blowers and compressors for the process industry. Directing the headquarter IT as well as strategic business projects and operating as a solution architect for SAP modules. This year he was a nominee for the Digital Leader's Award. At UBX, he will take part in a panel of digitization executives trying to figure out how to become a digital leader."
    },
    {
        firstName: "Uwe",
        lastName: "Linck",
        image: "resources/img/UBX19_Linck.png",
        jobInfo: "Head of Test Department & IT Administration Lorenz GmbH & Co. KG, Schelklingen-Ingstetten",
        description: "Uwe Linck is specialized in flow measurement at Lorenz GmbH & Co. KG. Apart from developing new radio integrated digital water meters, he and his team digitize production facilities and manufacturing processes – and thereby transform a traditional company into a digitally driven manufacturer of cutting-edge technology. Nominated for this year's Digital Leader's Award, he will be part of the panel discussion \"How to become a Digital Leader\" at UBX."
    },
    {
        firstName: "Linda",
        lastName: "Schreurs",
        image: "resources/img/UBX19_Schreurs.png",
        jobInfo: "Senior Digital & Communication Manager La Roche-Posay, L'Oréal",
        description: "Linda Schreurs is in charge of La Roche-Posay’s digital line, one of the most successfull dermocosmetic brands of L'Oréal. Together with Anne-Kathrin Bedoy, who heads the digital agenda of the dermocosmetics division at L'Oréal Germany, she implements  'My Skin Track UV', the first wearable sensor and companion app to determine personal UV exposure, pollution, pollen levels and humidity. At UBX, their tandem lecture will show how scientific and technological progress can take the user experience onto a new level."
    },
]

export default (render: Function, data: SpeakersTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="speakers twelve-column-grid">
            <simple-headline light>Speakers</simple-headline>
            ${speakersData.map(({ firstName, lastName, image, jobInfo, description }) => wire()`<speaker-box firstName=${firstName} lastName=${lastName} image=${image} jobInfo=${jobInfo} description=${description}></speaker-box>`)}
        </div>
    `;
}
