import React from "react"
//import Globe from "react-globe.gl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortByTime: true,
      showOfficial: false,
      showFavoritesOnly: false
    }
  }

  handleOfficial() {
    this.setState({ showOfficial: !this.state.showOfficial })
  }

  render() {
    return (
      <Layout>
        <SEO title="anne's journal" />
        <input type='checkbox' id='official' name='official' value='official' onClick={() => this.handleOfficial()} style={{ marginLeft: '10px' }} />
        <label htmlFor='official'> Show official course names and descriptions</label>
        {/* <input type='checkbox' id='topic' name='topic' value='topic' onClick={() => this.handleOfficial()} style={{ marginLeft: '10px' }} />
        <label htmlFor='topic'> Sort by topic instead of time</label> */}
        <p>
          Currently, this page only has notes on college courses. I'm hoping to add notes on other things soon! Also hoping this will
          make me more intentional when deciding what commitments to sign up for in the future &mdash; I tend to get false impressions
          (e.g. of how much I enjoyed or learned from something) when I don't stop and reflect. This year, though, I chose courses
          spontaneously and across random interests, knowing they'd probably fit under the major I have in mind.
        </p>
        <h3 style={{ marginLeft: '10px' }}>Spring 2021</h3>
        <Card time='20212' topic='CS Theory' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Discrete math for CS (5 units) ❤️</b>
            <p>
              I don't really know how to describe this class lmao, but I like it, although I now shut down every time I'm reading
              a sociology paper and they start using discrete math symbols.
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>CS 103: Mathematical Foundations of Computing</b>
              <p>
                What are the theoretical limits of computing power? What problems can be solved with computers? Which ones cannot? And how can we reason about the answers to these questions with mathematical certainty? This course explores the answers to these questions and serves as an introduction to discrete mathematics, computability theory, and complexity theory. At the completion of the course, students will feel comfortable writing mathematical proofs, reasoning about discrete structures, reading and writing statements in first-order logic, and working with mathematical models of computing devices. Throughout the course, students will gain exposure to some of the most exciting mathematical and philosophical ideas of the late nineteenth and twentieth centuries. Specific topics covered include formal mathematical proofwriting, propositional and first-order logic, set theory, binary relations, functions (injections, surjections, and bijections), cardinality, basic graph theory, the pigeonhole principle, mathematical induction, finite automata, regular expressions, the Myhill-Nerode theorem, context-free grammars, Turing machines, decidable and recognizable languages, self-reference and undecidability, verifiers, and the P versus NP question. Students with significant proofwriting experience are encouraged to instead take CS154. Students interested in extra practice and support with the course are encouraged to concurrently enroll in CS103A. Prerequisite: CS106B or equivalent. CS106B may be taken concurrently with CS103.
              </p>
            </div>
          }
        </Card>
        <Card time='20212' topic='Tech and Society' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Social computing, the "go viral" class (4 units)</b>
            <p>
              No comments yet &mdash; haven't really reflected on this class much, but I think I'm struggling to get the
              most out of this class because I'm a little burnt out — but on a happier note, we've been prototyping / 
              designing / building a social computing system in a group for our final project, which has been a pretty cool
              & valuable experience!<br />
              <a href="https://dl.acm.org/doi/10.1145/142750.142769" target="_blank" rel="noreferrer">"Beyond being there" &mdash; Hollan & Stornetta</a><br />
              Excerpts from <a href="https://en.wikipedia.org/wiki/The_Presentation_of_Self_in_Everyday_Life" target="_blank" rel="noreferrer"><i>The Presentation of Self in Everyday Life</i> &mdash; Goffman</a><br />
              Excerpts from <a href="https://www.ucpress.edu/book/9780520272941/the-managed-heart" target="_blank" rel="noreferrer"><i>The Managed Heart: Commercialization of Human Feeling</i> &mdash; Hochschild</a><br />
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>CS 278: Social Computing</b>
              <p>
                Today we interact with our friends and enemies, our team partners and romantic partners, and our organizations and societies, all through computational systems. How do we design these social computing systems to be effective and responsible? This course covers design patterns for social computing systems and the foundational ideas that underpin them. Students will engage in the creation of new computationally-mediated social environments. Course available for 3-4 units; students enrolling in the 4-unit option will conduct deeper engagement with the topic via additional readings and discussions.
              </p>
            </div>
          }
        </Card>
        <Card time='20212' topic='Media Studies' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Assigned writing class; reading and writing about media (4 units)</b>
            <p>
              No comments yet &mdash; haven't really reflected on this class much, but I think I'm struggling to get the
              most out of this class because I'm a little burnt out
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>PWR 1CK: Investigating the News: Journalism, Tech, and the Future</b>
              <p>
                Rhetorical analysis of readings, research, and argument. Focus is on development of a substantive research-based argument using multiple sources. Individual conferences with instructor. For course videos and full descriptions, see https://vcapwr-catalog.stanford.edu. Enrollment is handled by the PWR office.
              </p>
            </div>
          }
        </Card>
        <Card time='20212' topic='Medical Anthropology' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Assigned humanities class; reading and writing about medicine, embodiment, and culture (4 units)</b>
            <p>
              No comments yet &mdash; haven't really reflected on this class much, but I think I'm struggling to get the
              most out of this class because I'm a little burnt out<br />
              Excerpts from <a href="https://www.ucpress.edu/book/9780520276574/malignant" target="_blank" rel="noreferrer"><i>Malignant: How Cancer Becomes Us</i> &mdash; Dr. Jain</a><br />
              <a href="https://press.uchicago.edu/ucp/books/book/chicago/R/bo3697068.html" target="_blank" rel="noreferrer">"A World Brightly Different: Photographic Conventions, 1950-1986" from <i>Reading National Geographic</i> &mdash; Lutz & Collins</a><br />
              <a href="https://roxanegay.com/books/hunger/" target="_blank" rel="noreferrer"><i>Hunger</i> &mdash; Roxane Gay</a>
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>THINK 48: Reading the Body: How Medicine and Culture Define the Self</b>
              <p>
                How have our perceptions of what is considered normal/abnormal; beautiful/ugly; infected/uninfected changed over time? How do these changing medical and cultural representations of the body reflect larger societal shifts? How does illness change our perceptions of our bodies and our identities? Viewed through the lens of medicine, the body is a text that offers clues to health and illness, yet clinical readings are never entirely objective. Culture informs and distorts how we discern, accept, reject, and analyze our bodies. Looking at literary, medical, ethical, and anthropological texts, we ask how representations of the body affects the way we experience illness, embody gender and racial identities, and understand our rights (or lack of rights) to control our own bodies. We will critically examine our perceptions about the body and debate some of the most complex and sensitive issues surrounding the body, from the ethics of medical research trials to end of life decisions.
              </p>
            </div>
          }
        </Card>
        <br />
        <h3 style={{ marginLeft: '10px' }}>Winter 2021</h3>
        <Card time='20211' topic='CS Systems'style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Programming "under the hood" with C (5 units) ❤️</b>
            <p>
              Wrote two heap allocators, which was fun, and defused a binary bomb, which was awful! Overall enjoyed this class though.<br />
              <a href="https://www.youtube.com/watch?v=G7LJC9vJluU" target="_blank" rel="noreferrer">"Program in C"</a>
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>CS 107: Computer Organization & Systems</b>
              <p>
                Introduction to the fundamental concepts of computer systems. Explores how computer systems execute programs and manipulate data, working from the C programming language down to the microprocessor. Topics covered include: the C programming language, data representation, machine-level code, computer arithmetic, elements of code compilation, memory organization and management, and performance evaluation and optimization. Prerequisites: 106B or X, or consent of instructor.
              </p>
            </div>
          }
        </Card>
        <Card time='20211' topic='Tech and Society' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Tech ethics and policy (5 units)</b>
            <p>
              Discussed algorithms, privacy, automation, and equity in tech. To be honest, I was so burnt out at the time,
              I didn't get as much out of this class as I could've. There were also a few problems throughout, though I think the
              Concept&trade; of the class was good (class was co-taught by CS, phil, and public policy profs). Taiwan Digital Minister
              Audrey Tang (virtually) visited & spoke to us, too!<br />
              <a href="https://communemag.com/optimize-what/" target="_blank" rel="noreferrer">"Optimize What?" &mdash; Jimmy Wu for <i>Commune Mag</i></a><br />
              Excerpts from <a href="https://weaponsofmathdestructionbook.com" target="_blank" rel="noreferrer"><i>Weapons of Math Destruction</i> &mdash; Cathy O’Neil</a><br />
              <a href="https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm" target="_blank" rel="noreferrer">"How We Analyzed the COMPAS Recidivism Algorithm" &mdash; Larson, Mattu, Kirchner, Angwin for <i>ProPublica</i></a><br />
              <a href="https://science.sciencemag.org/content/347/6221/509.full" target="_blank" rel="noreferrer">"Privacy and human behavior in the age of information" &mdash; Acquisti, Brandimarte, Loewenstein</a><br />
              <a href="https://learning.hccs.edu/faculty/emily.klotz/engl1302-6/readings/the-ones-who-walk-away-from-omelas-ursula-le-guin/view" target="_blank" rel="noreferrer">"The Ones Who Walk Away From Omelas" &mdash; Ursula Le Guin</a>;{` `}
              <a href="https://www.lightspeedmagazine.com/fiction/the-ones-who-stay-and-fight/" target="_blank" rel="noreferrer">"The Ones Who Stay and Fight" &mdash; N.K. Jemisin</a>
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>CS 182: Ethics, Public Policy, and Tech</b>
              <p>
                Examination of recent developments in computing technology and platforms through the lenses of philosophy, public policy, social science, and engineering. Course is organized around four main units: algorithmic decision-making and bias; data privacy and civil liberties; artificial intelligence and autonomous systems; and the power of private computing platforms. Each unit considers the promise, perils, rights, and responsibilities at play in technological developments. Prerequisite: CS106A.
              </p>
            </div>
          }
        </Card>
        <Card time='20211' topic='Media Studies' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Intro media studies (5 units) ❤️</b>
            <p>
              Discussed media corporations, media representations, tech and digital media, and the changing media landscape.
              Made me think about how I consume media & the media I engage with (e.g. while writing one of our papers, I realized
              just how many dominant ideologies you can unpack from a seemingly-simple ad).<br />
              <a href="https://journals.flvc.org/demcom/article/view/76495/74124" target="_blank" rel="noreferrer">"The Valorization of Surveillance: Towards a Political Economy of Facebook" &mdash; Nicole Cohen</a><br />
              <a href="https://books.google.com/books?hl=en&lr=&id=KQzr_BTuefkC&oi=fnd&pg=PA43&dq=stuart+hall+encoding+decoding&ots=arJn4HzETL&sig=7tlftEUz8PGGIbJSIAoITPuvwUQ#v=onepage&q=stuart%20hall%20encoding%20decoding&f=false" target="_blank" rel="noreferrer">"Encoding / Decoding" &mdash; Stuart Hall</a><br />
              <a href="https://journals.sagepub.com/doi/10.1177/1527476407307241" target="_blank" rel="noreferrer">"Watching Television Without Pity: The Productivity of Online Fans" &mdash; Mark Andrejevic</a><br />
              <a href="http://web.mit.edu/21l.432/www/readings/tv%20as%20a%20cultural%20forum.pdf" target="_blank" rel="noreferrer">"Television as a Cultural Forum" &mdash; Newcomb & Hirsch</a><br />
              <a href="https://www.universitypressscholarship.com/view/10.7208/chicago/9780226627731.001.0001/upso-9780226627427-chapter-005" target="_blank" rel="noreferrer">"A Felony Conviction as a Roboprocess" &mdash; Keesha M. Middlemass</a>
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>COMM 1B: Media, Culture, Society</b>
              <p>
                The institutions and practices of mass media, including television, film, radio, and digital media, and their role in shaping culture and social life. The media's shifting relationships to politics, commerce, and identity.
              </p>
            </div>
          }
        </Card>
        <br />
        <h3 style={{ marginLeft: '10px' }}>Autumn 2020</h3>
        <Card time='20204' topic='CS Systems' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Intro programming (C++) (5 units)</b>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>CS 106B: Programming Abstractions</b>
              <p>
                Abstraction and its relation to programming. Software engineering principles of data abstraction and modularity. Object-oriented programming, fundamental data structures (such as stacks, queues, sets) and data-directed design. Recursion and recursive data structures (linked lists, trees, graphs). Introduction to time and space complexity analysis. Uses the programming language C++ covering its basic facilities. Prerequisite: 106A or equivalent.
              </p>
            </div>
          }
        </Card>
        <Card time='20204' topic='Cognitive Science' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>A mix of CS / AI, developmental psych, linguistics, philosophy (4 units) ❤️</b>
            <p>
              Pretty high-level (not particularly in-depth); regardless, I really loved this class! Before, I thought
              SymSys was "built around CS"; this class made me realize it can be built around anything.<br />
              <a href="https://en.wikipedia.org/wiki/Buffalo_buffalo_Buffalo_buffalo_buffalo_buffalo_Buffalo_buffalo" target="_blank" rel="noreferrer">Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo</a><br />
              <a href="https://www.theatlantic.com/science/archive/2016/06/can-neuroscience-understand-donkey-kong-let-alone-a-brain/485177/" target="_blank" rel="noreferrer">"Can a Neuroscientist Understand Donkey Kong, Let Alone a Brain?" — Ed Yong for <i>The Atlantic</i></a><br />
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjYsKu37sLtAhUQq1kKHRS8B44QwqsBMAB6BAgEEAQ&url=https%3A%2F%2Fwww.ted.com%2Ftalks%2Falison_gopnik_what_do_babies_think%3Flanguage%3Den&usg=AOvVaw2R7nTkJoFsCp7j3EmROoVU" target="_blank" rel="noreferrer">"What do babies think?" — Alison Gopnik, TEDGlobal 2011</a>
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>SYMSYS 1: Minds and Machines</b>
              <p>
                (Formerly SYMSYS 100). An overview of the interdisciplinary study of cognition, information, communication, and language, with an emphasis on foundational issues: What are minds? What is computation? What are rationality and intelligence? Can we predict human behavior? Can computers be truly intelligent? How do people and technology interact, and how might they do so in the future? Lectures focus on how the methods of philosophy, mathematics, empirical research, and computational modeling are used to study minds and machines. Students must take this course before being approved to declare Symbolic Systems as a major. All students interested in studying Symbolic Systems are urged to take this course early in their student careers. The course material and presentation will be at an introductory level, without prerequisites. If you have any questions about the course, please email symsys1staff@gmail.com.
              </p>
            </div>
          }
        </Card>
        <Card time='20204' topic='Tech and Society' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Analyzing political datasets with R (5 units)</b>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>POLI 150A: Data Science for Politics</b>
              <p>
                Data science is quickly changing the way we understand and and engage in the political process. In this course we will develop fundamental techniques of data science and apply them to large political datasets on elections, campaign finance, lobbying, and more. The objective is to give students the skills to carry out cutting edge quantitative political studies in both academia and the private sector. Students with technical backgrounds looking to study politics quantitatively are encouraged to enroll.
              </p>
            </div>
          }
        </Card>
        <Card time='20204' topic='Tech and Society' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Tech and the 2020 election (1 unit)</b>
            <p>
              Discussed a variety of tech & politics-related issues. I think this class would've benefited from a more diverse array
              of speakers. On the bright side, we got to watch "Coded Bias"!
            </p>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>POLI 52K: Tech and the 2020 Election</b>
              <p>
                The 2020 U.S. Presidential Election season will be historic. A global pandemic, mass protests against police violence and enduring racism, an upended economy, a divisive incumbent President, and a polarized America are a potent combination for surprises. One thing is certain, however: the digital tools and platforms born in Silicon Valley will play an enormously important role in the campaign. Topics include: the technologies of the voting booth and reporting results; online filter bubbles, echo chambers, and effects on polarization; amplification and content moderation of political candidates; online political advertising and microtargeting; manipulation, misinformation, and disinformation; the U.S. in comparative perspective; and policy approaches. This course will attempt, with the help of expert guests, to draw lessons about the legitimate and illegitimate uses of technology in the 2020 election and to take stock of the health of American democracy. We also explore questions about a tech policy agenda in a Trump or Biden administration. We will meet once per week, on Wednesday evenings, with examinations of the most important digital technologies at stake in the election and for the country.
              </p>
            </div>
          }
        </Card>
        <Card time='20204' topic='Earth Systems' style={{ display: 'block' }}>
          <div className='unofficial'>
            <b>Environmental justice speaker series (1 unit)</b>
          </div>
          {this.state.showOfficial &&
            <div className='official'>
              <b>HUMRTS194A: Environmental Justice Colloquium</b>
              <p>
                This colloquium brings the voices and vision of leading Environmental Justice (EJ) advocates to the Stanford community, in order to educate, inspire, and transform our understanding of environmental science. Environmental Justice advances a positive vision for policies and actions that fight environmental racism. EJ approaches involve centering the voices and leadership of marginalized communities in 1) ensuring equitable access to environmental benefits, and 2) preventing or mitigating the disproportionate impacts of environmental harms for all communities, regardless of gender, class, race, ethnicity, or other social positions. This colloquium highlights the work of leading EJ thinkers and practitioners, speaking from frontline organizations on a wide range of topics. These topics include acting on toxic exposures and health disparities for community resilience, climate justice and youth action, Indigenous land and water rights, green cities and Afrofuturism, food justice and intersecting social movements, queer ecologies, and more. The colloquium will host a weekly speaker, and final symposium at the end of the quarter. The first meeting for this course will take place during WEEK 3.
              </p>
            </div>
          }
        </Card>
      </Layout>
    )
  }
}

export default IndexPage
